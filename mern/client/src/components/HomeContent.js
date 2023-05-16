import React from "react";


export default function HomeContent() {
  return (
    <section id="about" className="bg-black text-white">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-white">
            Hi, I'm Bill.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a Computer Engineer from Texas with three years of experience at McKinsey & Company. Currently, I am attending business school at INSEAD, expanding my knowledge and skills in business and leadership while gaining a perspective on different cultures. My background in computer engineering, coupled with my consulting and business education, equips me to excel in bridging technology and business domains.
          </p>
          <a
            href="/about"
            className="mb-4 inline-flex text-blue-500 underline hover:text-blue-800"
          >
            Learn More
          </a>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./Florence.jpg"
          />
        </div>
      </div>
    </section>
  );
}
