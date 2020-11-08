import React, { useState, useEffect } from 'react'

import '../styles/StudentsPage.css'
import Card from 'react-bootstrap/Card'
import TableList from '../components/TableList'
import api from '../config/api'

interface ListItemsProps {
    id: number,
    name: string,
    class: string
}

function StudentsPage() {
    const [students, setStudents] = useState<ListItemsProps[]>([])

    useEffect(() => {
        api.get('students')
            .then(res => {
                setStudents(res.data)
            })
    }, [])

    return (
        <div className="students-page">
            <Card className="students-page-card">
                <h2>Lista de alunos</h2>

                <span>"Educação é a arma mais poderosa que você pode usar para mudar o mundo"<br />
                    <strong> - BB King</strong>
                </span>

                <hr />

                <TableList list={'students'}></TableList>
            </Card>
        </div>
    )
}

export default StudentsPage