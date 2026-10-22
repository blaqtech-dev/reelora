import React from 'react'
import './footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
         <div className='footer-icons'>
      <img src={youtube_icon} alt='youtube'/>
         <img src={instagram_icon} alt='instagram'/>
            <img src={twitter_icon} alt='twitter'/>
               <img src={facebook_icon} alt='facebook'/>
    </div>

    <ul>
      <li>audio description</li>
        <li>help  centre</li>
          <li>gift cards</li>
            <li>media centre </li>
              <li>investor relations</li>
                <li>jobs</li>
                  <li>terms of use</li>
                  <li>privacy</li>
                  <li>legal notices</li>
                  <li>cookie preferences</li>
                  <li>corporate information</li>
                       <li>contact us</li>
    </ul>
    
    <div className='bottom-footer'>
<p className='copyright-text'>@ 1997-2023 Reelora, Inc.</p>
<p className='design'>Designed by <a href='https://boluseyi.vercel.app' target='_blank'>Boluwatife</a></p>
    </div>
  
    </div>
  )
}

export default Footer
