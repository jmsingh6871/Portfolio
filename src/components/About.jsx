import React from 'react';
import api from '../assets/icons/api.svg'
import backend from '../assets/icons/backend.svg'
import algo from '../assets/icons/algo.svg'
import computer from '../assets/icons/computer.svg'
import repair from '../assets/icons/repair.svg'
import puzzle from '../assets/icons/puzzle.svg'

import Skillcard from './Skillcard';

const skills = [
    {
        icon:computer,
        title:"Flutter Development",
        about: "I can create a beautiful UI in Flutter using Dart."
    },
    {
        icon:repair,
        title:"Backend Development",
        about: "making database using rest api and mongodb"
    },
    {
        icon:api,
        title:"Community Builder",
        about: "Github Campus Expert at GTBIT"
    },
    {
        icon:algo,
        title:"Web Development",
        about: "fullstack developer"
    },
    {
        icon:puzzle,
        title:"Python Development",
        about: "using Python for backend"
    },
    {
        icon:computer,
        title:"Competitive Coder",
        about: "Solve problems in HackerRank"
    },
]

const About = () => {
    return (
        <div className="about">
            <h6 className="about_intro">
                Hello, I am a prefinal year student at GGSIPU. I am a tech-enthusiast, I always trying to explore new technologies and trying to create something new. Nowadays I am working as a freelancer.
            </h6>
            <div className="container about_container">
                <h6 className="about_heading">What I offer</h6>
                <div className="row">
                    {
                        skills.map(skill => 
                                    <Skillcard skill={skill} />
                                )
                    }
                </div>
            </div>
        </div>
    );
};

export default About;