import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/her0_banner.jpg'
import playicon from '../../assets/playicon.png'
import infoicon from '../../assets/info icon.png'
import moneyheist from '../../assets/moneyheist.webp'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      <Navbar />  {/* Rendering the Navbar component in the Home component so that it can be displayed on the webpage. */}
    
    <div className="hero">
      <img src={hero_banner} alt="Hero Banner" className='banner-img'/>
      <div className="hero-caption">
        <img src={moneyheist} alt="Money Heist" className='caption-img' />
        <p>An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history  - stealing 2.4 billion euros from the Royal Mint of Spain.</p>
        <div className="hero-btns">
          <button className='btn'><img src={playicon} alt="Play" />Play</button>
          <button className='btn dark-btn'><img src={infoicon} alt="More Info" />More Info</button>
        </div>
      </div>
    </div>
    <TitleCards/>
    
    <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"} category={"upcoming"} />
      <TitleCards title={"Only on Netflix"} category={"popular"} />
      <TitleCards title={"Upcoming"} category={"top_rated"}/>
      <TitleCards title ={"Top Pics for you "} category={"now_playing"} />
    </div>
    <Footer />
    
    
    
    
    
    
    
    </div>
  )
}

export default Home
