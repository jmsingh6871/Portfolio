import React from 'react';
import react from '../assets/icons/react.svg'
import Bar from './Bar';
import python from '../assets/icons/python.svg'


const languages=[
    {
        icon: python,
        name: 'Python',
        level: '70'
    },
    {
        icon: react,
        name: 'Dart',
        level: '60'
    },
    {
        icon: react,
        name: 'HTML',
        level: '80'
    },
    {
        icon: react,
        name: 'CSS',
        level: '40'
    },
    {
        icon: react,
        name: 'Reactjs',
        level: '60'
    },
    {
        icon: react,
        name: 'Nodejs',
        level: '80'
    },
]

const tools = [
    {
        icon: react,
        name: 'Android Studio',
        level: '80'
    },
    {
        icon: react,
        name: 'Flutter',
        level: '70'
    },
    {
        icon: react,
        name: 'Mongodb',
        level: '60'
    },
]

const Resume = () => {
    return (
        <div className="container resume">
            <div className="row">
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card_heading">
                        Education
                    </h4>
                    <div className="resume-card_body">
                        <h5 className="resume-card_title">
                            B.Tech(Information Technology)
                        </h5>
                        <p className="resume-card_name">
                            Guru Tegh Bahadur Institute of Technology
                        </p>
                        <p className="resume-card_details">Hello I am a semifinal year student pursuing B.Tech(Information Technology) from GGSIPU.</p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card_heading">
                        Experience
                    </h4>
                    <div className="resume-card_body">
                        <h5 className="resume-card_title">
                            Github Campus Expert
                        </h5>
                        <p className="resume-card_name">
                            at Github
                        </p>
                        <p className="resume-card_details">Web Developer, Flutter Developer, Backend Developer, Compititve Coder</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language_heading">
                        Languages and Frameworks
                    </h5>
                    <div className="resume-language_body mt-3">
                        {
                            languages.map(Language=>
                                <Bar value={Language} />
                                )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language_heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language_body mt-3">
                        {
                            tools.map(tool=> 
                            <Bar value={tool} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;