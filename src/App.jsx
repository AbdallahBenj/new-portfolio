import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

import FrontSection from "./sections/FrontSection.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import SkillsSection from "./sections/SkillsSection.jsx";
import ProjectsSection from "./sections/ProjectsSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";
import TestSection from "./sections/TestSection.jsx";

import ScrollToTop from "./components/common/ScrollToTop.jsx";

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
