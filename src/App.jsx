import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './assets/pages/Home'
import Profile from './assets/pages/Profile'
import SignIn from './assets/pages/SignIn'
import SignUp from './assets/pages/SignUp'
import About from './assets/pages/About'

export default function App() {
  return <BrowserRouter>
  <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/sign-in' element={<SignIn/>}/>
   <Route path='/sign-up' element={<SignUp/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/profile' element={<Profile/>}/>
   </Routes>

  </BrowserRouter>
}
