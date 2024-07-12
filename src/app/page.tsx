import Image from "next/image";
import {HeroSection} from "@/components/HeroSection"
import { Navbar } from "@/components/Navbar";
import { HeroScrollDemo } from "@/components/SkillSetsandEducation"
import {TabsDemo} from "@/components/Projects"
import ContactMe from "@/components/ContactMe";
import Achivement from "@/components/Achivement";
export default function Home() {
  return (
    <>
      <div className="h-full *:font-Poppins">
         <HeroSection />
        <HeroScrollDemo />
        <TabsDemo />
        <Achivement />
        <ContactMe />
      </div>
       
    </>
  );
}
