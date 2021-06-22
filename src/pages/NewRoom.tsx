import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button'

import '../styles/button.scss'

export function NewRoom(){

    return(
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência  em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask"/>
                    <h2>Criar uma nova sala</h2>
                    <form action="">
                        <input 
                          type="text"
                          placeholder="Nome da sala"
                        />
                        <Button type="submit">Criar na sala</Button>
                    </form>
                    <p>Que entra numa sala existente?  <a href="">click aqui</a></p>
                </div>
            </main>
        </div>
    )
}