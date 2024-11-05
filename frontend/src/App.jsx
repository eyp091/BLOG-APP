import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAuthContext } from './context/AuthContext'

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import WriteBlog from './pages/blog/WriteBlog';
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'

function App() {

  const { authUser } = useAuthContext();

  return (
    <div className='h-screen items-center'>
      <Navbar isAuthenticated={authUser} className="w-full fixed top-0 left-0" />

      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={'/login'} />} />
        <Route path='/login' element={authUser ? <Navigate to={'/'} /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to={'/'} /> : <Signup />} />
        <Route path='/write-blog' element={<WriteBlog/>} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
