
// New section: Research Experience with logos
import { FC } from "react";

const LOGO_URLS = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=facearea&w=64&h=64&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=facearea&w=64&h=64&q=80",
];

// Example research entries
const researchExperiences = [
  {
    id: 1,
    title: "Lead Researcher",
    institution: "Institute of Science",
    duration: "Jan 2023 - Present",
    description: "Led a team on a funded research initiative, resulting in multiple publications and conference talks.",
    logo: LOGO_URLS[0],
  },
  {
    id: 2,
    title: "Research Associate",
    institution: "Advanced Labs",
    duration: "May 2020 - Dec 2022",
    description: "Conducted research in the field of AI, collaborated with academic and industry partners.",
    logo: LOGO_URLS[1],
  },
];

const ResearchExperience: FC = () => (
  <section id="research" className="py-16 bg-portfolio-light">
    <div className="container mx-auto px-4">
      <h2 className="section-title mb-12">Research Experience</h2>
      <div className="space-y-8">
        {researchExperiences.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-md flex items-center card-hover"
          >
            {item.logo && (
              <img
                src={item.logo}
                alt={`${item.institution} logo`}
                className="w-14 h-14 object-cover rounded-full border mr-6 bg-gray-100"
              />
            )}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-portfolio-dark">{item.title}</h3>
                  <p className="text-portfolio-primary">{item.institution}</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0">{item.duration}</span>
              </div>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResearchExperience;
