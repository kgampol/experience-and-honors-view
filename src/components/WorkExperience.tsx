
// Now supports optional "logo" property for each experience
import { FC } from 'react';

// Placeholders for logos - replace with your own images as needed
const LOGO_URLS = [
  "/lovable-uploads/cee19bd0-876b-4f07-9aaf-fc00032ad3d5.png", // Example local upload (replace as needed)
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=64&h=64&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=64&h=64&q=80",
];

// Sample work experience data
const experiences = [
  {
    id: 1,
    title: 'Senior Position',
    company: 'Company Name',
    duration: 'Jan 2021 - Present',
    description: 'Describe your responsibilities, achievements, and the skills you utilized in this role. Include specific projects or initiatives you led.',
    logo: LOGO_URLS[0],
  },
  {
    id: 2,
    title: 'Middle Position',
    company: 'Previous Company',
    duration: 'Jun 2018 - Dec 2020',
    description: 'Outline your key responsibilities and accomplishments. Highlight any awards or recognition received during this period.',
    logo: LOGO_URLS[1],
  },
  {
    id: 3,
    title: 'Junior Position',
    company: 'First Company',
    duration: 'Mar 2016 - May 2018',
    description: 'Detail your role and contributions. Mention skills developed and any significant projects you worked on.',
    logo: LOGO_URLS[2],
  }
];

const WorkExperience: FC = () => {
  return (
    <section id="work" className="py-16 bg-portfolio-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Work Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white p-6 rounded-lg shadow-md flex items-center card-hover"
            >
              {/* LOGO */}
              {exp.logo && (
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-14 h-14 object-cover rounded-full border mr-6 bg-gray-100"
                />
              )}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-portfolio-dark">{exp.title}</h3>
                    <p className="text-portfolio-primary">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 mt-2 md:mt-0">{exp.duration}</span>
                </div>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
