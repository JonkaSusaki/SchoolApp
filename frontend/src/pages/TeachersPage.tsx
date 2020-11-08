import React, { useState } from 'react'

import '../styles/TeachersPage.css'

import Card from 'react-bootstrap/Card'
import TableList from '../components/TableList'

interface ListItemsProps {
    id: number,
    name: string,
    subject: string
}

function TeachersPage() {
    const [teachers, setTeachers] = useState<ListItemsProps[]>([
        {
            id: 1,
            name: 'Joao',
            subject: 'Matemática'
        },
        {
            id: 2,
            name: 'Ana',
            subject: 'Historia'
        },
        {
            id: 3,
            name: 'Bia',
            subject: 'Portugues'
        },
        {
            id: 4,
            name: 'Carlos',
            subject: 'Portugues'
        },
        {
            id: 5,
            name: 'Nat',
            subject: 'Portugues'
        },
        {
            id: 6,
            name: 'oi',
            subject: 'Portugues'
        },
        {
            id: 7,
            name: 'afdsasd',
            subject: 'Portugues'
        },
        {
            id: 8,
            name: 'gsagsg',
            subject: 'Portugues'
        }
    ])
    
    return (
        <div className="teachers-page">
            <Card className="teachers-page-card">
                <h2>Lista de professores</h2>
                <span>"Transmitir conhecimento não é apenas falar o que sabe, mas inspirar novas atitudes!"<br />
                    <strong> - Juliano Kimura</strong></span>

                <hr />

                <TableList list={'teachers'}></TableList>
            </Card>
        </div>
    )
}

export default TeachersPage