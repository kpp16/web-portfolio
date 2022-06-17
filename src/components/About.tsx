import React from "react";
import './About.css';
import Header from "./Header";
import { AiFillGithub } from 'react-icons/ai';

const About = () => {
    return (
        <div>
            <Header />
            <div className="App-header-about">
                <div className="text">
                    <div className="container">
                        <div className="wrap">
                            <h1><b>About Me</b></h1>
                        </div>
                    </div>
                    <br />
                    <div className="container">
                        <p className="wrap">
                            Hello! I'm a first-year student at Stony Brook University, majoring in Computer Science (CS).
                            <br />
                            <br />
                            I'm primarily interested in <b>Software Development</b>, backend specifically. I'm also interested in learning more about quantitative finance and trading. 
                            Right now, you'll find me learning Discrete Math and developing web-apps.
                            <br />
                            <br />
                            Outside of school, you'll find me watching anime, exploring nature and learning about space travel :)
                            <br />
                            <br />
                            <hr />
                        </p>
                    </div>
                    <div className="container">
                        <div className="wrap">
                            <h3><b>Education</b></h3>
                        </div>
                    </div>
                    <br />
                    <div className="container">
                        <p className="wrap" style={{fontSize: "1.7vh"}}>
                            <ul>
                                <li>1st year student at Stony Brook University. majoring in Computer Science (Expected Graduation: Winter 2026)</li>
                                <li>Relevant Coursework: Oject Oriented Programming in Java, Discrete Math, Data Structures and Algorithms</li>
                            </ul>
                            <br />
                            <hr />
                        </p>
                    </div>
                    <div className="container">
                        <div className="wrap">
                            <h3><b>Contact Me</b></h3>
                            <br />
                        </div>
                    </div>
                    <div className="container">
                        <p className="wrap" style={{fontSize: "1.7vh"}}>
                            <a href='https://www.github.com/kpp16'> <AiFillGithub  className="icon" /></a>
                            <br />
                            <br />
                            Email: kairav.parekh@outlook.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;