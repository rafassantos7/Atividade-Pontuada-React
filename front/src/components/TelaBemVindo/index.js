// src/pages/BemVindo/index.js
import { useNavigate } from 'react-router-dom'
import './styles.css'
import logo from '../../assets/images/logo.png'
import video from '../../assets/videos/background.mp4'

function TelaBemVindo(){
    const navigate = useNavigate()
   return (
       <div className="video-container">
        <video autoPlay loop muted playsInline className="video-background">
        <source src={video} type="video/mp4" />
        Seu navegador não suporta o vídeo.
        </video>
            <div className= "square">
                <div className="conteudo">
                <img src={logo} alt="Logo" className="logo" />
                <h1>Bem-vindo ao Relâmpago FC</h1>
                <p>Jogue com energia ⚡</p>
                <button className="botao" onClick={() => navigate('/cadastro')}>Jogue com a gente!</button>	
                <button className="botao" onClick={() => navigate('/jogadores')}>Lista de Jogadores.</button>
                </div> 
            </div>
       </div>
   );
}
export default TelaBemVindo;