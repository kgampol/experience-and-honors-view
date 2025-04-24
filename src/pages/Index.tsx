import Header from "../components/Header";
import Hero from "../components/Hero";
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";
import TeachingExperience from "../components/TeachingExperience";
import ResearchExperience from "../components/ResearchExperience";
// import HonorsAwards from "../components/HonorsAwards";
import PersonalProjects from "../components/PersonalProjects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add section-hidden to all sections/cards initially
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('section-hidden');
    });
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
      card.classList.add('section-hidden');
    });

    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting && entry.target.classList.contains('section-hidden')) {
          // Stagger delay based on index or data-delay
          const el = entry.target as HTMLElement;
          let delayAttr = el.getAttribute('data-delay');
          let delay = delayAttr ? parseInt(delayAttr, 10) : idx * 120;
          el.style.setProperty('--fade-delay', `${0.9 + delay / 1000}s`);
          el.classList.remove('section-hidden');
          el.classList.add('section-fade-in');
          observer.unobserve(el); // Animate only once
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -80px 0px" });

    sections.forEach((section, idx) => {
      section.setAttribute('data-delay', `${idx * 120}`);
      observer.observe(section);
    });
    cards.forEach((card, idx) => {
      card.setAttribute('data-delay', `${idx * 100}`);
      observer.observe(card);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Education />
      <WorkExperience />
      <TeachingExperience />
      <ResearchExperience />
      {/* <HonorsAwards /> */}
      <PersonalProjects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
