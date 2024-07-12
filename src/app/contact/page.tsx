import { SignupFormDemo } from "@/components/Contactfrom";
export default function Home() {
  return (
    <>
      <div className="h-full *:font-Poppins max-w-7xl mx-auto mt-[6rem]">
        <h1 className="text-4xl text-white md:text-[6rem] font-bold mt-1 leading-none mb-7">
          Contact Me
        </h1>
        <div className="md:flex">
          <SignupFormDemo />
          <div>
            <h2 className="text-4xl md:text-[2rem] font-bold  leading-none mb-7 ">
              Address
            </h2>
            <p>
              H No - A/30, Nishant Colony, Loni Dehat, Ghaziabad, Uttar Pradesh{" "}
            </p>
            <p>Pin Code - 201102</p>
            <p className="flex items-center">
              <img src="/phone.svg" className="w-14 m-3" alt="" /> +91
              7827808430
            </p>
            <p className="flex items-center">
              <img src="/mail.svg" className="w-14 m-3" alt="" />{" "}
              abhaysharma7435@gmail.com
            </p>
            <p className="flex items-center">
              <img src="/Linkedin.svg" className="w-14 m-3" alt="" />{" "}
              <a href="www.linkedin.com/in/abhay74" target="blank">
                Abhay Sharma
              </a>
            </p>
            <p className="flex items-center">
              <img src="/github.svg" className="w-14 m-3" alt="" />{" "}
              <a href="https://github.com/abhay5624" target="blank">
                Abhay Sharma
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
