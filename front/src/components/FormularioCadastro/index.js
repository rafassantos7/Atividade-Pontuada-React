// src\components\FormularioCadastro\index.js

import { useState } from "react";
import './styles.css'
import { useNavigate } from "react-router-dom";
import useMensagem from '../../hooks/useMensagem'
import MensagemFeedback from '../MensagemFeedback'
import logo from '../../assets/images/logo.png'
import axios from 'axios'

function FormularioCadastro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [sexo, setSexo] = useState('')
    const navigate = useNavigate()
    const { exibirMensagem , mensagem, tipoMensagem, visivel, fecharMensagem } = useMensagem()

    const cadastrarUsuario = async () => {
        try {
            const response = await axios.post('http://localhost:8080/usuarios', {nome, email, senha,sexo})
            exibirMensagem(response.data.mensagem || 'Usuário cadastrado com sucesso!', 'sucesso')
            setNome('')
            setEmail('')
            setSenha('')
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
        <div className="container">
            <img src={logo} alt="Logo da empresa" />
            <h2>Cadastro de usuários</h2>
            <form onSubmit={(e) => {e.preventDefault(); cadastrarUsuario()}}>
                <input 
                    type="text"
                    id="nome"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input 
                    type="email"
                    id="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                <input 
                    type="password"
                    id="senha"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>

            <button onClick={() => navigate('/usuarios')} className="link-usuarios">
                Ver usuários cadastrados
            </button>

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