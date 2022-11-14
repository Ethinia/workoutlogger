import {useState,useEffect,useContext} from 'react';
import ActionContext from '../context/ActionContext';
import * as ActionConstants from '../types/actionConstants';
//import useAppState from './useAppState';

const useAction = () => {

    const action = useContext(ActionContext);
    const [state,setState] = useState({
        url:"",
        request:{},
        action:""
    })

    //const {token} = useAppState();

    //backend communication using useEffect

    useEffect(() => {

        const contactBackend = async () => {
            if(!state.url) {
                return;
            }
            action.dispatch({
                type:ActionConstants.LOADING
            })
            let response = await fetch(state.url,state.request);
            action.dispatch({
                type:ActionConstants.STOP_LOADING
            })
            if(response.ok) {
                switch(state.action) {
                    case "getlist":
                        let list = await response.json();
                        if(!list) {
                            action.dispatch({
                                type:ActionConstants.FETCH_LIST_FAILED,
                                error:"Failed to parse wolapp information"
                            })
                            return;
                        }
                        action.dispatch({
                            type:ActionConstants.FETCH_LIST_SUCCESS,
                            list:list
                        })
                        return;
                    case "add":
                        action.dispatch({
                            type:ActionConstants.ADD_LIIKE_SUCCESS
                        })
                        getList();
                        return;
                    case "remove":
                        action.dispatch({
                            type:ActionConstants.REMOVE_LIIKE_SUCCESS
                        })
                        getList();
                        return;
                    case "edit":
                        action.dispatch({
                            type:ActionConstants.EDIT_LIIKE_SUCCESS
                        })
                        getList();
                        return;
                    default:
                        return;    
                }
            } else {
                switch(state.action) {
                    case "getlist":
                        action.dispatch({
                            type:ActionConstants.FETCH_LIST_FAILED,
                            error:"Server responded with a status "
                            +response.status+" "+response.statusText
                        })
                        return;
                    case "add":
                        action.dispatch({
                            type:ActionConstants.ADD_LIIKE_FAILED,
                            error:"Server responded with a status "
                            +response.status+" "+response.statusText
                        })
                        return;
                    case "remove":
                        action.dispatch({
                            type:ActionConstants.REMOVE_LIIKE_FAILED,
                            error:"Server responded with a status "
                            +response.status+" "+response.statusText
                        })
                        return;
                    case "edit":
                        action.dispatch({
                            type:ActionConstants.EDIT_LIIKE_FAILED,
                            error:"Server responded with a status "
                            +response.status+" "+response.statusText
                        })
                        return;
                    default:
                        return;
                }


            }
        }

        contactBackend();

    },[state])

    //Action generators for components

    const getList = () => {
        setState({
            url:"/api/wolapp",
            request:{
                method:"GET",
                headers:{"Content-Type":"application/json"}
            },
            action:"getlist"
        })
    }

    const add = (liike) => {
        setState({
            url:"/api/wolapp",
            request:{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(liike)
            },
            action:"add"
        })
    }

    const remove = (id) => {
        setState({
            url:"/api/wolapp/"+id,
            request:{
                method:"DELETE",
                headers:{"Content-Type":"application/json"}
            },
            action:"remove"
        })
    }

    const edit = (liike) => {
        setState({
            url:"/api/wolapp/"+liike.id,
            request:{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(liike)
            },
            action:"edit"
        })
    }

    return {getList,add,remove,edit}
}

export default useAction;