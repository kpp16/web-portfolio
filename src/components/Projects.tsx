import React from "react";
import Header from "./Header";
import './Projects.css';
import { AiFillGithub } from 'react-icons/ai';

const Projects = () => {
    return (
        <div>
            <Header />
            <div className="projectsBody">
                <div className="text">
                    <div className="container">
                        <div className="wrap">
                            <h3>2022</h3>
                        </div>
                    </div>
                    <br />
                    <div className="container">
                        <div className="wrap">
                            <ul>
                                <li>
                                    <a href="http://ec2-18-191-148-98.us-east-2.compute.amazonaws.com:3000/" className="link"><h4>Investment Portfolio</h4></a>
                                    <br />
                                    A web-app that allows you to keep track of all your stock market investments.
                                    <br />
                                    Developed using <b>Java Spring Boot</b> as the backend, <b>React</b> as the frontend and <b>PostgreSQL</b> as the database.
                                    <br />
                                    <br />
                                    <a href="https://github.com/kpp16/InvestmentPortfolio"><AiFillGithub className="icon"/></a>
                                </li>
                            </ul>
                        </div>
                        <br />
                        <hr />
                    </div>
                </div>
                <div className="text">
                    <div className="container">
                        <div className="wrap">
                            <h3>2021</h3>
                        </div>
                    </div>
                    <br />
                    <div className="container">
                        <div className="wrap">
                            <ul>
                                <li>
                                    <a href="https://github.com/kpp16/Algo-Trading-Bot/" className="link"><h4>Algo Trading Bot</h4></a>
                                    <br />
                                    A bot that trades stocks based on machine learning algorithms such as polynomial regression and trained on historical stock data. This bot trades stock of any publicly traded traded company in the US market.
                                    <br />
                                    <br />
                                    Used Alpaca Trading API to place orders, <b>Python and scikit-learn</b> to develop a model and train it. Can be hosted in a server to start trading when the market opens.
                                    <br />
                                    <br />
                                    <a href="https://github.com/kpp16/Algo-Trading-Bot/"><AiFillGithub className="icon"/></a>
                                </li>
                                <br />
                                <li>
                                    <a href="https://github.com/kpp16/Music-Player" className="link"><h4>Music Player</h4></a>
                                    <br />
                                    Web-app that plays music and songs hosted on a server or locally in a browser.
                                    <br />
                                    <br />
                                    Utilized <b>Python FastAPI</b> to develop a backend server, <b>NextJS to build a responsive UI</b>.
                                    <br />
                                    <br />
                                    <a href="https://github.com/kpp16/Music-Player"><AiFillGithub className="icon"/></a>
                                </li>                                        
                            </ul>
                        </div>
                        <br />
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;