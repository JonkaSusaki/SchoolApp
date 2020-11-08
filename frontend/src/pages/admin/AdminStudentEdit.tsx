import React, { useState, useEffect } from 'react'
import '../../styles/admin/AdminTeacher.css'

import { useParams } from 'react-router-dom'
import api from '../../config/api'
import { ToastContainer, toast } from 'react-toastify'

interface RouteParams {
    id: string
}

function AdminStudentEdit() {
    const [name, setName] = useState('')
    const [classState, setClassState] = useState('')
    const [freq, setFreq] = useState('')

    const [mathGrade1, setMathGrade1] = useState('')
    const [mathGrade2, setMathGrade2] = useState('')
    const [mathGrade3, setMathGrade3] = useState('')
    const [mathGrade4, setMathGrade4] = useState('')

    const [portGrade1, setPortGrade1] = useState('')
    const [portGrade2, setPortGrade2] = useState('')
    const [portGrade3, setPortGrade3] = useState('')
    const [portGrade4, setPortGrade4] = useState('')

    const [histGrade1, setHistGrade1] = useState('')
    const [histGrade2, setHistGrade2] = useState('')
    const [histGrade3, setHistGrade3] = useState('')
    const [histGrade4, setHistGrade4] = useState('')

    const params = useParams<RouteParams>()

    useEffect(() => {
        api.get(`students/${params.id}`)
            .then(res => {
                setName(res.data.name)
                setClassState(res.data.class)
                setFreq(res.data.freq)

                setMathGrade1(res.data.mathGrade[0])
                setMathGrade2(res.data.mathGrade[1])
                setMathGrade3(res.data.mathGrade[2])
                setMathGrade4(res.data.mathGrade[3])

                setPortGrade1(res.data.portGrade[0])
                setPortGrade2(res.data.portGrade[1])
                setPortGrade3(res.data.portGrade[2])
                setPortGrade4(res.data.portGrade[3])

                setHistGrade1(res.data.histGrade[0])
                setHistGrade2(res.data.histGrade[1])
                setHistGrade3(res.data.histGrade[2])
                setHistGrade4(res.data.histGrade[3])
            })
    }, [])


    const clearForm = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault()
        setName('')
        setClassState('')

        setMathGrade1('')
        setMathGrade2('')
        setMathGrade3('')
        setMathGrade4('')

        setPortGrade1('')
        setPortGrade2('')
        setPortGrade3('')
        setPortGrade4('')

        setHistGrade1('')
        setHistGrade2('')
        setHistGrade3('')
        setHistGrade4('')

        setFreq('')
    }

    function saveStudent(e: React.SyntheticEvent<EventTarget>) {
        e.preventDefault()
        const student = {
            name,
            class: classState,
            freq,
            mathGrade: [
                parseInt(mathGrade1), parseInt(mathGrade2), parseInt(mathGrade3), parseInt(mathGrade4)
            ],
            portGrade: [
                portGrade1, portGrade2, portGrade3, portGrade4
            ],
            histGrade: [
                histGrade1, histGrade2, histGrade3, histGrade4
            ]
        }

        if (params.id) {
            api.put(`students/${params.id}`, student)
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
                    toast.error("Não foi possível atualizar o Aluno", {
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
            api.post('students', student)
                .then(res => {
                    toast.success("Aluno criado!", {
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

                    <h4>Matemática (0 - 100)</h4>
                    <div className="input-grades">
                        <input type="number"
                            value={mathGrade1}
                            onChange={e => {
                                if (parseInt(e.target.value) > 100) {
                                    return
                                }

                                if (parseInt(e.target.value) < 0) {
                                    return
                                }

                                setMathGrade1(e.target.value)
                            }}
                            placeholder="N1"
                            className="input-number"
                        />
                        <input type="number"
                            value={mathGrade2}
                            onChange={e => {
                                if (parseInt(e.target.value) > 100) {
                                    return
                                }

                                if (parseInt(e.target.value) < 0) {
                                    return
                                }

                                setMathGrade2(e.target.value)
                            }}
                            placeholder="N2"
                            className="input-number"
                        />
                        <input type="number"
                            value={mathGrade3}
                            onChange={e => {
                                if (parseInt(e.target.value) > 100) {
                                    return
                                }

                                if (parseInt(e.target.value) < 0) {
                                    return
                                }

                                setMathGrade3(e.target.value)
                            }}
                            placeholder="N3"
                            className="input-number"
                        />
                        <input type="number"
                            value={mathGrade4}
                            onChange={e => {
                                if (parseInt(e.target.value) > 100) {
                                    return
                                }

                                if (parseInt(e.target.value) < 0) {
                                    return
                                }

                                setMathGrade4(e.target.value)
                            }}
                            placeholder="N4"
                            className="input-number"
                        />
                    </div>

                    <h4>Portugues (0 - 100)</h4>
                    <div className="input-grades">
                        <input type="number"
                            value={portGrade1}
                            onChange={e => {
                                if (parseInt(e.target.value) > 100) {
                                    return
                                }

                                if (parseInt(e.target.value) < 0) {
                                    return
                                }

                                setPortGrade1(e.target.value)
                            }}
                            placeholder="N1"
                            className="input-number"
                        />
                        <input type="number"
                            value={portGrade2}
                            onChange={e => {
                                if (parseInt(e.target.value) > 100) {
                                    return
                                }

                                if (parseInt(e.target.value) < 0) {
                                    return
                                }

                                setPortGrade2(e.target.value)
                            }}
                            placeholder="N2"
                            className="input-number"
                        />
                        <input type="number"
                            value={portGrade3}
                            onChange={e => {
                                if (parseInt(e.target.value) > 100) {
                                    return
                                }

                                if (parseInt(e.target.value) < 0) {
                                    return
                                }

                                setPortGrade3(e.target.value)
                            }}
                            placeholder="N3"
                            className="input-number"
                        />
                        <input type="number"
                            value={portGrade4}
                            onChange={e => {
                                if (parseInt(e.target.value) > 100) {
                                    return
                                }

                                if (parseInt(e.target.value) < 0) {
                                    return
                                }

                                setPortGrade4(e.target.value)
                            }}
                            placeholder="N4"
                            className="input-number"
                        />
                    </div>

                    <h4>História (0 - 100)</h4>
                    <div className="input-grades">
                        <input type="number"
                            value={histGrade1}
                            onChange={e => {
                                if (parseInt(e.target.value) > 100) {
                                    return
                                }

                                if (parseInt(e.target.value) < 0) {
                                    return
                                }

                                setHistGrade1(e.target.value)
                            }}
                            placeholder="N1"
                            className="input-number"
                        />
                        <input type="number"
                            value={histGrade2}
                            onChange={e => {
                                if (parseInt(e.target.value) > 100) {
                                    return
                                }

                                if (parseInt(e.target.value) < 0) {
                                    return
                                }

                                setHistGrade2(e.target.value)
                            }}
                            placeholder="N2"
                            className="input-number"
                        />
                        <input type="number"
                            value={histGrade3}
                            onChange={e => {
                                if (parseInt(e.target.value) > 100) {
                                    return
                                }

                                if (parseInt(e.target.value) < 0) {
                                    return
                                }

                                setHistGrade3(e.target.value)
                            }}
                            placeholder="N3"
                            className="input-number"
                        />
                        <input type="number"
                            value={histGrade4}
                            onChange={e => {
                                if (parseInt(e.target.value) > 100) {
                                    return
                                }

                                if (parseInt(e.target.value) < 0) {
                                    return
                                }

                                setHistGrade4(e.target.value)
                            }}
                            placeholder="N4"
                            className="input-number"
                        />
                    </div>

                    <h4>Frequência</h4>
                    <div className="input-grades">
                        <input type="number"
                            value={freq}
                            onChange={e => {
                                if (parseInt(e.target.value) < 0) {
                                    return
                                }

                                setFreq(e.target.value)
                            }}
                            placeholder="Freq"
                            className="input-number-freq"
                        />
                    </div>


                </div>

                <div className="buttons">
                    <button className="save-button" onClick={e => saveStudent(e)}>Salvar</button>
                    <button className="clear-button" onClick={e => clearForm(e)} >Cancelar</button>
                </div>
            </form>

            <ToastContainer />

        </div>
    )
}

export default AdminStudentEdit 