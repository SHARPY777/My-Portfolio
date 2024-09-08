import Image from "next/image";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Skills from "./components/Skills";

import AchievementsSection from "./components/AchievementsSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";


export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll bg-gradient-to-b from-purple-700 to-black">

      <Header />
      <div className="container mt-24 mx-auto px-12 py-4">
      <Body/>

      <AchievementsSection />

      <AboutSection />

      <Skills/>

      <ProjectsSection />

      <Contact/>

      </div>
      
    </main>
  );
}
