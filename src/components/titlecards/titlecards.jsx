import React, { useEffect, useRef, useState } from 'react'
import './titlecards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const Titlecards = ({title,category}) => {

const [apiData,setApiData]=useState([])


const cardRef=useRef()


const options = {
  method: 'GET',
  headers: {accept: 'application/json', 
    Authorization: 
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjVmZDY0ODZiMDhhOTRiZDAxODdiZDAyZDhlODBjMCIsIm5iZiI6MTc5MjQ5MTA2MS4wNDMsInN1YiI6IjZhZDczZTM1NDdmYjkwNzE0Njg0NjQzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e7777paT-J-bLa3Z2JHG7B_nnHULw8yco2XhahHSe4c'
  }
};




const handleWheel=(event)=>{
event.preventDefault()
cardRef.current.scrollLeft+=event.deltaY;
}

useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/${category?category:'upcoming'}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));


cardRef.current.addEventListener('wheel',handleWheel)
},[])

  return (
    <div className='title-cards'>
      <h2 className='title'>{title?title:'popular  on netflix'}</h2>
<div className='card-list' ref={cardRef}>
  {
    apiData.map((card,index)=>{
      return(
        <Link to={`/player/${card.id}`} className='card' key={index}>
<img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt=''/>
<p>{card.original_title}</p>
        </Link>
      )
    })
  }
</div>
    </div>
  )
}

export default Titlecards
