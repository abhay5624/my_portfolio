"use client";
import React from "react";
import Link from "next/link";
interface Project {
  title: string;
  description: string[];
  img: string[];
  projectLink: string;
  tags: string[]
}
const ProjectCard = ({ title, description, img, projectLink,tags }: Project) => {
  return (
    <div className="max-w-6xl p-[30px] bg-[#1d1919] flex mb-11 rounded-lg ">
      <div className="w-1/2">
      <h2 className="text-4xl">
        <Link href={projectLink}>{title}</Link>{" "}
      </h2>
      <ul className="p-5 pl-20 pr-20">
        {
          description.map(item => (
            <>
              <li className="p-5">{item}</li>
            </>
          ))
        }
      </ul>
      </div>
      <div className="w-1/2">
       { 
        img.map(item => (
            <>
              <img src={item} alt=""  />
            </>
          ))
        }
        <div className="grid grid-cols-3">
        {
          tags.map(tag => (
            
              <button className="text-[18px] bg-white text-black m-5 p-5 ml-0 pt-3 pb-3 rounded-full">{tag}</button>
            
          ))
          }
          </div>
      </div>
      
    </div>
  );
};

export default ProjectCard;
