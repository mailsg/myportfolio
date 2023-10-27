import React from "react";
import postgres from "../assets/skills/Postgres.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/javascript.png";
import reactPic from "../assets/skills/react.png";
import github from "../assets/skills/github.png";
import ruby from "../assets/skills/Ruby.png";
import rails from "../assets/skills/Rails.png";
import devops from "../assets/skills/devops.jpg";

const Skill = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: reactPic,
      title: "React",
      style: "shadow-blue-600",
}    ,
    {
      id: 6,
      src: postgres,
      title: "Postgres",
      style: "shadow-cyan-400",
    },
    {
      id: 7,
      src: ruby,
      title: "Ruby",
      style: "shadow-red-300",
    },
    {
      id: 8,
      src: rails,
      title: "Rails",
      style: "shadow-red-700",
    },
    {
      id: 9,
      src: devops,
      title: "DevOps",
      style: "shadow-teal-700",
    },
  ];
  return (
    <div
      name="skill"
      className="bg-gradient-to-br from-gray-800 to-black w-full"
    >      
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="py-4 flex justify-center flex-col items-center">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline mt-16">
            My Skills
          </p>
          <p className="py-6">
            Technologies I am well versed with but not limited to.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Skill;