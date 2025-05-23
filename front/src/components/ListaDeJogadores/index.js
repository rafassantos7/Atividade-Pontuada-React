// src\components\ListaDeUsuarios\index.js

import { useState, useEffect } from "react";
import axios from "axios";
import './styles.css'
import background from '../../assets/images/background-lista.jpg'

function ListaDeJogadores() {
    const [jogadores, setJogadores] = useState([])

    useEffect(() => {
        const carregarJogadores = async () => {
            try {
                const response = await axios.get('http://localhost:8080/jogadores')
                setJogadores(response.data)
            } catch (error) {
                alert('Erro ao buscar jogadores: ', error)
                setJogadores([])
            }
        }
        carregarJogadores()
    }, [])

    return (
        <div className="container-lista">
        <img src={background} alt="Background" className="background-image" />
        <ul id="listaJogadores" className="lista-jogadores">
            {jogadores.length === 0 ? (
                <li>Nenhum jogador encontrado.</li>
            ) : (
                jogadores.map( jogador => (
                    <li key={jogador.id}>
                        <strong>Nome: </strong> {jogador.nome}<br />
                        <strong>Idade: </strong> {jogador.idade}<br />
                        <strong>Altura: </strong> {jogador.altura}<br />
                        <strong>Peso: </strong> {jogador.peso}<br />
                        <strong>Número da Camisa: </strong> {jogador.numeroCamisa}<br />
                        <strong>Posição: </strong> {jogador.posicao}<br />
                        <strong>Sexo: </strong> {jogador.sexo}
                    </li>
                ))
            )}
        </ul>
    </div>
    )
    
}

export default ListaDeJogadores