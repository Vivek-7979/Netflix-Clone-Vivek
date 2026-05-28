import React ,{useEffect, useRef} from 'react'
import './Navbar.css'
import Netflix_logo from '../../assets/Netflix_logo.svg'
import SearchIcon from '../../assets/SearchIcon.svg'
import Bellicon from '../../assets/Bellicon.svg'
import account from '../../assets/account.png'
import dropdown from '../../assets/dropdown.svg'
import {logout} from '../../firebase'

const Navbar = () => {

const navRef = useRef();
useEffect(()=>{
window.addEventListener('scroll',()=>{
  if(window.scrollY >= 80){
    navRef.current.classList.add('nav-dark')
  }
  else{
    navRef.current.classList.remove('nav-dark')
  }
})
},[])


  return (
    <div ref={navRef} className='navbar'>

      
  <div className="navbar-left">
    <img src={Netflix_logo} alt="Netflix Logo" className='logo' style={{width: '7vw',height:'auto' }} />
    <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by languages</li>
    </ul>
  </div>


  <div className="navbar-right">
    <img src={SearchIcon} alt="Search Icon" className='icons' /><p>Childern</p>
    <img src={Bellicon} alt="Bell Icon" className='icons' />
  
    <div className="navbar-profile">
      <div className="profile-trigger">
        <img src={account} alt="account icon" className='accountimage' />
        <img src={dropdown} alt="dropdown icon" className='icons' />
      </div>
      <div className="signout-text">
        <p onClick={()=>{logout()}}>Sign out of Netflix</p>
      </div>
    </div>

  </div>


    </div>
  )
}

export default Navbar
