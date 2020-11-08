import React from 'react'

import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import TeachersPages from './pages/TeachersPage'
import StudentsPage from './pages/StudentsPage'
import StudentById from './pages/StudentById'
import AboutPage from './pages/AboutPage'

import AdminPage from './pages/admin/AdminPage'
import AdminTeacherEdit from './pages/admin/AdminTeacherEdit'
import AdminDeleteTeacher from './pages/admin/AdminDeleteTeacher'
import AdminStudentEdit from './pages/admin/AdminStudentEdit'
import AdminDeleteStudent from './pages/admin/AdminDeleteStudent'

function Routes() {
    return (

        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path="/teachers" component={TeachersPages} />
            <Route path="/students/:id" component={StudentById} />
            <Route path="/students" component={StudentsPage} />
            <Route path="/about" component={AboutPage} />

            <Route path="/admin/student/:id" component={AdminStudentEdit} />
            <Route path="/admin/delete/student/:id" component={AdminDeleteStudent} />
            <Route path="/admin/student" component={AdminStudentEdit} />

            <Route path="/admin/teacher/:id" component={AdminTeacherEdit}></Route>
            <Route path="/admin/delete/teacher/:id" component={AdminDeleteTeacher}></Route>
            <Route path="/admin/teacher" component={AdminTeacherEdit}></Route>

            <Route path="/admin" component={AdminPage} />
        </Switch>

    )
}

export default Routes