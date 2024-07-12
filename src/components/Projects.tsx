"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
export function TabsDemo() {
  const tabs = [
    {
      title: "PrTaxcellent",
      value: "PrTaxcellent",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#151a3f] to-[#151a3fc2]">
          <p>PrTaxcellent (Freelance)</p>
          <Image
          src={`/prtaxcellent.png`}
          alt="prtaxcellent"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
        </div>
      ),
    },
    {
      title: "Dphi",
      value: "https://dphi-abhay.netlify.app/",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#0e3021] to-[#0e3021b8]">
          <p>Dphi Challenge Creater</p>
          <Image
          src="/dphi.png"
          alt="Dphi image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
        </div>
      ),
    },
    {
      title: "Waves",
      value: "https://waves-pwa.netlify.app/",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#391237] to-[#391237b7]">
          <p>PWA - Waves</p>
          <Image
          src="/waves.png"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
        </div>
      ),
    },
    {
      title: "Ecell",
      value: "https://ecellnitjsr.onrender.com/",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#121239] to-[#121239bb]">
          <p>Ecell - NITJSR</p>
          <Image
          src="/ecell.png"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-7xl mx-auto w-full  items-start justify-start my-40">
      <h1 className="text-4xl font-semibold text-white mb-6">
               My <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none mb-7">
               Projects
              </span>
            </h1>
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
