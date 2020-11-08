import React, { useState, useEffect } from 'react'
import '../../styles/admin/AdminTeacher.css'

import { useParams } from 'react-router-dom'
import api from '../../config/api'
import history from '../../config/history'

import { toast, ToastContainer } from 'react-toastify'

interface RouteParams {
    id: string
}

function AdminTeacherEdit() {
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')

    const params = useParams<RouteParams>()

    useEffect(() => {
        api.get(`teachers/${params.id}`)
            .then(res => {
                setName(res.data.name)
                setSubject(res.data.subject)
            })
    }, [])

    const deleteTeacher = (e: React.SyntheticEvent) => {
        e.preventDefault()

        api.delete(`teachers/${params.id}`)
            .then(res => {
                toast.success(res.data, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })

                setName('')
                setSubject('')
            })



    }

    return (
        <div className="admin-page">
            <h2>Página de administração</h2>
            <span>Criar, editar ou excluir dados</span>
            <hr />

            <h3>Professor(a):</h3>

            <form className="admin-teacher-form" >
                <div className="inputs">
                    <input type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Nome"
                    />

                    <input type="text"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        placeholder="Matéria"
                    />
                </div>

                <div className="buttons">
                    <button className="delete-button" onClick={e => deleteTeacher(e)}>Excluir</button>
                </div>
            </form>
            <ToastContainer />

        </div>
    )
}

export default AdminTeacherEdit 