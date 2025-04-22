
import { FC } from "react";
import { School } from "lucide-react";

const educationInfo = [
  {
    type: "Undergraduate Studies",
    logo: "/lovable-uploads/cee19bd0-876b-4f07-9aaf-fc00032ad3d5.png", // You can replace with your UC Merced logo
    school: "University of California Merced",
    degree: "Bachelors in Mechanical Engineering",
    gpa: "3.85",
  },
  {
    type: "Graduate Studies",
    // Example Penn logo (replace with your own if needed)
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/UPenn_shield_with_banner.svg",
    school: "University of Pennsylvania",
    degree: "Masters in Computer Information Technology",
    gpa: "4.0",
  },
];

const Education: FC = () => (
  <section id="education" className="py-16">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-center md:space-x-10">
        <div className="w-full md:w-1/2 mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 flex flex-col items-center card-hover">
            <School className="w-8 h-8 mb-2 text-portfolio-dark" />
            <h2 className="font-bold text-xl mb-4">Education</h2>
            {educationInfo.map((edu, index) => (
              <div key={index} className="w-full mb-6 last:mb-0 flex flex-col items-center">
                <div className="mb-2 text-center font-semibold">{edu.type}</div>
                <img
                  src={edu.logo}
                  alt={edu.school + " logo"}
                  className="mb-2 w-20 h-20 object-contain rounded-md border bg-gray-50 img-hover"
                />
                <div className="text-sm text-left w-full max-w-xs mx-auto">
                  <div>
                    <span className="font-bold">School:</span> {edu.school}
                  </div>
                  <div>
                    <span className="font-bold">Degree:</span> {edu.degree}
                  </div>
                  <div>
                    <span className="font-bold">GPA:</span> {edu.gpa}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;

