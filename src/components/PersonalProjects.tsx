
import { FC } from 'react';
import { Folder } from 'lucide-react';

// Sample personal projects data
const projects = [
  {
    id: 1,
    title: 'Project Name 1',
    category: 'Web Development',
    description: 'Description of the project, including technologies used, your role, and the outcome. Highlight any challenges overcome.',
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  },
  {
    id: 2,
    title: 'Project Name 2',
    category: 'Mobile App',
    description: 'Description of the project, including technologies used, your role, and the outcome. Highlight any challenges overcome.',
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
  },
  {
    id: 3,
    title: 'Project Name 3',
    category: 'Research',
    description: 'Description of the project, including technologies used, your role, and the outcome. Highlight any challenges overcome.',
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
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Folder className="w-5 h-5 text-portfolio-primary mr-2" />
                  <span className="text-sm text-portfolio-primary">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-portfolio-dark mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a 
                  href={project.link} 
                  className="inline-block text-portfolio-primary hover:text-portfolio-secondary transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
