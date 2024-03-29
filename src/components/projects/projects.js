import React from "react";
import './projects.css';
import taskManager from '../../assets/task-manager.png';
import filter from '../../assets/filter.png';
import smartPos from '../../assets/smartpos.png';
import lecManagement from '../../assets/lectirer.png'


const Skills = () => {
    return(
        <section className="projects">
            <div>
            <h1>
            <span className="projectsTitle border-bottom-9rem">My Projects</span>
            </h1>
            <p id='projectPara'>This is a portfolio of my projects</p>

            </div>
            
            <div className="projectRows">
                <div className="projectColumn">
                    <a href="https://github.com/IsuruWeerakkodi/task-manager-react-node.js.git">
                        <div className="projectComponent">
                            <img src={taskManager} className="image" alt='taskManager'/>
                            <div>
                                <h2>Task Manager App</h2>
                                <p>Node.js, Firebase Google Auth, React, Vite,
                                    Typescript, MySQL, MySQL Pool
                                </p>
                            </div>
                        </div>
                    </a>

                    <a href="https://github.com/IsuruWeerakkodi/Filtering-App-Full-Stack.git">
                        <div className="projectComponent">
                            <img src={filter} className="image" alt='filteringApp'/>
                            <div>
                                <h2>Data Filtering App</h2>
                                <p>Java, javaScript, Html, CSS, Spring
                                    framework, HikariCP, MySQL, Jackson Databind, Validation
                                    API, Hibernate Validator, Java Servlet API, JUnit Jupiter
                                </p>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="projectColumn">
                    <a href="https://github.com/IsuruWeerakkodi/edupanel-java-back-end.git">
                        <div className="projectComponent">
                            <img src={lecManagement} className="image" alt='lectureManagement'/>
                            <div>
                                <h2>Lecture Panel Management App</h2>
                                <p>Java and Spring framework, Firebase
                                    Google Auth, Multipart file handling, MySQL, HikariCP,
                                    Transactions, Layered Architecture
                                </p>
                            </div>
                        </div>
                    </a>

                    <a href="https://github.com/IsuruWeerakkodi/EzPay-POS.git">
                        <div className="projectComponent">
                            <img src={smartPos} className="image" alt='pos'/>
                            <div>
                                <h2>EzPay POS</h2>
                                <p>Java, Maven, JavaFX-FXML, CSS, Scene
                                    Builder, Jasper
                                </p>
                            </div>
                        </div>
                    </a>
                </div>   
            </div>

            <br/>

            <a href="https://github.com/IsuruWeerakkodi?tab=repositories"
                    type="button" className="seeMoreBtn"  >
                <i className="seeMoreBtnImg bi bi-search"></i>
                See more
 
            </a>
        </section>
    );
}
export default Skills;
 