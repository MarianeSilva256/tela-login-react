import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#003366', 
    color: 'white',
    alignItems: 'center'
  };

  const linkStyle = {
    color: 'white',
    margin: '0 10px',
    textDecoration: 'none',
    fontWeight: '500'
  };

  return (
    <nav style={navStyle}>
      <h2>Invista Hub</h2>
      <div>
        <Link to="/" style={linkStyle}>Comece Aqui</Link>
        <Link to="/renda-fixa" style={linkStyle}>Renda Fixa</Link>
        <Link to="/cripto" style={linkStyle}>Cripto</Link>
        <Link to="/ferramentas" style={linkStyle}>Ferramentas</Link>
        <Link to="/analises" style={linkStyle}>Análises</Link>
        <Link to="/blog" style={linkStyle}>Blog</Link>
        <Link to="/login" style={{...linkStyle, backgroundColor: '#fff', color: '#003366', padding: '5px 10px', borderRadius: '4px'}}>Login</Link>
      </div>
    </nav>
  );
}
export default Navbar;