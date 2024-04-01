import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import MainPage from '../pages/MainPage';
import ErrorPage from '../pages/ErrorPage';
import Users from '../components/users/Users';
import UsersDetailsPage from '../pages/UsersDetailsPage';
import HelloWorld from '../pages/HelloWorld';
import UsersForTest from '../components/usersForTest/UsersForTest';

const AppRouter = () => {
  return (
    <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/hello" element={<HelloWorld/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/users-test" element={<UsersForTest/>} />
            <Route path="/users/:id" element={<UsersDetailsPage/>} />
            <Route path="/*" element={<ErrorPage/>} />
        </Routes>
  )
}

export default AppRouter