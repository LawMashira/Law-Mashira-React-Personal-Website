import React from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import{FaFacebook,FaLinkedinIn, FaReact, FaTwitter}from "react-icons/fa"
import{SiTailwindcss,SiSpringboot} from "react-icons/si"

export default function LeftBanner() {
                const [text]=useTypewriter({
                  words:["Java Backend Developer","React JS Developer", "Java Full Stack Developer"],
                  loop:true,
                  typeSpeed:1,
                  delaySpeed:2000,
                  deleteSpeed:1,
                });
                
                  return (
                    <section id="home" className="w-full  py-20 flex items-center border-b-[1px]
                  font-titleFont    border-b-black">
                
                
                
                <div className=' w-full  lgl:w-1/2  flex flex-col gap-20'>
                
                <div className="flex flex-col gap-5">
                  <h4 className="text-5xl ml-2 text-yellow-400">HALLO...</h4>
                  <h1 className="text-6xl font-bold text-white">I'm 
                    <span className="text-designColor capitalize">   Law</span>
                  </h1>
                  <h2 className="text-4xl font-bold text-white">
                    a <span> {text} </span> 
                    <Cursor
                    cursorBlinking="false"
                    cursorStyle="|"
                    cursorColor="#ff014f"
                    />  
                    </h2>
                  <p className="font-bodyFont leading-6 tracking-wide text-2xl">
                  who has more than two years experience  of writing codes,building and designing software  systems as a freelancer. Currently,  I prefer to 
                  work with technologies and tools which include Node JS, eclipse for Java,React JS, MySQL, SpringBoot and Microsoft 
                  Visual Studio for C#.   
                </p>
                </div>
                <div className="flex justify-between">
                <div className="flex flex-col ">
                  <h1 className='text-base uppercase font-titleFont mb-4'>FIND ME ON</h1>
                <div className="flex gap-4">
                  <span className="icon">
                <FaFacebook/>
                  </span>
                  <span className="icon">
                <FaLinkedinIn/>
                  </span>
                
                  <span className="icon">
                <FaTwitter/>
                  </span>
                  </div>
                
                  </div>
                
                <div >
                <h2 className="text-base uppercase font-titleFont mb-4">BEST SKILLS ON </h2>
                
                <div className="flex gap-4">
                  <span className="icon">
                    <FaReact/>
                  </span>
                  <span className="icon">
                    <SiSpringboot/>
                  </span>
                
                  <span className="icon">
                    <SiTailwindcss/>
                  </span>
                  </div>
                  
                </div>
                </div>
                </div>
                    
                      <div className='w-1/2'></div>
                    </section>
                  )
                }
                
              

