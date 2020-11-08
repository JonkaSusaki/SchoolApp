import React, {useState, useEffect} from 'react'
import '../../styles/admin/AdminTeacher.css'

import { useParams } from 'react-router-dom'
import api from '../../config/api'
import history from '../../config/history'

interface RouteParams {
    id: string
}

function AdminDeleteStudent() {
    const [name, setName] = useState('')
    const [classState, setClassState] = useState('')
    
    const params = useParams<RouteParams>()

    useEffect(() => {
        api.get(`students/${params.id}`)
            .then(res => {
                setName(res.data.name)
                setClassState(res.data.class)
            })
    })

    return (
        <div className="admin-page">
            <h2>Página de administração</h2>
            <span>Criar, editar ou excluir dados</span>
            <hr />

            <h3>Aluno(a):</h3>

            <form className="admin-teacher-form" >
                <div className="inputs">
                    <input type="text"
                         
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                        placeholder="Nome"
                    />

                    <input type="text" 
                        
                        value={classState} 
                        onChange={e => setClassState(e.target.value)} 
                        placeholder="Turma"
                    />
                </div>

                <div className="buttons">
                    <button className="delete-button">Excluir</button>
                </div>
            </form>

        </div>
    )
}

export default AdminDeleteStudent 