import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Ferramentas from './pages/Ferramentas';
import Analises from './pages/Analises';
import Blog from './pages/Blog';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      {/* O Navbar fica fixo no topo em todas as páginas */}
      <Navbar /> 
      
      {/* Aqui o React Router decide qual página renderizar baseado na URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/renda-fixa" element={<div style={{padding: '2rem'}}><h1>Renda Fixa</h1><p>Conteúdo de Renda Fixa...</p></div>} />
        <Route path="/cripto" element={<div style={{padding: '2rem'}}><h1>Cripto</h1><p>Conteúdo de Criptomoedas...</p></div>} />
        <Route path="/ferramentas" element={<Ferramentas />} />
        <Route path="/analises" element={<Analises />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;