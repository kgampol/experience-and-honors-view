import { FC } from 'react';
import { Folder } from 'lucide-react';

// Sample personal projects data
const projects = [
  {
    id: 1,
    title: 'Radar System',
    category: 'Electrical',
    description: 'Current in progress project',
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  },
  {
    id: 2,
    title: 'Boeing 787 Structural Simulation',
    category: 'Mechanical Engineering',
    description: [
      'Modeled a detailed structural segment of the Boeing 747 using SolidWorks.',
      '\n',
      'Validated stress distribution through Hypermesh FEA and hand calculations.',
      '\n',
      'Developed a comprehensive failure analysis report.',
      '\n',
      'Ensured accuracy of software simulations against theoretical results.'
    ],
    //link: '#',
    //imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
  },
  {
    id: 3,
    title: 'Guayule Rubber Mechanical Testing',
    category: 'Research Project — NSF Engineering Research Center',
    description: 'Developed and executed a full testing protocol to benchmark guayule rubber against traditional natural rubber, using ASTM standards and custom-fabricated tensile and compression specimens. Engineered a clever slicing method using an industrial meat slicer to turn irregular blocks into precision test samples—earning praise from lab and machine shop staff. Analyzed stress-strain data in MATLAB and Excel to extract key material properties, then presented results in a clean, technical report to Dr. McCloskey and faculty.',
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
  }
];

const PersonalProjects: FC = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Personal Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
            >
              {/* <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div> */}
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Folder className="w-5 h-5 text-portfolio-primary mr-2" />
                  <span className="text-sm text-portfolio-primary">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-portfolio-dark mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                {/*
                //TODO: Add links to projects
                <a 
                  href={project.link} 
                  className="inline-block text-portfolio-primary hover:text-portfolio-secondary transition-colors"
                >
                  View Project →
                </a>
                */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
