import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import {Link} from 'react-router-dom'

import '../styles/auth.scss'
import { Button } from '../components/Button'

import '../styles/button.scss'
import { useAuth } from '../hooks/useAuth'

export function NewRoom(){
    const { user, signInWithGoogle } = useAuth();
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
                    <h1>{user?.name}</h1>
                    <form action="">
                        <input 
                          type="text"
                          placeholder="Nome da sala"
                        />
                        <Button type="submit">Criar na sala</Button>
                    </form>
                    <p>Que entra numa sala existente?  <Link to="/">click aqui</Link></p>
                </div>
            </main>
        </div>
    )
}