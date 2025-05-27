// src\pages\Lista\index.js

import { useNavigate } from 'react-router-dom'
import './styles.css'
import ListaDeJogadores from '../../components/ListaDeJogadores'

function PaginaListaJogadores() {
    const navigate = useNavigate()
    
return (
        <div className='pagina-lista-jogadores'>
            <div className='container'>
                <h2>Lista de jogadores</h2>
                <ListaDeJogadores />
                <button onClick={() => navigate('/cadastro')} className='link-voltar'>
                    Cadastrar jogadores
                </button>
                <button onClick={() => navigate('/home')}className='link-voltar'>
               Tela Inicial
            </button>
            </div>
        </div>
    )
}

export default PaginaListaJogadores