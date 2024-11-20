import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAuthContext } from './context/AuthContext'

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import BlogDetails from './pages/blog/BlogDetails'
import WriteBlog from './pages/blog/WriteBlog';
import MyBlogs from './pages/blog/MyBlogs'
import About from './pages/about/About'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import MyProfile from './pages/profile/MyProfile'

function App() {

  const { authUser } = useAuthContext();
  return (
    <div className='h-screen items-center'>
      <Navbar isAuthenticated={authUser} className="w-full fixed top-0 left-0" />

      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={'/login'} />} />
        <Route path='/login' element={authUser ? <Navigate to={'/'} /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to={'/'} /> : <Signup />} />
        <Route path='/write-blog' element={authUser ? <WriteBlog/> : <Login />} />
        <Route path="/blogs/:id" element={authUser ? <BlogDetails /> : <Login />} />
        <Route path='/edit-blog' element={authUser ? <MyBlogs /> : <Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/my-profile' element={authUser ? <MyProfile /> : <Login />} /> 
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
