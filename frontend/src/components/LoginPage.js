import {Link} from 'react-router-dom';

const LoginPage = () => {
    return(
        <div>

                <body style={{
            "width":"400px",
            "margin":"auto"
        }}>
                <h4>Welcome to the workoutlogger. Please login or register as a new user</h4>
                <br/>
                </body>

            <body  style={{
            "width":"400px",
            "backgroundColor":"grey",
            "margin":"auto"
        }}>
            <form className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text"
                        placeholder="MattiMeikalainen"
                        name="username"
                        id="username"
                        className="form-control"
                        onChange=""
                        value=""/>
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password"
                        placeholder="Salasana123"
                        name="password"
                        id="password"
                        className="form-control"
                        onChange=""
                        value=""/>			
                <button className="btn btn-primary" name="login">Login</button>
                <button className="btn btn-warning" name="register">Register</button>
            </form>
            </body>

                <Link to="/sivu2b"><h2>Uusi treeni</h2></Link>    

        </div>
        )
}

export default LoginPage;