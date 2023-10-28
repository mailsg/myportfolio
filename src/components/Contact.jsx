import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="py-4 flex justify-center flex-col items-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-16">
            Contact me
          </p>
          <p className="py-6">
            If you have an application you are interested in developing, a
            feature that you need built or a project that needs coding, I’d love
            to help.<br />I am always interested in hearing about new projects, so 
            if you'd like to chat please get in touch.
          </p>
        </div>
        <div className="flex justify-center item-center">
          <form
            method="post"
            action="https://formspree.io/f/xyyangae"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your e-Mail"
              required
              className="p-2 my-4  bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              required
              name="message"
              placeholder="Message for me..."
              rows="8"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Get in touch
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;