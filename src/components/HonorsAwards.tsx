
import { FC } from 'react';
import { Award } from 'lucide-react';

// Sample honors and awards data
const awards = [
  {
    id: 1,
    title: 'Professional Achievement Award',
    organization: 'Industry Association',
    year: '2022',
    description: 'Recognition for outstanding contribution to the field and exceptional leadership.',
  },
  {
    id: 2,
    title: 'Research Excellence Prize',
    organization: 'Research Foundation',
    year: '2020',
    description: 'Awarded for groundbreaking research and publication in a prestigious journal.',
  },
  {
    id: 3,
    title: 'Teaching Distinction Award',
    organization: 'University Name',
    year: '2019',
    description: 'Recognized for innovative teaching methods and exceptional student outcomes.',
  },
  {
    id: 4,
    title: 'Community Service Medal',
    organization: 'Local Government',
    year: '2018',
    description: 'Honored for dedicated volunteer work and positive impact on the community.',
  }
];

const HonorsAwards: FC = () => {
  return (
    <section id="honors" className="py-16 bg-portfolio-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Honors & Awards</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award) => (
            <div 
              key={award.id}
              className="bg-white p-6 rounded-lg shadow-md flex items-start card-hover"
            >
              <div className="mr-4 mt-1">
                <Award className="w-8 h-8 text-portfolio-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-portfolio-dark">{award.title}</h3>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-portfolio-primary">{award.organization}</p>
                  <span className="text-gray-500 text-sm">{award.year}</span>
                </div>
                <p className="text-gray-700">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HonorsAwards;
