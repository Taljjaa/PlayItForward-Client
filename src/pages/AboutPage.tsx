// React imports
import React from 'react';

// Custom imports
import Navbar from '../components/Navbar';
import newsImage from '../media/animations/news-bird.gif';
import contributeImage from '../media/animations/contribute-piggy.gif';
import GifButton from '../components/GifButton';
import './AboutPage.scss';

// Function component that displays general info about the program
// Layout:
// Navbar, Text Blurb, GifButtons!
const AboutPage = () => {
  return (
    <div className="aboutPageContainer">
      {/* Navbar */}
      <Navbar />

      {/* Text Blurb */}
      <div className="aboutPageText">
        <h1 className="aboutPageHeader">ABOUT PLAY IT FORWARD</h1>
        <p className="aboutPageParagraph">
          Play It Forward is an application made to get volunteers excited about
          volunteering by gamifying the experience while also providing a
          platform for nonprofits to get the support they need to build and
          support their communities.
        </p>
      </div>

      {/* GifButtons */}
      <div className="aboutPageGifButtonContainer">
        <a
          href="https://github.com/Taljjaa/PlayItForward-Client"
          target="_blank"
          rel="noopener noreferrer">
          <GifButton image={contributeImage} caption="Help Us Out" />
        </a>
        <a
          href="https://democracylab.ghost.io/play-it-forward-makes-volunteering-fun/"
          target="_blank"
          rel="noopener noreferrer">
          <GifButton image={newsImage} caption="Read About PIF" />
        </a>
      </div>
      <div className="aboutPageGifButtonContainer">
        <a
          href="https://jenniferwilliams.dev/"
          target="_blank"
          rel="noopener noreferrer">
          <GifButton image={newsImage} caption="About Jen" />
        </a>
        <a
          href="https://shawnhuangfernandes.netlify.com"
          target="_blank"
          rel="noopener noreferrer">
          <GifButton image={contributeImage} caption="About Shawn" />
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
