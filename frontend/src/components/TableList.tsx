import React, { useState, useEffect } from 'react'
import '../styles/components/TableList.css'

import Pagination from 'react-bootstrap/Pagination'
import Table from 'react-bootstrap/Table'

import { GoGraph } from 'react-icons/go'
import { AiFillEdit } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import api from '../config/api'

import { Link } from 'react-router-dom'

interface TableListProps {
    admin?: boolean,
    list: string
}

interface StateList {
    id: number,
    name: string,
    subject?: string,
    class?: string
}

function TableList({ admin, list }: TableListProps) {
    const [stateList, setStateList] = useState<StateList[]>([])
    const [q, setQ] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [listNumber, setListNumber] = useState(5)

    useEffect(() => {
        if (list == 'students') {
            api.get('students')
                .then(res => {
                    setStateList(res.data)
                })
            console.log('safnadogj')
        }

        if (list == 'teachers') {
            api.get('teachers')
                .then(res => {
                    setStateList(res.data)
                })
        }
    }, [])
    
    function listItems() {
        const firstItem = (currentPage - 1) * listNumber
        const lastItem = firstItem + listNumber
        console.log('oi')

        const newArray = stateList.slice(firstItem, lastItem)

        if (!q.trim()) {
            return newArray.map(item => {
                if (item.subject) {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.subject}</td>
                            {admin ? (
                                <td>
                                    <Link to={`/admin/teacher/${item.id}`}>
                                        <AiFillEdit className="edit-icon"></AiFillEdit>
                                    </Link>

                                    <Link to={`/admin/delete/teacher/${item.id}`}>
                                        <BsFillTrashFill className="edit-icon"></BsFillTrashFill>
                                    </Link>                                </td>
                            ) : null}
                        </tr>
                    )
                } else {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.class}</td>
                            <td>
                                <Link to={`/students/${item.id}`}>
                                    <div className="profile-icon">
                                        <GoGraph></GoGraph>
                                    </div>

                                </Link>
                            </td>
                            {admin ? (
                                <td>
                                    <Link to={`/admin/student/${item.id}`}>
                                        <AiFillEdit className="edit-icon"></AiFillEdit>
                                    </Link>

                                    <Link to={`/admin/delete/student/${item.id}`}>
                                        <BsFillTrashFill className="edit-icon"></BsFillTrashFill>
                                    </Link>
                                </td>
                            ) : null}
                        </tr>
                    )
                }

            })
        } else {
            return newArray.map(item => {
                if (item.name.toLowerCase().indexOf(q) > -1) {
                    if (item.subject) {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.subject}</td>
                                {admin ? (
                                    <td>
                                        <Link to={`/admin/teacher/${item.id}`}>
                                            <AiFillEdit className="edit-icon"></AiFillEdit>
                                        </Link>

                                        <Link to={`/admin/delete/teacher/${item.id}`}>
                                            <BsFillTrashFill className="edit-icon"></BsFillTrashFill>
                                        </Link>
                                    </td>
                                ) : null}
                            </tr>
                        )
                    } else {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.class}</td>
                                <td>
                                    <Link to={`/students/${item.id}`}>
                                        <div className="profile-icon">
                                            <GoGraph></GoGraph>
                                        </div>

                                    </Link>
                                </td>
                                {admin ? (
                                    <td>
                                        <Link to={`/admin/student/${item.id}`}>
                                            <AiFillEdit className="edit-icon"></AiFillEdit>
                                        </Link>

                                        <Link to={`/admin/delete/student/${item.id}`}>
                                            <BsFillTrashFill className="edit-icon"></BsFillTrashFill>
                                        </Link>
                                    </td>
                                ) : null}
                            </tr>
                        )
                    }

                }
            })
        }
    }

    let items = [] as any;
    for (let number = 1; number <= (stateList.length / listNumber) + 1; number++) {
        items.push(
            <Pagination.Item key={number} active={number == currentPage} onClick={() => setCurrentPage(number)}>
                {number}
            </Pagination.Item>,
        );
    }


    return (
        <div className="tableList">
            <input type="text" value={q} onChange={e => setQ(e.target.value)} placeholder="Procurar" />

            <Table striped hover bordered size="sm" className="students-table">
                <thead>
                    {
                        list == 'students' ? (
                            <tr>
                                <th>id</th>
                                <th>Nome</th>
                                <th>Turma</th>
                                <th>Perfil</th>
                                {
                                    admin ? <th>Ações</th> : null
                                }
                                
                            </tr>
                        ) : (
                            <tr>
                                <th>id</th>
                                <th>Nome</th>
                                <th>Matéria</th>
                                {
                                    admin ? <th>Ações</th> : null
                                }
                            </tr>
                        )
                    }
                </thead>

                <tbody>
                    {listItems()}
                </tbody>
            </Table>

            <Pagination>{items}</Pagination>
        </div>
    )
}

export default TableList