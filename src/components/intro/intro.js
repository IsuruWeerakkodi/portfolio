import React from 'react';
import './intro.css';
import bgPhoto from '../../assets/photo_side.jpg';
import {Link} from "react-scroll";

const intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span id='helloElm'>Hello,</span>
            
            <span id='im'>I'm <span id='isuru'>Isuru</span></span>

            <span id='desig'>Full Stack Developer</span>
            <br/>
            <p id='para'>A creative, focused, adaptable and innovative team player<br/>
                who is eager to engage in challenging engineering problems,
                and find solutions  <br/>by exploiting modern trends of
                technology.</p>
            <br/>
            <div className='buttonList'>
            <a href='https://github.com/IsuruWeerakkodi'><i id='btnxx' className="buttonListItem bi bi-github"></i></a>
            <a href='https://www.linkedin.com/in/isuru-weerakkodi-baa469118/'><i id='btnxx' className="buttonListItem bi bi-linkedin"></i></a>
            
            <button  type="button" className="buttonListItem cvBtn">
            <i className="hireMeBtnImg bi bi-cloud-arrow-down-fill"></i>
            Download CV
            </button>


            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500} className=""><button  type="button" className="buttonListItem hireMeBtn">
                <i className="hireMeBtnImg bi bi-briefcase-fill" ></i>
                Hire Me
            </button></Link>

            </div>

        </div>
        <img src={bgPhoto} className="bgPhoto" alt='background'/>
        
    </section>
  );
};

export default intro; 