import AboutMeSection from "./components/homePage/AboutMeSection";
import ContactSection from "./components/homePage/ContactSection";
import EducationScreen from "./components/homePage/EducationScreen";
import ExperienceSection from "./components/homePage/ExperienceSection";
import ProjectSection from "./components/homePage/ProjectSection/ProjectSection";
import SkillsScreen from "./components/homePage/SkillsSection/SkillsScreen";
import TitleScreen from "./components/homePage/TitleSection/TitleScreen";

// import Navbar from "./components/homeLayout/navbar/Navbar";
import Footer from "./components/homeLayout/Footer";
import PrimaryNav from "./components/homeLayout/navbar/PrimaryNav";

export default function Home() {
  return (
    <div>
        <PrimaryNav />
        <TitleScreen />
        <AboutMeSection />
        <ProjectSection />
        <ExperienceSection />
        <EducationScreen />
        <SkillsScreen />
        <ContactSection />
        <Footer />

    </div>
  );
}

// Home.getLayout = function getLayout(home) {
//   return (
//     <homeLayout> {home} </homeLayout>
//   )
// }
