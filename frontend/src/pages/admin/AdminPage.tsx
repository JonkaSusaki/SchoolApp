import React, { useState, useEffect } from 'react'
import '../../styles/admin/AdminPage.css'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TableList from '../../components/TableList'
import { Link } from 'react-router-dom'

import api from '../../config/api'
import { ToastContainer } from 'react-toastify'

interface ListItemsPropsStudents {
    id: number,
    name: string,
    class: string
}

interface ListItemsPropsTeachers {
    id: number,
    name: string,
    subject: string
}

function AdminPage() {
    const [students, setStudents] = useState<ListItemsPropsStudents[]>([])
    const [teachers, setTeachers] = useState<ListItemsPropsTeachers[]>([])

    useEffect( () => {
        api.get('students')
            .then(res => setStudents(res.data))

        api.get('teachers')
            .then(res => setTeachers(res.data))
        
        console.log('coe')
    }, [])
    
    return (
        <div className="admin-page">
            <h2>Página de administração</h2>
            <span>Criar, editar ou excluir dados</span>
            <hr />

            <div className="admin-page-content">
                <Tabs defaultActiveKey="teachers" className="">

                    <Tab title="Professores" eventKey="teachers">
                        <TableList list={'teachers'} admin></TableList>
                        <div className="add-button">
                            <Link to="/admin/teacher" className="home-page-link">
                                Adicionar Professor +

                            </Link>
                        </div>
                    </Tab>

                    <Tab title="Alunos" eventKey="students">
                        <TableList list={'students'} admin></TableList>
                        <div className="add-button">
                            <Link to="/admin/student" className="home-page-link">
                                Adicionar Aluno +
                            
                            </Link>
                        </div>
                    </Tab>

                    <Tab title="Turmas" eventKey="classes">

                    </Tab>

                </Tabs>
                <ToastContainer/>

            </div>
        </div>
    )
}

export default AdminPage