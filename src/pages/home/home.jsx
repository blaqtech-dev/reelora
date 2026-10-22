import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecards from '../../components/titlecards/titlecards'
import Footer from '../../components/footer/footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt='hero-banner'  className='banner-img'/>
<div className="hero-caption">
  <img src={hero_title} alt='hero-title' className='caption-img'/>
  <p>discovering his tries to a secret ancient order, a young man living 
in modern istanbul embarks on a quest to save the city from an immortal enemy
  </p>
  <div className="hero-btns">
    <button className='btn '><img src={play_icon} alt='play-icon' />play</button>
     <button className='btn dark-btn'><img src={info_icon} alt='info-icon' />more info</button>
  </div>
  <Titlecards className='title-cards'/>
</div>
</div>
<div className='more-cards'>
  <Titlecards title={'Blockbuste movies'}  category={'now_playing'} />
  <Titlecards  title={'only on netflix'}  category={'popular'}/>
    <Titlecards title={'upcoming'}        category={'top_rated'}/>
    <Titlecards title={'top movie'}       category={'upcoming'}/>

</div>

<Footer/>
    </div>
  )
}

export default Home
