// src\components\FormularioCadastro\index.js

import { useState } from "react";
import './styles.css'
import { useNavigate } from "react-router-dom";
import useMensagem from '../../hooks/useMensagem'
import MensagemFeedback from '../MensagemFeedback'
import logo from '../../assets/images/logo.png'
import axios from 'axios'
import background from '../../assets/images/background-cadastro.jpg'

function FormularioCadastro() {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [sexo, setSexo] = useState('')
    const [numeroCamisa, setNumeroCamisa] = useState('')
    const [posicao, setPosicao] = useState('')
    const navigate = useNavigate()
    const { exibirMensagem , mensagem, tipoMensagem, visivel, fecharMensagem } = useMensagem()

    const cadastrarJogador = async () => {
        try {
            const response = await axios.post('http://localhost:8080/jogadores', {nome, idade, altura, peso, numeroCamisa, posicao, sexo})
            exibirMensagem(response.data.mensagem || 'Usuário cadastrado com sucesso!', 'sucesso')
            setNome('')
            setIdade('')
            setAltura('')
            setPeso('')
            setNumeroCamisa('')
            setPosicao('')
            setSexo('')
        } catch (error) {
            let erroMsg = 'Erro ao conectar ao servidor.'
            if (error.response && error.response.data) {
                erroMsg = error.response.data.mensagem
                if (error.response.data.erros) {
                    erroMsg += ' ' + Object.values(error.response.data.erros).join(', ')
                }
            }
            exibirMensagem(erroMsg, 'erro')
        }
    }

    return (
        <div className="container-image">
        <img src={background} alt="Background" className="background-image" />
        <div className="square-cadastro">
        <div className="container">
            <img src={logo} alt="Logo da empresa" className="logo"/>
            <h2>Cadastro de jogadores</h2>
            <form onSubmit={(e) => {e.preventDefault(); cadastrarJogador()}}>
                <input 
                    type="text"
                    id="nome"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input 
                    type="number"
                    id="idade"
                    placeholder="Digite sua idade..."
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                    required
                />
                <select 
                    value={sexo}
                    onChange={(e) => setSexo(e.target.value)}
                    >
                    {sexo === '' && (
                        <option value="" disabled>Sexo</option>
                    )}
                    <option value="MASCULINO">Masculino</option>
                    <option value="FEMININO">Feminino</option>
                    <option value="PREFIRONAODIZER">Prefiro não dizer</option>
                </select>
                <select 
                    value={posicao}
                    onChange={(e) => setPosicao(e.target.value)}
                    >
                    {posicao === '' && (
                        <option value="" disabled>Posicao</option>
                    )}
                    <option value="GOLEIRO">Goleiro</option>
                    <option value="LATERAL_DIREITO">Lateral Direito</option>
                    <option value="LATERAL_ESQUERDO">Lateral Esquerdo</option>
                    <option value="LATERAL_DIREITO">Lateral Direito</option>
                    <option value="VOLANTE">Volante</option>
                    <option value="ATACANTE">Atacante</option>
                </select>
                <input 
                    type="number"
                    id="altura"
                    placeholder="Digite sua altura..."
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    required
                />
                <input 
                    type="number"
                    id="peso"
                    placeholder="Digite seu peso..."
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    required
                />
                <input 
                    type="number"
                    id="numeroCamisa"
                    placeholder="Digite o número da camisa desejada..."
                    value={numeroCamisa}
                    onChange={(e) => setNumeroCamisa(e.target.value)}
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>
            <button onClick={() => navigate('/home')}>
               Voltar
            </button>
            <button onClick={() => navigate('/jogadores')}>
                Ver jogadores cadastrados
            </button>

            </div>
        </div>
        <MensagemFeedback
            mensagem={mensagem}
            tipo={tipoMensagem}
            visivel={visivel}
            onclose={fecharMensagem}
        />
    </div>
)

}

export default FormularioCadastro