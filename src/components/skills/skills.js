import React from "react";
import './skills.css';
import ui from '../../assets/uiux.jpg';
import web from '../../assets/web.svg';
import deploy from '../../assets/deploy.png';

const Skills = () => {
    return(
        <section className="skills">
            <h1>
            <span className="skillsTitle">What I do</span>
            </h1>
            
            <span className="skillsPara">
            As a full stack developer
            </span>
            <br/>
            <br/>

            <div className="skillsMainDiv">
                <div className="skillComponent">
                    <img src={ui} className="image" alt='ui'/>
                    <div>
                        <h2>Front - end design | UI/UX design</h2>
                        <br/>
                        <p> HTML,CSS | bootstrap, SCSS, TailwindCSS | JS,TS | Angular | React </p>
                    </div>
                </div>

                <div className="skillComponent">
                    <img src={web} className="image" alt='web'/>
                    <div>
                        <h2>Web development</h2>
                        <br/>
                        <p> Java | Spring | NodeJS | jQuery | JPA, Native Hibernate</p>
                    </div>
                </div>

                <div className="skillComponent">
                    <img src={deploy} className="image" alt='deploy'/>
                    <div>
                        <h2>DevOps / Deployment</h2>
                        <br/>
                        <p> AWS | Microsoft Azure </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
export default Skills;
 