import "./login.css"; 

function Login() {
    return (
        <div className="login-wrapper"> 
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <div>
                    <input type="email" placeholder="Digite seu email"/>
                </div>
                <br />
                <div>
                    <input type="password" placeholder="Digite sua senha" />
                    </div>
                    <br />
                    <button type="submit">Entrar</button>
            </form>
        </div> 
        </div>
    )
}
export default Login