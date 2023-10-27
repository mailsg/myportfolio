import React from "react";
import '../App.css';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-10 mx-auto flex flex-col gap-5 justify-center w-full h-full">
        <div className="pb-8 flex justify-center mob_about">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>
        <p className="mb-3 text-white-500 dark:text-white-400 hidden sm:block">
          I am a Web Developer. I can help you build a product,
          feature or website. Look through some of my work and
          experience. If you like what you see and have a project you
          need coded, don't hesitate to contact me.
        </p>
        <p className="text-white-500 dark:text-white-400 hidden sm:block">
        Ready to Transform Your Vision into Reality?<br />
        Are you envisioning a cutting-edge website, pioneering features, or a groundbreaking product?<br /><br />
        Look no further. I am here to turn your dreams into digital masterpieces. 
        </p>
        <p className="text-white-500 dark:text-white-400 mob_about_p">
        With a blend of expertise and unwavering dedication, I bring your ideas to life effortlessly.
        If the projects in my portfolio have sparked your excitement, 
        and you're sitting on a coding challenge that demands expert attention, let's join forces. 
        Together, we'll weave your concepts into a remarkable success story. 
        Take the leap and connect with me today. Let's craft something extraordinary together!
        </p>
      </div>
    </div>
  );
};

export default About;