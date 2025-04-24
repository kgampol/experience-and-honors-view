import { FC } from "react";
import { School } from "lucide-react";

const educationInfo = [
  {
type: "Undergraduate Studies",
logo: "/Pics/UCM_Logos_Primary.png", // Fixed path with forward slashes
school: "University of California Merced",
degree: "Bachelors in Mechanical Engineering",
gpa: "3.85",
},
{
type: "Graduate Studies",
logo: "/Pics/stanford-cardinal-s-logo-png_seeklogo-317307.png",
school: "Stanford University",
degree: "Masters in Aero/Astro Engineering",
gpa: "4.0",
},
];

const Education: FC = () => (
  <section id="education" className="py-16 bg-portfolio-light">
    <div className="container mx-auto px-4">
      <h2 className="section-title mb-12">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationInfo.map((edu, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center card-hover border-t-4 border-portfolio-primary"
          >
            <img
              src={edu.logo}
              alt={edu.school + ' logo'}
              className="mb-4 w-24 h-24 object-contain"
              style={{ fontFamily: 'inherit' }}
            />
            <div className="mb-2 text-lg font-semibold text-portfolio-accent tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>{edu.type}</div>
            <div className="text-2xl font-bold text-portfolio-dark mb-1 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
              {edu.school}
            </div>
            <div className="text-lg text-gray-700 mb-2 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
              {edu.degree}
            </div>
            <div className="text-md text-gray-500 mb-2 font-medium">GPA: {edu.gpa}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;

