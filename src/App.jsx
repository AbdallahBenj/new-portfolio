import Header from "./components/Header.jsx";
import FrontSection from "./components/FrontSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import TestSection from "./components/TestSection.jsx";
import Footer from "./components/Footer.jsx";

import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <>
      <Header />
      <FrontSection id="home" />
      <AboutSection id="about" />
      <SkillsSection id="skills" />
      <ProjectsSection id="projects" />
      <ContactSection id="contact" />
      <TestSection id="test" />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
