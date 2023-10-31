import React, { useState } from 'react';
import Modal from './Modal';
import appointment from '../assets/projects/appointment.png';
import blog from '../assets/projects/blog.jpg';
import expense from '../assets/projects/expense.png';
import recipe from '../assets/projects/recipe.png';
import metrics from '../assets/projects/metrics.png';
import space from '../assets/projects/space.png';
import movie from '../assets/projects/movie.png';
import ishwt from '../assets/projects/ISHWT.png';
import math from '../assets/projects/math.png';
import '../App.css';

const Portfolio = () => {

    const portfolio = [
        {
            id: 1,
            title: `Movie Collection App`,
            src: movie,
            description: `This is a dynamic web application that leverages an external API to fetch and display data about movies and shows. 
            The core idea behind this project is to create a user-friendly platform that allows users to explore, discover, and interact with their favorite movies and shows. By integrating the API data, 
            the web app provides a comprehensive collection of information, including details such as movie titles, genres, ratings.
            In terms of development, the project involves working with modern web technologies such as HTML, CSS, JavaScript and RESTful API.
            The project's modular structure and well-documented codebase make it easy to iterate, refine, and add new features as desired.`,

            code: 'https://github.com/mailsg/Module-2-Capstone-Project', 
            demo: 'https://mailsg.github.io/Module-2-Capstone-Project/dist',
        },
        {
            id: 2,
            title: `Know Your Food Metrics`,
            src: metrics,
            description: `Know Your Food.. is a feature-rich mobile web application built with the power of React and Redux.
            Explore an extensive list of foods, their nutritional facts, origins, and more at your fingertips.
            This user-friendly app is designed to empower you with knowledge about the foods you consume daily,
            promoting healthier and informed choices.`,

            code: 'https://github.com/mailsg/React-Capstone-Metrics-Webapp', 
            demo: 'https://know-your-food.onrender.com/',
        },
        {
            id: 3,
            title: `Build Your Recipe`,
            src: recipe,
            description: `Your culinary companion! Organize recipes, ingredients, and your pantry effortlessly.
            It is a feature-rich mobile web application built with the power of React and Redux and robustness of Rails backend framework.
            Save ingredients, track your kitchen inventory, and craft delightful recipes.
            Plus, easily generate shopping lists based on your recipe needs.
            Share your culinary creations with the world by making recipes public.
            Take the hassle out of meal planning and make cooking a breeze with the Recipe app!`,

            code: 'https://github.com/mailsg/Recipe-App', 
            demo: 'https://github.com/mailsg/Recipe-App',
        },
        {
            id: 4,
            title: `International Summit Portal`,
            src: ishwt,
            description: `This project is a vibrant and informative website tailored to the prestigious event known as the "International Summit on Health & Wellness Tourism 2023."
            It is developed with HTML5, CSS3 and Vanilla JavaScript. 
            Within its digital pages, you will discover a comprehensive platform that perfectly encapsulates the essence and significance of this global gathering. 
            This web development venture merges creativity and functionality to provide attendees and enthusiasts with an engaging and interactive experience. 
            It's more than just a website; it's your digital gateway to the future of health and wellness tourism.`,

            code: 'https://github.com/mailsg/Capstone-1', 
            demo: 'https://mailsg.github.io/Capstone-1/',
        },
        {
            id: 5,
            title: `Math-Magicians`,
            src: math,
            description: `Math-Magicians isn't your typical math website; 
            it's an immersive and user-friendly Single Page App (SPA), powered by React and Redux, designed to captivate the hearts of mathematics enthusiasts. 
            Dive into a world where you can effortlessly perform calculations and be inspired by a daily dose of intriguing math-related quotes. 
            It's the perfect digital haven for anyone who finds beauty in numbers and seeks to explore the wonders of mathematics with ease.`,

            code: 'https://github.com/mailsg/Math-Magicians', 
            demo: 'https://math-magicians-ysof.onrender.com/',
        },
        {
            id: 6,
            title: `Expense Tracker`,
            src: expense,
            description: `The Expense Tracker App, driven by the power of Rails! The app leverages industry-standard gems like Devise for user authentication, CanCanCan for precise authorization, and Capybara for rigorous testing. Seamlessly manage your expenses with this efficient, user-friendly solution.
            With Rails at its core, the app sets a new standard for expense tracking.
            Give it a try and take control of your finances today!`,

            code: 'https://github.com/mailsg/Rails-Budget-App', 
            demo: 'https://github.com/mailsg/Rails-Budget-App',
        },
        {
            id: 7,
            title: `Space Travelers' Hub`,
            src: space,
            description: `Space Travelers' Hub is your gateway to a cutting-edge web application designed for a pioneering company 
            in the commercial and scientific space travel industry.
            With this innovative platform, built with React Redux and SpaceX API, users can seamlessly book rocket journeys and secure their spots on exclusive space missions, 
            unlocking a realm of thrilling adventures beyond our world. 
            It's not just an App; it's your passport to the cosmos. Join us as we venture into the final frontier.`,

            code: 'https://github.com/mailsg/React-Capstone-Space-Travellers-Hub', 
            demo: 'https://space-travelers-hub-vls7.onrender.com/',
        },
        {
            id: 8,
            title: `Appointment Booking App`,
            src: appointment,
            description: `A user-friendly app designed to transform the way you discover and interact with service providers, in our case, doctors. MediMate is your digital companion, 
            offering an intuitive and efficient platform that connects you with the best healthcare professionals.
            
            The React-based frontend, fortified with React Redux, delivers a seamless and responsive user experience. 
            Every interaction feels effortless, making your journey from discovery to engagement a breeze.        
            
            On the backend, MediMate relies on the robust and secure Rails framework. We have left no stone un-turned when it comes to ensuring the highest levels of authentication and authorization. 
            Your data safety is our top priority. 
            What sets MediMate apart is its commitment to simplifying your search for healthcare providers.`,

            code: 'https://github.com/mailsg/medimate-backend',
            demo: 'https://github.com/mailsg/medimate-backend', 
        },
        {
            id: 9,
            title: `Blog App`,
            src: blog,
            description: `A sophisticated blog app built on the robust Rails framework, featuring essential gems like Devise for user authentication, CanCanCan for authorization, and Capybara for seamless testing. With an elegant and intuitive design, this app empowers bloggers and writers to share their ideas effortlessly. 
            Elevate your blogging experience with our Rails-powered blog app and start sharing your thoughts today!
            An interactive blog website built using Ruby on Rails, allowing users to create, read, comment on, and like posts.
            A simple yet powerful example of web application development.`,

            code: 'https://github.com/mailsg/rails-blog-app', 
            demo: 'https://github.com/mailsg/rails-blog-app',
        },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectProject, setSelectProject] = useState(null);

    const openModal = (id) => {
        setSelectProject(portfolio.find((project) => project.id === id));
        setIsModalOpen(true);
        document.body.classList.add('overflow-hidden');
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.classList.remove('overflow-hidden');
    };


    return (
        <div
          name="portfolio" 
          className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 flex justify-center flex-col items-center">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-16" style={{ fontFamily: 'Playpen' }}>
                My Portfolio
              </p>
              <p className="py-6" style={{ fontFamily: 'Playpen Sans' }}>Have a look at some of my projects</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {portfolio.map(({ id, title, src, demo }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md w-full h-48 object-fill"
                  />
                  <div className="flex items-center justify-center flex-col">
                    <p className="text-center text-xl font-medium py-4 cursor-pointer underline" 
                        style={{ fontFamily: 'Playpen' }}
                        onClick={() => window.open(demo)}
                      >
                        
                      {title}

                    </p>
                    <button
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-md mob_pf"
                      onClick={() => openModal(id)} 
                      style={{ fontFamily: 'Playpen' }}
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {isModalOpen && <Modal project={selectProject} onClose={closeModal} />}
        </div>
      );
    };

export default Portfolio;