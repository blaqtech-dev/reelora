
import './App.css'
import Home from './pages/home/home'
import {Routes,Route, useNavigate} from 'react-router-dom'
import Login from './pages/login/login'
import Player from './pages/player/player'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from './firebase'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
const navigate=useNavigate()

  useEffect(()=>{
onAuthStateChanged(auth,async(user)=>{
if(user){
  console.log('logged in')
 navigate('/')
}
else{
    console.log('logged out')
     navigate('/login')
}
})
  },[])
  return (
    <>
    <ToastContainer theme='dark'/>
<Routes>
<Route path='/' element={<Home/>}/> 
<Route path='/login' element={<Login/>}/> 
<Route path='/player/:id' element={<Player/>}/>
</Routes>
    
    </>
  )
}

export default App
