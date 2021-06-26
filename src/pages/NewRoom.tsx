import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import {Link, useHistory} from 'react-router-dom'

import '../styles/auth.scss'
import { Button } from '../components/Button'

import '../styles/button.scss'
import { useAuth } from '../hooks/useAuth'

import {FormEvent} from 'react'
import { useState } from 'react'

import { database } from '../services/firebase'

export function NewRoom(){
    const { user } = useAuth();
    const [newRoom, setNewRoom] = useState('')
    const history = useHistory()
    
      async function handleCreateRoom(event : FormEvent) {
        event.preventDefault()
        if(newRoom.trim() == ''){
            return;
        }
         const roomRef = database.ref('rooms')
         const firebaseRoom = await roomRef.push({
             title: newRoom,
             author: user?.id
         })
        history.push(`/rooms/${firebaseRoom.key}`)
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
                    <h2>Criar uma nova sala</h2>
                    <form action="" onSubmit={handleCreateRoom}>
                        <input 
                          type="text"
                          placeholder="Nome da sala"
                          onChange={event => setNewRoom(event.target.value)}
                          value={newRoom}
                        />
                        <Button type="submit">Criar na sala</Button>
                    </form>
                    <p>Que entra numa sala existente?  <Link to="/">click aqui</Link></p>
                </div>
            </main>
        </div>
    )
}