import React from "react";
import Me from "../assets/skills/me.jpg";
import '../App.css';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-br from-gray-900 via-gray-700 to-gray-300"
    >   
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-around h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center mr-40 h-full home">
          <h2 className="text-5xl mt-12 sm:mt-0 sm:text-7xl font-bold text-white"  style={{ fontFamily: 'Playpen' }}>
            Hey There,<br /> I am Sandeep.
          </h2>
          <p className="text-white py-4 max-w-md" style={{ fontFamily: 'Playpen Sans' }}>
            <br />
            I am a Web Developer. I can help you build a product, feature or website. 
            Look through some of my work and experience! 
            If you like what you see and have a project you need coded, don't hesitate to contact me.
          </p>
          <div>
          <br />
          <a
            href="https://drive.google.com/uc?export=download&id=1linD6DYzYYCceziGptLBWZpp1_VWvieE"
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md gap-2 bg-gradient-to-t from-cyan-500 to-blue-500 cursor-pointer"
            download="sandeep-ghosh-resume.pdf"
            style={{ fontFamily: 'Playpen' }}
          >
            Get My Resume
          </a>
          
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="h-auto mx-auto max-profile-width -mt-20">
            <img
              src={Me}
              alt="Me"
              className="w-full h-full object-cover filter rounded-lg"
            />
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Home;
