import AboutMeSection from "./components/homePage/AboutMeSection";
import EducationScreen from "./components/homePage/EducationScreen";
import ExperienceSection from "./components/homePage/ExperienceSection";
import ProjectSection from "./components/homePage/ProjectSection/ProjectSection";
import SkillsScreen from "./components/homePage/SkillsSection/SkillsScreen";
import TitleScreen from "./components/homePage/TitleSection/TitleScreen";

export default function Home() {
  return (
    <div>

      {/* Title Section */}
      <TitleScreen />

      {/* About Me */}
      <AboutMeSection />

      {/* Projects Section */}
      <ProjectSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Education Section */}
      <EducationScreen />

      {/* Skills Section */}
      <SkillsScreen />

    </div>
  );
}
