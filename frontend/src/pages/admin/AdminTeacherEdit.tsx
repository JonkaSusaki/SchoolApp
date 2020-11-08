import React, { useState, useEffect } from 'react'
import '../../styles/admin/AdminTeacher.css'

import { useParams } from 'react-router-dom'
import api from '../../config/api'
import { ToastContainer, toast } from 'react-toastify'

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

    const clearForm = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault()

        setName('')
        setSubject('')
    }

    const saveTeacher = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault()

        const teacher = {
            name,
            subject
        }

        if (params.id) {
            api.put(`teachers/${params.id}`, teacher)
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
                })
                .catch(err => {
                    toast.error("Não foi possível atualizar o(a) professor(a)", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                })
        } else {
            api.post('teachers', teacher)
                .then(res => {
                    toast.success("Professor criado!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                })
                .catch(err => {
                    toast.error("Não foi possível criar o Aluno", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                })
        }

    }


    return (
        <div className="admin-page">
            <h2>Página de administração</h2>
            <span>Criar, editar ou excluir dados</span>
            <hr />

            <h3>Professor(a):</h3>

            <form className="admin-teacher-form" >
                <div className="inputs">
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nome" />
                    <input type="text" value={subject} onChange={e => setSubject(e.target.value)} placeholder="Matéria" />
                </div>

                <div className="buttons">
                    <button className="save-button" onClick={e => saveTeacher(e)}>Salvar</button>
                    <button className="clear-button" onClick={e => clearForm(e)} >Cancelar</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default AdminTeacherEdit 