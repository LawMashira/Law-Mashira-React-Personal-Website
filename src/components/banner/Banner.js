import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebook, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiSpringboot } from "react-icons/si";
import { law } from "../../assets";
import SEO from "../SEO";
const businessData = {
  name: "Lawson Matutu Full Stack Developer",
  address: "Greenbury, Phoenix, 4068",
  city: "Phoenix,Durban",
  region: "KwaZulu-Natal",
  zipCode: "4080",
  phone: "+27641156101"
};

export default function Banner() {
  const [text] = useTypewriter({
    words: [
      "Java Backend Developer",
      "ReactJS Developer",
      "Java Full Stack Developer",
      " Web Developer",
    ],
    loop: true,
    typeSpeed: 1,
    delaySpeed: 2000,
    deleteSpeed: 1,
  });

  return (
    <section
      id="home"
      className="w-full pt-10 pb-20  flex flex-col gap-10 xl:gap-0 md:flex-row items-center
     border-b-[1px] font-titleFont    border-b-black"
    >
  <>
      {/* SEO Component to inject metadata */}
      <SEO
        title="Professional Full Stack Web Development in Phoenix, Durban"
        description="Lawson Matutu offers expert full stack web and software development services in Phoenix, Durban. Specializing in custom websites, software applications, e-commerce, and SEO services."
        keywords="Full stack developer, web development Phoenix, software developer Durban, e-commerce, SEO services, custom software development"
        businessData={businessData}
      />

      {/* Main content of the page */}
      <header className="py-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Lawson Matutu - Full Stack Developer</h1>
        <p className="mt-4 text-lg text-gray-600">Professional web and software development services in Phoenix, Durban.</p>
      </header>

      <main className="p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">About Lawson Matutu</h2>
          <p className="mt-4 text-gray-600">
            I am a full stack software developer based in Phoenix, Durban, with expertise in developing high-quality, scalable websites and applications. My services include front-end and back-end development, e-commerce solutions, and search engine optimization (SEO) to help businesses achieve their digital goals.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Services Offered</h2>
          <ul className="mt-4 text-gray-600 space-y-2">
            <li><strong>Custom Web Development:</strong> Responsive and tailored websites optimized for performance and user engagement.</li>
            <li><strong>Software Development:</strong> Custom applications to improve business operations and productivity.</li>
            <li><strong>SEO Services:</strong> Boost your online visibility with strategic SEO practices for higher search rankings.</li>
            <li><strong>E-commerce Solutions:</strong> Develop and optimize e-commerce sites for seamless shopping experiences.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Technologies I Use</h2>
          <p className="mt-4 text-gray-600">
            My toolkit includes HTML, CSS, JavaScript, React, TypeScript, Node.js, Express, Java, Spring Boot, AWS, and more, ensuring I deliver modern, efficient, and scalable solutions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Why Choose Me?</h2>
          <p className="mt-4 text-gray-600">
            As a local developer in Phoenix, Durban, I understand the unique needs of businesses in the area. I’m committed to delivering exceptional service, ensuring projects are on time, on budget, and exceed expectations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Contact Me</h2>
          <p className="mt-4 text-gray-600">
            Ready to start your project? Reach out for a consultation today. Let’s work together to bring your vision to life.
          </p>
        </section>
      </main>
    </>



      <div className="w-full  lgl:w-1/2  flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className="text-4xl ml-2 text-yellow-400">
            Welcome To My World...
          </h4>
          <h1 className="text-5xl font-bold text-white">
            I'm
            <span className="text-designColor capitalize"> Law Mashira </span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span> {text} </span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="font-bodyFont leading-6 tracking-wide text-xl">
            who has practical experience in writing codes,building and designing
            software systems as a freelancer. Currently, I prefer to work with
            technologies such as Visual Studio Code,Eclipse for Java, ReactJS,
            MySQL, SpringBoot and Microsoft Visual Studio for C#.
          </p>
          <p className="text-xl">
            {" "}
            Lawson is a former classroom practitioner who worked under the
            Ministry of Education, Zimbabwe for more than seven years having
            attained a Diploma in Education in 2015 at Joshua Mqabuko Nkomo
            Polytechnic, an associate college of the University of Zimbabwe but
            he has great passion for software development.
          </p>
        </div>
        <div className="flex  flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
          <div className="">
            <h2 className="text-base uppercase font-titleFont mb-4  text-blue-500">
              FIND ME ON
            </h2>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/law.mashira">
                <span className="icon">
                  <FaFacebook />
                </span>
              </a>
              <a href="https://www.linkedin.com/in/lawson-matutu-520a07216/">
                <span className="icon">
                  <FaLinkedinIn />
                </span>
              </a>

              <a href="http://www.github.com/LawMashira">
                <span className="icon">
                  <FaGithub />
                </span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-base uppercase font-titleFont mb-4 text-blue-500">
              BEST SKILLS ON{" "}
            </h2>

            <div className="flex gap-4">
              <span className="icon">
                <FaReact />
              </span>
              <span className="icon">
                <SiSpringboot />
              </span>

              <span className="icon">
                <SiTailwindcss />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lgl:w-1/2 flex justify-center items-center relative    
      ">
        <img
          className=" rounded border-blue-400 border-[2px] w-[300px] h-[400px] md:h-[500px] md:w-[600px] lgl:w-[500px] lgl:h-[680px] z-10
          
          
          "
          src={law}
          alt="IMG"
        />
       
      </div>
    </section>
  );
}
