import React, { useState } from 'react';
import appointment from '../assets/projects/appointment.png';
import blog from '../assets/projects/blog.jpg';
import expense from '../assets/projects/expense.png';
import recipe from '../assets/projects/recipe.jpg';
import metrics from '../assets/projects/metrics.png';
import space from '../assets/projects/space.png';
import movie from '../assets/projects/movie.png';
import ishwt from '../assets/projects/ISHWT.png';
// import portfolio from '../assets/projects/portfolio.png';
import math from '../assets/projects/math.png';

const Portfolio = () => {

    const portfolio = [
        {
            id: 1,
            title: `Appointment Booking App`,
            src: appointment,
            description: `A user-friendly app designed to transform the way you discover and interact with service providers, in our case, doctors. MediMate is your digital companion, 
                        offering an intuitive and efficient platform that connects you with the best healthcare professionals. 
                        At its core, MediMate is an ingenious fusion of cutting-edge technology. The React-based frontend, fortified with React Redux, 
                        delivers a seamless and responsive user experience. 
                        Every interaction feels effortless, making your journey from discovery to engagement a breeze.
                
                        On the backend, MediMate relies on the robust and secure Rails framework. We have left no stone un-turned when it comes to ensuring the highest levels of authentication and authorization. 
                        Your data safety is our top priority.
                        What sets MediMate apart is its commitment to simplifying your search for healthcare providers. 
                        Whether you are seeking a specialist, general practitioner, or any other medical service, our platform streamlines the process, allowing you to browse and book appointments with ease. 
                        It is a bridge between the needs of patients and the expertise of healthcare professionals.
                    
                        But MediMate is not just an app; it is an experience. We believe that technology should empower and enrich your life. 
                        With MediMate, you will discover the convenience of managing your healthcare on your terms. 
                        Join us on this exciting journey to revolutionize how we interact with healthcare providers.`,

            code: 'https://github.com/mailsg/medimate-backend', 
        },
        {
            id: 2,
            title: `Blog App`,
            src: blog,
            description: `A sophisticated blog app built on the robust Rails framework, featuring essential gems like Devise for user authentication, CanCanCan for authorization, and Capybara for seamless testing. With an elegant and intuitive design, this app empowers bloggers and writers to share their ideas effortlessly. 
                        Elevate your blogging experience with our Rails-powered blog app and start sharing your thoughts today!
                        An interactive blog website built using Ruby on Rails, allowing users to create, read, comment on, and like posts.
                        A simple yet powerful example of web application development.`,

            code: 'https://github.com/mailsg/rails-blog-app', 
        },
        {
            id: 3,
            title: `Expense Tracker`,
            src: expense,
            description: `The Expense Tracker App, driven by the power of Rails! The app leverages industry-standard gems like Devise for user authentication, CanCanCan for precise authorization, and Capybara for rigorous testing. Seamlessly manage your expenses with this efficient, user-friendly solution. 
                        With Rails at its core, the app sets a new standard for expense tracking. 
                        Give it a try and take control of your finances today!`,

            code: 'https://github.com/mailsg/Rails-Budget-App', 
        },
        {
            id: 4,
            title: `Build Your Recipe`,
            src: recipe,
            description: `Your culinary companion! Organize recipes, ingredients, and your pantry effortlessly. 
                        Save ingredients, track your kitchen inventory, and craft delightful recipes. 
                        Plus, easily generate shopping lists based on your recipe needs. 
                        Share your culinary creations with the world by making recipes public. 
                        Take the hassle out of meal planning and make cooking a breeze with the Recipe app!`,

            code: 'https://github.com/mailsg/Recipe-App', 
        },
        {
            id: 5,
            title: `Know Your Food Metrics`,
            src: metrics,
            description: `Know Your Food.. Webapp is a mobile web application to check about a list of foods making use of React and Redux.`,

            code: 'https://github.com/mailsg/React-Capstone-Metrics-Webapp', 
        },
        {
            id: 6,
            title: `Space Travelers' Hub`,
            src: space,
            description: `Space Travelers' Hub is a a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.`,

            code: 'https://github.com/mailsg/React-Capstone-Space-Travellers-Hub', 
        },
        {
            id: 7,
            title: `Movie Collection App`,
            src: movie,
            description: `The Best Movie Hub project is a dynamic web application that leverages an external API to fetch and display data about movies and shows. 
                        The core idea behind this project is to create a user-friendly platform that allows users to explore, discover, and interact with their favorite movies and shows. By integrating the API data, 
                        the web app provides a comprehensive collection of information, including details such as movie titles, genres, ratings.
                        With this project, the focus is not only on accessing and presenting the API data but also on creating an engaging and intuitive user interface. The web app incorporates a visually appealing design, seamless navigation, and interactive features that enhance the overall user experience. Users can search for specific movies or shows, 
                        filter content based on genres or ratings, and even create personalized watchlists to keep track of their favorite titles.

                        In terms of development, the project involves working with modern web technologies such as HTML, CSS, and JavaScript.

                        The Best Movie Hub project also offers opportunities for further expansion and customization. Additional features, such as user authentication, user reviews, and recommendations, can be integrated to enhance the overall functionality and personalization of the web app. 
                        The project's modular structure and well-documented codebase make it easy to iterate, refine, and add new features as desired.

                        Overall, the Best Movie Hub project showcases the ability to utilize an external API effectively, transforming raw data into a visually appealing and user-friendly web application. It demonstrates proficiency in web development, UI/UX design, and data integration. By combining the power of an API with creativity and technical skills, this project opens up endless possibilities for movie enthusiasts to discover, 
                        explore, and enjoy their favorite films and shows in one centralized hub.`,

            code: 'https://github.com/mailsg/Module-2-Capstone-Project', 
        },
        {
            id: 8,
            title: `International Summit Portal`,
            src: ishwt,
            description: `This project showcases a website for an event called International Summit on Health & Wellness Tourism 2023.`,

            code: 'https://github.com/mailsg/Capstone-1', 
        },
        {
            id: 9,
            title: `Math-Magicians`,
            src: math,
            description: `Math-Magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to, make simple calculations and read a random math-related quote.`,

            code: 'https://github.com/mailsg/Math-Magicians', 
        },
    ];
    return (
        <div
          name="portfolio" 
          className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 flex justify-center flex-col items-center">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-16">
                My Portfolio
              </p>
              <p className="py-6">Have a look at some of my projects</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {portfolio.map(({ id, title, src, code }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105 w-full h-48 object-cover"
                    // onClick={() => openModal(id)}
                  />
                  <div className="flex items-center justify-center flex-col">
                    <p className="text-center text-xl font-medium py-4" 
                        style={{ fontFamily: 'Montserrat, sans-serif' }} >
                        
                        {title}
                        
                    </p>
                    <button
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-md"
                      onClick={() => window.open(code)}
                    >
                      Source Code
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* {isModalOpen && <Modal project={selectProject} onClose={closeModal} />} */}
        </div>
      );
    };

export default Portfolio;