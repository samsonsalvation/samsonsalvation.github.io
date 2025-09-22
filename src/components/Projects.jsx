import { projects } from "../constants"

const Project = () => {
    return (
        <div>
           {projects.map((project, index) => (
            <div key={index} className="px-8 sm:max-w-3xl mx-auto items-center text-left justify-center mt-16 lg:mt-20 tracking-tight space-y-8 lg:space-y-4">
                <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block">
                <img src={project.image} alt={project.title} loading="lazy" className="w-full h-auto mb-4 border rounded-2xl transition-transform transition-opacity duration-300 ease-in-out hover:scale-95 hover:opacity-70" />
                <div> 
                    <h2 className="text-2xl mb-2">{project.title}</h2>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                </div>
                </a>
            </div>    
           ))}
            
        </div>
    )
}

export default Project;