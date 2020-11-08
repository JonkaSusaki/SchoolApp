import React, { useState, useEffect } from 'react'

import '../styles/StudentById.css'

import Card from 'react-bootstrap/Card'
import { Bar, Line, Pie } from 'react-chartjs-2'
import { useParams } from 'react-router-dom'

import api from '../config/api'

interface RouteParams {
    id: string
}

function StudentById() {
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

    const [averageGrade, setAverageGrade] = useState<number[]>([])

    const diasLetivos = 4

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


    return (
        <div className="student-by-id-page">
            <h2>{name}</h2>

            <span>"Sucesso é o acúmulo de pequenos esforços repetidos dia a dia!" <br />
                <strong> - Robert Collier</strong>
            </span>
            <hr />

            <div className="student-by-id-content">
                <h3><strong>Turma: </strong> {classState}</h3>

                <div className="student-graphs">

                    <Card className="graph">
                        <Bar
                            data={{
                                labels: ['1', '2', '3', '4'],
                                datasets: [
                                    {
                                        label: 'Nota de Matemática por bimestre',
                                        backgroundColor: 'rgba(75,192,192,1)',
                                        borderColor: 'rgba(0,0,0,1)',
                                        borderWidth: 1,
                                        data: [
                                            parseInt(mathGrade1), 
                                            parseInt(mathGrade2), 
                                            parseInt(mathGrade3), 
                                            parseInt(mathGrade4)
                                        ]
                                    }
                                ]
                            }}
                        />
                    </Card>

                    <Card className="graph">
                        <Bar
                            data={{
                                labels: ['1', '2', '3', '4'],
                                datasets: [
                                    {
                                        label: 'Notas de Português por bimestre',
                                        backgroundColor: '#f1c40f',
                                        borderColor: 'rgba(0,0,0,1)',
                                        borderWidth: 1,
                                        data: [
                                            parseInt(portGrade1), 
                                            parseInt(portGrade2), 
                                            parseInt(portGrade3), 
                                            parseInt(portGrade4)
                                        ]
                                    }
                                ]
                            }}
                        />
                    </Card>

                    <Card className="graph">
                        <Bar
                            data={{
                                labels: ['1', '2', '3', '4'],
                                datasets: [
                                    {
                                        label: 'Notas de História por bimestre',
                                        backgroundColor: '#8e44ad',
                                        borderColor: 'rgba(0,0,0,1)',
                                        borderWidth: 1,
                                        data: [
                                            parseInt(histGrade1), 
                                            parseInt(histGrade2), 
                                            parseInt(histGrade3), 
                                            parseInt(histGrade4)
                                        ]
                                    }
                                ]
                            }}
                        />
                    </Card>

                    <Card className="graph">
                        <Line
                            data={{
                                labels: ['1', '2', '3', '4'],
                                datasets: [
                                    {
                                        label: 'Nota média do aluno por bimestre',
                                        fill: false,
                                        lineTension: 0.5,
                                        backgroundColor: '#d35400',
                                        borderColor: 'rgba(0,0,0,1)',
                                        borderWidth: 1,
                                        data: [
                                            (
                                                parseInt(mathGrade1) + 
                                                parseInt(portGrade1) + 
                                                parseInt(histGrade1) 
                                                ) / 3, 
                                            (
                                                parseInt(mathGrade2) +
                                                parseInt(portGrade2) +
                                                parseInt(histGrade2) 
                                                ) / 3,
                                            (
                                                parseInt(mathGrade3) +
                                                parseInt(portGrade3) +
                                                parseInt(histGrade3) 
                                                ) /3, 
                                            (
                                                parseInt(mathGrade4) +
                                                parseInt(portGrade4) +
                                                parseInt(histGrade4)
                                                ) / 3
                                        ]
                                    }
                                ]
                            }}
                        />
                    </Card>

                    <Card className="graph">
                        <Pie
                            data={{
                                labels: ['Presença', 'Faltas'],
                                datasets: [
                                    {
                                        label: 'Rainfall',
                                        backgroundColor: [
                                            '#2ecc71',
                                            '#e74c3c',
                                        ],
                                        hoverBackgroundColor: [
                                            '#501800',
                                            '#4B5000',
                                            '#175000',
                                            '#003350',
                                            '#35014F'
                                        ],
                                        data: [(parseInt(freq) / diasLetivos), (diasLetivos - parseInt(freq)) / diasLetivos]
                                    }
                                ]
                            }}
                        />
                    </Card>

                </div>

            </div>


        </div>
    )
}

export default StudentById