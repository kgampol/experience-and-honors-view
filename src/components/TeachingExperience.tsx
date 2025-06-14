// Now supports optional "logo" property for each teaching experience
import { FC } from 'react';

const LOGO_URLS = [
  "/Pics/UCM_Logos_Primary.png",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=facearea&w=64&h=64&q=80",
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=facearea&w=64&h=64&q=80",
];

// Sample teaching experience data
const teachingExperiences = [
  {
    id: 1,
    title: 'Stem Tutor (Physics Kinetics) ',
    institution: 'University of California Merced',
    course: 'Physics I, Physics II',
    duration: 'Aug 2022 - Present',
    description: 'Did everyones physics homework',
    logo: LOGO_URLS[0],
  },
  // {
  //   id: 2,
  //   title: 'Guest Lecturer',
  //   institution: 'College Name',
  //   course: 'Topic Title',
  //   duration: 'Jan 2019 - May 2020',
  //   description: 'Detail the lectures you delivered, the audience, and any special teaching approaches you implemented.',
  //   logo: LOGO_URLS[1],
  // },
  // {
  //   id: 3,
  //   title: 'Teaching Assistant',
  //   institution: 'Educational Institution',
  //   course: 'Subject Area',
  //   duration: 'Sep 2017 - Dec 2018',
  //   description: 'Outline your role in supporting the primary instructor, including grading, tutoring, and other responsibilities.',
  //   logo: LOGO_URLS[2],
  // }
];

const TeachingExperience: FC = () => {
  return (
    <section id="teaching" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Teaching Experience</h2>

        <div className="space-y-8">
          {teachingExperiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white p-6 rounded-lg flex items-center card-hover"
            >
              {exp.logo && (
                <img
                  src={exp.logo}
                  alt={`${exp.institution} logo`}
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
              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-portfolio-dark">{exp.title}</h3>
                  <p className="text-portfolio-primary">{exp.institution}</p>
                  <p className="text-gray-600 italic">{exp.course}</p>
                  <p className="text-gray-500 text-sm">{exp.duration}</p>
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

export default TeachingExperience;
