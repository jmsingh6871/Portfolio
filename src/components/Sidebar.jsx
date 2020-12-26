import React from 'react';
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import mightycoder from '../assets/mightycoder.svg'
import resume from '../assets/Resume_JS.pdf'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:jmsingh6871@gmail.com")
    }
    return(
        <div className="sidebar">
            <img src={mightycoder} alt="avatar" className="sidebar_avatar"/>
            <div className="sidebar_name">
                Jagmohan <span>Singh</span></div>
                <div className="sidebar_item sidebar_title">Web Developer</div>
                <a href={resume} download="Resume_JS.pdf">
                    <div className="sidebar_item sidebar_resume">
                        <img src={tie} alt="resume" className="sidebar_icon"/>Download Resume
                    </div>
                </a>
                <figure className="sidebar_social_icons my-2">
                    <a href=""><img src={facebook} alt="facebook" className="sidebar_icon mr-3"/></a>
                    <a href=""><img src={instagram} alt="instagram" className="sidebar_icon"/></a>
                </figure>
                <div className="sidebar_contact">
                    <div className="sidebar_item sidebar_github">
                        <a href="https://github.com/jmsingh6871"><img src={github} alt="" className="sidebar_icon mr-3"/>Github</a>
                    </div>
                    <div className="sidebar_location">
                        <img src={pin} alt="location" className="sidebar_icon mr-3"/>
                        Delhi, India</div>
                    <div className="sidebar_item">code.jmsingh6871@gmail.com</div>
                    <div className="sidebar_item">9315174753 </div>
                </div>
                <div className="sidebar_item sidebar_email" onClick={handleEmailMe}>email me</div>
        </div>
    )
}
export default Sidebar;