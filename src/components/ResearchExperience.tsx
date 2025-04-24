
// Research Experience section with PNG logos (no box, just shadow on PNG)
import { FC } from "react";

// Company logo placeholders (company/organization logo URLs)
const LOGO_URLS = [
  "/Pics/UCM_Logos_Primary.png", // robot (fixed path, remove "public/")
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=facearea&w=64&h=64&q=80", // macbook/code
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=facearea&w=64&h=64&q=80", // macbook
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=facearea&w=64&h=64&q=80", // laptop
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=64&h=64&q=80", // monitor/java
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=facearea&w=64&h=64&q=80", // people/screens
];

const researchExperiences = [
  {
    id: 1,
    title: "Aeroelastic Wing Optimization Research",
    institution: "UC Merced",
    duration: "August 2024 - Present",
    description: "Conducted structural and aeroelastic analysis of wing designs to minimize flutter and improve aerodynamic efficiency using MATLAB and HyperWorks.",
    logo: LOGO_URLS[0],
  },
  {
    id: 2,
    title: "Research Associate",
    institution: "Advanced Labs",
    duration: "May 2020 - Dec 2022",
    description: "Conducted research in the field of AI, collaborated with academic and industry partners.",
    logo: LOGO_URLS[0],
  },
  // {
  //   id: 3,
  //   title: "Junior Investigator",
  //   institution: "Tech Innovation Hub",
  //   duration: "Aug 2018 - Apr 2020",
  //   description: "Participated in research projects focused on robotics and automation technologies.",
  //   logo: LOGO_URLS[2],
  // },
];

const ResearchExperience: FC = () => (
  <section id="research" className="py-16 bg-portfolio-light">
    <div className="container mx-auto px-4">
      <h2 className="section-title mb-12">Research Experience</h2>
      <div className="space-y-8">
        {researchExperiences.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg flex items-center card-hover"
          >
            {item.logo && (
              <img
                src={item.logo}
                alt={`${item.institution} logo`}
                className="mr-6"
                style={{
                  width: "64px",
                  height: "64px",
                  objectFit: "contain",
                  background: "none",
                  border: "none",
                  borderRadius: 0,
                  padding: 0,
                  boxSizing: "border-box",
                  boxShadow: "none",
                }}
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
