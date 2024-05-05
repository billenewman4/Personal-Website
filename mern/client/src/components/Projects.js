const projects = [
        {
            id: "WanderWisz",
            title: "WanderWisz",
            link: "https://www.wanderwisz.com",
            description: "Discover budget travel made easy"
        },
        // more of your projects...
];

function ProjectBlocks({ projects }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map(project => (
                <div key={project.id} className="p-5 mb-5 bg-gray-800 text-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <section id={project.id} style={{ scrollMarginTop: "+7rem" }}>
                        <h1 className="title-font sm:text-2xl text-xl mb-4 font-medium text-white">
                            {project.title}
                        </h1>
                        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                            <a href={project.link} rel="noopener noreferrer" className="title-font font-medium text-gray-200 hover:text-gray-300 transition-colors duration-200 mb-4 md:mb-0">
                                <span className="ml-3 text-xl">Link</span>
                            </a>
                        </div>
                        <p className="mb-8 leading-relaxed text-gray-300">
                            {project.description}
                        </p>
                    </section>
                </div>
            ))}
        </div>
    );
}

const Projects = () => {
    return (
        <div className="container mx-auto px-10 py-20 items-center bg-gray-900">
            <h2 className="text-2xl font-bold mb-4 text-white">My Projects</h2>
            <ProjectBlocks projects={projects} />
        </div>
    );
};

export default Projects;
