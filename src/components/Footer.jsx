import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaGoogle,  
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-500 text-white">
    
        <div className="container mx-auto p-4">
            <section className="-mb-6 sm:hidden">
                <div className='flex justify-center items-center'>
                    <a
                        href="https://github.com/mailsg"
                        className="text-white inline-block p-2 m-1"
                        target='_blank'
                    >
                        <FaGithub size={13} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/sandeep0912"
                        className="text-white inline-block p-2 m-1"
                        target='_blank'
                    >
                        <FaLinkedin size={13} />
                    </a>

                    <a
                        href="mailto:mailsg0912@gmail.com"
                        className="text-white inline-block p-2 m-1"
                        target='_blank'
                    >
                        <FaGoogle size={13} />
                    </a>
                </div>
            </section>
        </div>
    

      <div className="text-center p-3" style={{ fontFamily: 'Playpen' }}>
        © {new Date().getFullYear()} Copyright: Sandeep Ghosh
      </div>
    </footer>
  );
};

export default Footer;
