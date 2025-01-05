import React from 'react';

export default function AuthorCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">




        <img
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
          src="../images/neha.jpg"
          
        />


        <div>
          <h3 className="text-xl font-bold"> Neha Ghori </h3>
          <p className="text-slate-500">
            {" "}
            Software Engineer | SEO Expert | Web Developer{" "}
          </p>
        </div>
      </div>





      <p className="mt-4 text-black leading relaxed">
        Neha Ghori is an experienced artificial intelligence learning web development and the degree of AI is in process
      </p>

      <div className="mt-4 flex space-x-3">
        <a
          href="https://www.linkedin.com/in/neha-kamran-b06538298/"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">

          Linkedin
        </a>

        <a
          href="https://github.com/Nehakami"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">

          GitHub
        </a>
      </div>
    </div>
  );
}


