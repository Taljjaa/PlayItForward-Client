// React imports
import React from 'react';

// Custom imports
import Navbar from '../components/Navbar'
import newsImage from '../media/animations/news-bird.gif'
import trophyGif from "../media/animations/trophy-rotate.gif";
import contributeImage from '../media/animations/contribute-piggy.gif'

const AboutPage = () => {
    return (
        <div className="flex flex-col w-screen h-screen">
            <Navbar />
            <div className="flex flex-col items-center">
                <h1 className="text-bold text-xl pt-4">ABOUT PLAY IT FORWARD</h1>
                <p className="text-center pt-2">Play It Forward is an application inspired from a Hackathon project
                    made by Jennifer Williams and Shawn Huang Fernandes. It's purpose 
                    is to lower the barrier for volunteer engagement by gamifying the 
                    volunteering experience. This is currently a work in progress, so stay
                    tuned to see where it goes!
                </p>
                <div className="flex justify-center w-screen pt-8">
                    <img className="h-32 w-auto px-4" src={contributeImage} alt=""/>
                    <img className="h-32 w-auto px-4" src={newsImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;