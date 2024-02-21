import Image from "next/image";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Encryption from "./components/Encryption";


export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll bg-gradient-to-b from-purple-700 to-indigo-900">

      <Header />

      <Body/>

      <Projects/>

      <Skills/>
      
      <Contact/>

      <Encryption/>
      
    </main>
  );
}
