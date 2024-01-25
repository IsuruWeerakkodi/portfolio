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
                <a href="https://en.wikipedia.org/wiki/Front-end_web_development#:~:text=Front%2Dend%20web%20development%20is,and%20interact%20with%20that%20website.">
                    <div className="skillComponent">
                        <img src={ui} className="image" alt='ui'/>
                        <div>
                            <h2>Front - end design | UI/UX design</h2>
                            <br/>
                            <p> HTML,CSS | React | bootstrap, SCSS, TailwindCSS | JS,TS | Angular  </p>
                        </div>
                    </div>
                </a>

                <a href="https://en.wikipedia.org/wiki/Web_development">
                    <div className="skillComponent">
                        <img src={web} className="image" alt='web'/>
                        <div>
                            <h2>Web development</h2>
                            <br/>
                            <p> NodeJS | ExpressJS | Java, JavaSE, JavaEE | Spring, SpringBoot </p>

                        </div>
                    </div>
                </a>

                <a href="">
                    <div className="skillComponent">
                        <img src={deploy} className="image" alt='deploy'/>
                        <div>
                            <h2>DevOps / Deployment</h2>
                            <br/>
                            <p> AWS | Microsoft Azure </p>
                        </div>
                    </div>
                </a>

            </div>
        </section>
    );
}
export default Skills;
 