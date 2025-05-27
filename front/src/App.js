import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PaginaCadastro from './pages/Cadastro';
import './App.css'; // Para estilos globais, se necessário
import PaginaListaJogadores from './pages/Lista';
import BemVindo from './pages/BemVindo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<BemVindo />} />
        <Route path="/cadastro" element={<PaginaCadastro />} />
        <Route path="/jogadores" element={<PaginaListaJogadores />} />
      </Routes>
    </Router>
  );
}

export default App;