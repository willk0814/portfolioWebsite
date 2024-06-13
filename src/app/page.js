import AboutMeSection from "./components/pageComponents/homePage/AboutMeSection";
import ContactSection from "./components/pageComponents/homePage/ContactSection";
import EducationScreen from "./components/pageComponents/homePage/EducationScreen";
import ExperienceSection from "./components/pageComponents/homePage/ExperienceSection";
import ProjectSection from "./components/pageComponents/homePage/ProjectSection/ProjectSection";
import SkillsScreen from "./components/pageComponents/homePage/SkillsSection/SkillsScreen";
import TitleScreen from "./components/pageComponents/homePage/TitleSection/TitleScreen";

// import Navbar from "./components/homeLayout/navbar/Navbar";
import Footer from "./components/layoutComponents/homeLayout/Footer";
import PrimaryNav from "./components/layoutComponents/homeLayout/navbar/PrimaryNav";

export default function Home() {
  return (
    <div>
        <PrimaryNav />
        <TitleScreen />
        <ProjectSection />
        <ExperienceSection />
        <EducationScreen />
        <SkillsScreen />
        <AboutMeSection />
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
