import React from "react";
import './Resume.css';
import { Viewer } from "@react-pdf-viewer/core";
import { Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import resume2 from './assets/resume2.pdf';
import Header from "./Header";

const Resume = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <>
        <Header />
            <div className="body">
                <div>
                    <iframe title="resume" src="https://drive.google.com/file/d/1UfgpzZ20xXQJOEmf89YV_1hu04hGs7s3/preview" allow="autoplay" className="resume"></iframe>
                </div>
            </div>
        </>
    );
}

export default Resume;