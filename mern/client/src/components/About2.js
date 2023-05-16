import React from "react";

const About = () => {
  return (
    <div className="container mx-auto flex flex-col px-10 py-20 items-center bg-blue-900">
      <div className="w-full p-5 mb-5 bg-blue-50 rounded-lg shadow">
        <section id="Overview">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">
            Overview
          </h1>
          <p className="mb-8 leading-relaxed text-gray-700">
            Hello, I'm a Computer Engineering graduate from Texas A&M University, with a strong foundation in Computer Science and a minor in Mathematics. Having achieved a GPA of 3.93, I was recognized as the Outstanding Junior in the College of Engineering, a testament to my academic prowess.
          </p>
        </section>
      </div>
      <div className="w-full p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
        <a href="#McKinsey" className="text-gray-900 font-medium hover:text-purple-600 transition-colors duration-200">
            McKinsey Experience
          </a>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
        <a href="#Internships" className="text-gray-900 font-medium hover:text-purple-600 transition-colors duration-200">
            Internships
          </a>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
        <a href="#Extra circulars" className="text-gray-900 font-medium hover:text-purple-600 transition-colors duration-200">
            Extra circulars
          </a>
        </div>
      </div>
      <div className="w-full mt-10">
        <section
          id="McKinsey"
          className="bg-blue-50 p-5 rounded-lg shadow mb-5"
          style={{ scrollMarginTop: "+7rem" }}
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">
            McKinsey
          </h1>
          <p className="mb-8 leading-relaxed text-gray-700">
          For the last several years, I've been working at McKinsey & Company, progressing from a Senior Business Analyst to an Associate. In my current role, I've been involved in several intriguing projects, including developing Metaverse opportunities for clients, conducting business reviews for a Blockchain-as-a-Service company, and analyzing potential investments in emerging technologies like electric vertical takeoff and landing (eVTOL).

          Previously, as a Senior Business Analyst, I've had the opportunity to contribute to McKinsey Global Institute research, partner with local governments, and develop analytic tools for COVID-19 response in healthcare. I also have experience in assessing the cyber certification market for investment potential.
          </p>
        </section>
        <section
          id="Internships"
          className="bg-blue-50 p-5 rounded-lg shadow mb-5"
          style={{ scrollMarginTop: "+7rem" }}
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">
            Internships
          </h1>
          <p className="mb-8 leading-relaxed text-gray-700">
          Before joining McKinsey, I interned at Deloitte Consulting, AT&T, and Atmos Energy Corporation. These experiences honed my skills in various areas, such as cybersecurity, network optimization, and data visualization.
          </p>
        </section>
        <section
          id="Extra Cirrculars"
          className="bg-blue-50 p-5 rounded-lg shadow mb-5"
          style={{ scrollMarginTop: "+7rem" }}
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">
            Extra Cirrculars
          </h1>
          <p className="mb-8 leading-relaxed text-gray-700">
          In terms of leadership, I served as the Treasurer for the Century Men’s Society and was a selected member of the Zachry Leadership Program. I also co-founded Ntwrk, a start-up during my university years.
          Recognized for my community service, I received the Ad Astra award and was a finalist in the Aggie Pitch. My technical skills include Python, C++, MySQL, R, JavaScript, PHP, CSS, HTML, MATLAB, Alteryx, and Microsoft Excel. I'm also conversational in Spanish.
          Outside of work, I have a keen interest in basketball, tennis, and international travel. I also enjoy listening to podcasts, exploring the world of wine, volunteering in my community, and keeping up with the latest trends in artificial intelligence and cybersecurity.

          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
