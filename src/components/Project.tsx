import React from "react";
import artmapImg from '../assets/images/artmap.png';
import xiaobaiImg from '../assets/images/xiaobai.png';
import realestateImg from '../assets/images/real-estate.jpg';
import youtubeCustomizerImg from '../assets/images/youtube-customizer.png';
import ninoImg from '../assets/images/nino.png';
import eulerPlotterImg from '../assets/images/euler-plotter.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://art-map-one.vercel.app/" target="_blank" rel="noreferrer"><img src={artmapImg} className="zoom" alt="ArtMap thumbnail" width="100%"/></a>
                <a href="https://art-map-one.vercel.app/" target="_blank" rel="noreferrer"><h2>ArtMap</h2></a>
                <p>Google Maps Platform Awards Winner. A global art discovery platform combining Next.js, React, Three.js, and Google Maps API. Features interactive 3D galleries synchronized with Street View, artwork geolocation via the Art Institute of Chicago API, and an AI-powered tour guide using Gemini API.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Shenghan0329" target="_blank" rel="noreferrer"><img src={xiaobaiImg} className="zoom" alt="Xiaobai thumbnail" width="100%"/></a>
                <a href="https://github.com/Shenghan0329" target="_blank" rel="noreferrer"><h2>Xiaobai — Couple Diary Platform</h2></a>
                <p>A private couple diary platform where partners can create, share, and cherish memories together through rich media entries and real-time notifications.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Shenghan0329" target="_blank" rel="noreferrer"><img src={realestateImg} className="zoom" alt="Real Estate thumbnail" width="100%"/></a>
                <a href="https://github.com/Shenghan0329" target="_blank" rel="noreferrer"><h2>Real Estate Analysis Platform</h2></a>
                <p>An AI-powered real estate analysis platform that helps users explore property trends, compare markets, and manage their portfolios through intuitive visualizations and data-driven insights.</p>
            </div>
            <div className="project">
                <a href="https://addons.mozilla.org/en-US/firefox/addon/youtube-interface-customizer/" target="_blank" rel="noreferrer"><img src={youtubeCustomizerImg} className="zoom" alt="YouTube Customizer thumbnail" width="100%"/></a>
                <a href="https://addons.mozilla.org/en-US/firefox/addon/youtube-interface-customizer/" target="_blank" rel="noreferrer"><h2>YouTube Interface Customizer</h2></a>
                <p>A Firefox browser extension that customizes and enhances the YouTube viewing experience. Published on the Mozilla Add-ons Store with active users.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Shenghan0329/Nino" target="_blank" rel="noreferrer"><img src={ninoImg} className="zoom" alt="Nino thumbnail" width="100%"/></a>
                <a href="https://github.com/Shenghan0329/Nino" target="_blank" rel="noreferrer"><h2>Nino — Mobile App</h2></a>
                <p>A mobile application project focused on delivering an intuitive user experience with modern mobile development practices.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Shenghan0329/euler-plotter" target="_blank" rel="noreferrer"><img src={eulerPlotterImg} className="zoom" alt="Euler Plotter thumbnail" width="100%"/></a>
                <a href="https://github.com/Shenghan0329/euler-plotter" target="_blank" rel="noreferrer"><h2>Euler Plotter</h2></a>
                <p>A differential-algebraic demonstration tool for numerical methods, visualizing mathematical concepts through interactive plotting and computation.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;