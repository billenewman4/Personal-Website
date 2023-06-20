import React from "react";
import { Link, } from "react-router-dom";

export default function HomeContent() {
  return (
    <section id="about" className="bg-gray-900 text-white">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center space-y-8">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-6xl text-5xl mb-4 font-bold text-gray-100">
            Hi, I'm Bill.
          </h1>
          <p className="mb-8 leading-relaxed text-lg">
            I am a <span className="font-semibold text-blue-400">Computer Engineer</span> from Texas with three years of experience at <span className="font-semibold text-blue-400">McKinsey & Company</span>.
          </p>
          <p className="mb-8 leading-relaxed text-lg">
            Currently, I am attending business school at <span className="font-semibold text-blue-400">INSEAD</span>, expanding my knowledge and skills in business and leadership while gaining a perspective on different cultures.
          </p>
          <p className="mb-8 leading-relaxed text-lg">
            My background in computer engineering, coupled with my consulting and business education, equips me to excel in bridging technology and business domains.
          </p>
          <div className="flex justify-center space-x-4">
          <Link key="Work With Me" to="/WorkWithMe" className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Work With Me
          </Link>
            <a
              href="#projects"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
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
      <div className="fixed bottom-0 right-0 p-6">
        <div className="flex flex-col items-end space-y-2">
          <a href="/About" className="px-4 py-2 bg-gray-800 text-gray-100 rounded hover:bg-gray-700">About Me</a>
          <a href="/projects" className="px-4 py-2 bg-gray-800 text-gray-100 rounded hover:bg-gray-700">Projects</a>
          <a href="/personal-interests" className="px-4 py-2 bg-gray-800 text-gray-100 rounded hover:bg-gray-700">Personal Interests</a>
        </div>
      </div>
    </section>
  );
}