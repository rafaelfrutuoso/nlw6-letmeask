import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import {useHistory} from 'react-router-dom'

import '../styles/auth.scss'
import { Button } from '../components/Button'

import '../styles/button.scss'

export function Home(){
    const history = useHistory()

    function navegationToNewRoom(){
        history.push("/rooms/new")
    }

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
                    <button onClick={navegationToNewRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo da google" />
                        Crie sua sala com google
                    </button>
                    <div className='separator'>ou entre em uma sala</div>
                    <form action="">
                        <input 
                          type="text"
                          placeholder="Digite o codigo da sala"
                        />
                        <Button type="submit">Entra na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}