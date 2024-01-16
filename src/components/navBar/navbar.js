import './navbar.css'
import React, {useState} from "react";
import logo from '../../assets/w.png';
import {Link} from 'react-scroll';
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return(
        <nav className="navbar">
            <img className="logo" src={logo} alt=""/>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuItem">About</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuItem">Projects</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuItem">Clients</Link>
            </div>
            <button  type="button" className="desktopMenuBtn btn btn-success" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <i className="desktopMenuBtnImg bi bi-person-lines-fill"></i>
                Contact Me
            </button>

            <i className="bi bi-list mobMenu" onClick={()=>setShowMenu(!showMenu)}></i>
            <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Clients</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>

        </nav>
    )
}
export default Navbar