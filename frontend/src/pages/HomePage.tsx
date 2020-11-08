import React from 'react'

import '../styles/HomePage.css'

import { Link } from 'react-router-dom'

import professor from '../assets/images/undraw_professor_8lrt.svg'
import student from '../assets/images/undraw_mathematics_4otb.svg'
import classes from '../assets/images/undraw_Graduation_ktn0.svg'

function HomePage() {
    return (
        <div className="home-page">
            <h1>School App</h1>

            <hr />

            <div className="home-boards">

                <Link to="/teachers" className="home-page-link">
                    <div className="board">
                        <img src={professor} alt="professor" />
                        <span>Professores</span>
                    </div>
                </Link>

                <Link to="/students" className="home-page-link">
                    <div className="board">
                        <img src={student} alt="professor" />
                        <span>Alunos</span>
                    </div>
                </Link>

                <Link to="/class" className="home-page-link">
                    <div className="board">
                        <img src={classes} alt="professor" />
                        <span>Turmas</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default HomePage