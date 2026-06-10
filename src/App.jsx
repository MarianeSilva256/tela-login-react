import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar.jsx';
import Home from './pages/Home.jsx';
import Ferramentas from './pages/Ferramentas.jsx';
import Analises from './pages/Analises.jsx';
import Blog from './pages/Blog.jsx';
import Login from './pages/Login.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/renda-fixa" element={<div style={{padding: '2rem'}}><h1>Renda Fixa</h1><p>Conteúdo de Renda Fixa...</p></div>} />
        <Route path="/cripto" element={<div style={{padding: '2rem'}}><h1>Cripto</h1><p>Conteúdo de Criptomoedas...</p></div>} />
        <Route path="/ferramentas" element={<Ferramentas />} />
        <Route path="/analises" element={<Analises />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    </>
  );
}

export default App;