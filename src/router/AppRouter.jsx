import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import MainPage from '../pages/MainPage';
import ErrorPage from '../pages/ErrorPage';
import Users from '../users/Users';
import UsersDetailsPage from '../pages/UsersDetailsPage';

const AppRouter = () => {
  return (
    <Routes>
        <Route  path='/' element={<MainPage/>}/>
        <Route  path='/about' element={<AboutPage/>}/>
        <Route  path='/users' element={<Users/>}/>
        <Route  path='/users/:id' element={<UsersDetailsPage/>}/>
        <Route  path='/*' element={<ErrorPage/>}/>
    </Routes>
  )
}

export default AppRouter