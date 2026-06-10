function Login() {
  return (
    <div style={{ padding: '2rem', maxWidth: '300px' }}>
      <h1>Login</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="E-mail" style={{display: 'block', margin: '10px 0', width: '100%'}} />
        <input type="password" placeholder="Senha" style={{display: 'block', margin: '10px 0', width: '100%'}} />
        <button type="submit">Cadastrar / Entrar</button>
      </form>
    </div>
  );
}
export default Login;