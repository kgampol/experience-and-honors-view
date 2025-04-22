
import Header from "../components/Header";
import Hero from "../components/Hero";
import WorkExperience from "../components/WorkExperience";
import TeachingExperience from "../components/TeachingExperience";
import HonorsAwards from "../components/HonorsAwards";
import PersonalProjects from "../components/PersonalProjects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Function to handle section animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a small delay for a staggered animation effect
          setTimeout(() => {
            entry.target.classList.add('section-fade-in');
          }, 100);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -100px 0px" });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });

    // Also observe card elements for staggered animations
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach((card, index) => {
      // Add a data attribute for staggered animation
      card.setAttribute('data-delay', `${index * 100}`);
      observer.observe(card);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
      cards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WorkExperience />
      <TeachingExperience />
      <HonorsAwards />
      <PersonalProjects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
