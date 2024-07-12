import ProjectHero from "@/components/ProjectHero";
import ProjectCard from "@/components/ProjectCard";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
interface Project {
  title: string;
  description: string[];
  img: string[];
  projectLink: string;
  tags: string[];
}

export default function Home() {
  const ProjectsList: Project[] = [
    {
      title: "Prtaxcellent",
      description: [
        "A Freelance Project Maid for a C.A firm Prtaxcellent.",
        "7 pages web build by using React, React-Router-Dom",
        "Style-components for styling a component.",
        "React Sideshow for hero section",
        "Font Awesome for icon use",
      ],
      img: ["./prtaxcellent.png"],
      projectLink: "prtaxcellent.netlify.app",
      tags: [
        "React",
        "style-componets",
        "React-Form",
        "Freelance",
        "React Slideshow",
        "React Router",
        "Font-awesome",
      ],
    },
    {
      title: "Dphi",
      description: [
        "A Challenge schedular website that allow to create delete and edit the challenges.",
        "4 page web",
        "Style-components for styling a component.",
        "Redux for state management",
        "Font Awesome for icon use",
      ],
      img: ["./dphi.png"],
      projectLink: "https://dphi-abhay.netlify.app/",
      tags: ["React", "Redux", "React-Form", "React Router", "Font-awesome"],
    },
    {
      title: "Ecell",
      description: [
        "Work with a team to build the offical web site for ecell nitjsr",
        "React for front end",
        "Node - express.js in backend",
        "ZOD for schema declaration and validation",
        "Font Awesome for icon use",
      ],
      img: ["./ecell.png"],
      projectLink: "https://ecellnitjsr.onrender.com/",
      tags: ["React", "Redux", "React-Form", "React Router", "Font-awesome","Node","Express"],
    },
    {
      title: "Waves",
      description: [
        "Installable music player web application",
        "React for front end",
        "Server worker for offline page display",
        "Style component for design",
        "Font Awesome for icon use",
      ],
      img: ["./waves.png"],
      projectLink: "https://waves-pwa.netlify.app/",
      tags: ["React", "Redux", "React-Form", "React Router", "Font-awesome","PWA", "style-components"],
    },
  ];
  return (
    <>
      <div className="h-full *:font-Poppins w-full">
        <ProjectHero />
        <div className="flex justify-center items-center">
          <InfiniteMovingCards
            items={ProjectsList}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </>
  );
}
