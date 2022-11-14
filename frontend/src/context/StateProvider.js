import {useReducer} from 'react';
import AppStateContext from './AppStateContext';
import ActionContext from './ActionContext';
import * as ActionConstants from '../types/actionConstants';

const getInitialState = () => {
    if(sessionStorage.getItem("state")) {
        let state = JSON.parse(sessionStorage.getItem("state"));
        return state;
    } else {
        return {
            list:[],
            token:"",
            error:"",
            loading:false
        }
    }
}

const initialState = getInitialState();

const saveToStorage = (state) => {
    sessionStorage.setItem("state",JSON.stringify(state));
}

const listReducer = (state,action) => {
    let tempState = {};
    switch(action.type) {
        case ActionConstants.LOADING:
            return {
                ...state,
                loading:true,
                error:""
            }
        case ActionConstants.STOP_LOADING:
            return {
                ...state,
                loading:false
            }
        case ActionConstants.FETCH_LIST_SUCCESS:
            tempState = {
                ...state,
                list:action.list
            }
            saveToStorage(tempState);
            return tempState;
        case ActionConstants.FETCH_LIST_FAILED:
            tempState = {
                ...state,
                error:action.error
            }
            saveToStorage(tempState);
            return tempState;
        case ActionConstants.ADD_LIIKE_FAILED:
            tempState = {
                ...state,
                error:action.error
            }
            saveToStorage(tempState);
            return tempState;
        case ActionConstants.REMOVE_LIIKE_FAILED:
            tempState = {
                ...state,
                error:action.error
            }
            saveToStorage(tempState);
            return tempState;
        case ActionConstants.EDIT_LIIKE_FAILED:
            tempState = {
                ...state,
                error:action.error
            }
            saveToStorage(tempState);
            return tempState;
        default:
            return state;
    }
}

const StateProvider = (props) => {

    const [state,dispatch] = useReducer(listReducer,initialState);

    return (
        <AppStateContext.Provider value={state}>
            <ActionContext.Provider value = {{dispatch:dispatch}}>
                {props.children}
            </ActionContext.Provider>
        </AppStateContext.Provider>
    )
}

export default StateProvider;