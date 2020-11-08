import React from 'react'

import {Link} from 'react-router-dom'

import '../styles/components/Aside.css'

import {ImHome} from 'react-icons/im'
import {GiTeacher} from 'react-icons/gi'
import {FaUsers, FaCogs} from 'react-icons/fa' 
import {SiGoogleclassroom} from 'react-icons/si'
import {AiOutlineInfoCircle} from 'react-icons/ai'

function Aside() {
    return (
        <>
            <aside className="app-menu">
                <Link to="/">
                    <ImHome className="aside-icon"></ImHome> 
                    <span>Pagina Inicial</span>
                </Link>

                <Link to="/teachers">
                        <GiTeacher className="aside-icon"></GiTeacher> 
                    <span>Professores</span>
                </Link>

                <Link to="/students">
                        <FaUsers className="aside-icon"></FaUsers> 

                    <span>Alunos</span>
                </Link>

                <Link to="/class">
                        <SiGoogleclassroom className="aside-icon"></SiGoogleclassroom> 

                    <span>Turmas</span>
                </Link>

                <Link to="/admin">
                        <FaCogs className="aside-icon"></FaCogs> 

                    <span>Administração</span>
                </Link>

                <Link to="/about">
                        <AiOutlineInfoCircle className="aside-icon"></AiOutlineInfoCircle> 

                    <span>Sobre</span>
                </Link>

            </aside>
        </>
    )
}

export default Aside