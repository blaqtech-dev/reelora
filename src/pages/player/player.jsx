import React, { useEffect, useState } from 'react'
import './player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const [apiData,setApiData]=useState({
    name:'',
    key:'',
    published_at:'',
    typeof:''
  })

  const navigate=useNavigate()

  const {id}=useParams()

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjVmZDY0ODZiMDhhOTRiZDAxODdiZDAyZDhlODBjMCIsIm5iZiI6MTc5MjQ5MTA2MS4wNDMsInN1YiI6IjZhZDczZTM1NDdmYjkwNzE0Njg0NjQzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e7777paT-J-bLa3Z2JHG7B_nnHULw8yco2XhahHSe4c'
  }
};



useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
},[])



  return (
    <div className='player'>
      <img onClick={()=>{navigate(-1)}} src={back_arrow_icon} alt='back arrow'/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className='player-info'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
