

const LoginPage = () => {
    return(
        <div>

                <div style={{
            "width":"400px",
            "margin":"auto"
        }}>
                <h4>Welcome to the workoutlogger. Please login or register as a new user</h4>
                <br/>
                </div>

            <div  style={{
            "width":"400px",
            "backgroundColor":"grey",
            "margin":"auto"
        }}>
            <form className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input readOnly type="text"
                        placeholder="MattiMeikalainen"
                        name="username"
                        id="username"
                        className="form-control"/>

                <label htmlFor="password" className="form-label">Password</label>
                <input readOnly type="password"
                        placeholder="Salasana123"
                        name="password"
                        id="password"
                        className="form-control"/>	

                <button disabled className="btn btn-primary" name="login">Login</button>
                <button disabled className="btn btn-warning" name="register">Register</button>
            </form>
            </div>
        </div>
        )
}

export default LoginPage;