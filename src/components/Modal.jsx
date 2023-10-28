import React from 'react';

const Modal = ({ project, onClose}) => {
    return (
        <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
          <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-80"></div>
    
          <div className="modal-container bg-gradient-to-b from-black to-gray-800 md:w-1/2 mx-auto rounded shadow-lg z-50 overflow-y-auto">
    
            <div className="modal-content py-4 text-left px-6 max-h-96">
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold">{project.title}</p>
                <div className="modal-close cursor-pointer z-50" onClick={onClose}>
                  <svg
                    className="fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                  </svg>
                </div>
              </div>
              <p>{project.description}</p>
              <div className="flex justify-end pt-2">
                <button
                    className="modal-close px-6 p-3 rounded-lg bg-indigo-700"
                    onClick={() => window.open(project.code)}
                >
                    Source Code
                </button>
                <button
                  className="text-white shadow-sm  px-6 p-3 rounded-lg bg-red-700 ml-10"
                    onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Modal;