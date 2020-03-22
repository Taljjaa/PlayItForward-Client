// React imports
import React from "react";

// Custom imports
import Navbar from "../components/Navbar";
import newsImage from "../media/animations/news-bird.gif";
import contributeImage from "../media/animations/contribute-piggy.gif";
import GifButton from "../components/GifButton";

// Function component that displays general info about the program
// Layout:
// Navbar, Text Blurb, GifButtons!
const AboutPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen overflow-scroll">
      {/* Navbar */}
      <Navbar />

      {/* Text Blurb */}
      <div className="flex flex-col items-center">
        <h1 className="text-bold text-xl pt-4">ABOUT PLAY IT FORWARD</h1>
        <p className="p-6 text-sm text-center pt-2">
          Play It Forward is an application inspired from a Hackathon project
          made by Jennifer Williams and Shawn Huang Fernandes. It's purpose is
          to lower the barrier for volunteer engagement by gamifying the
          volunteering experience. This is currently a work in progress, so stay
          tuned to see where it goes!
        </p>

        {/* GifButtons */}
        <div className="flex justify-center w-screen pt-4 pb-2">
          <a
            href="https://github.com/Taljjaa/PlayItForward-Client"
            target="_blank"
          >
            <GifButton image={contributeImage} caption="Help Us Out" />
          </a>
          <a
            href="https://democracylab.ghost.io/play-it-forward-makes-volunteering-fun/"
            target="_blank"
          >
            <GifButton image={newsImage} caption="Read About PIF" />
          </a>
        </div>
        <div className="flex justify-center w-screen">
          <a href="https://jenniferwilliams.dev/" target="_blank">
            <GifButton image={newsImage} caption="About Jen" />
          </a>
          <a href="https://shawnhuangfernandes.netlify.com" target="_blank">
            <GifButton image={contributeImage} caption="About Shawn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
