import React from "react";
import postgres from "../assets/skills/Postgres.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/javascript.png";
import reactPic from "../assets/skills/react.png";
import github from "../assets/skills/github.png";
import ruby from "../assets/skills/Ruby.png";
import rails from "../assets/skills/Rails.png";

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
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactPic,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
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
  ];
  return (
    <div
      name="skill"
      className="bg-gradient-to-b from-gray-800 to-black w-full"
    >      
    </div>
  );
};
export default Skill;