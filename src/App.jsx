import Header from "./components/Header.jsx";
import FrontSection from "./components/FrontSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";

function App() {
  return (
    <>
      <Header />
      <FrontSection id="home" />
      <AboutSection id="about" />
      <SkillsSection id="skills" />
    </>
  );
}

export default App;
