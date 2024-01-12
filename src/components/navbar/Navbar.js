import React, { useState } from "react"
import{FaFacebook,FaLinkedinIn, FaTwitter}from "react-icons/fa"
import { Link } from "react-scroll"
import {FiMenu} from 'react-icons/fi'
import{ MdClose} from 'react-icons/md'
import { logo } from "../../assets/index"
import { NavLinks } from "../constants"

const Navbar=() =>{


  const[showMenu ,setShowMenu] = useState(false)
          return(
<div className="w-full h-24 sticky top-0 z-50 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-slate-600">
                <div  className=" border border-yellow-500 rounded-lg overflow-hidden" >           
            
            <img src={logo} alt="logo"/>
                </div>
                
                <div class="flex flex-auto">
          <h1 className="text-5xl font-signature ml-2">LawMashira</h1>      
       </div>   
          


                <div>
  <ul className=" hidden mdl:inline-flex  items-center gap-6 lg:gap-10">
{
                
  NavLinks.map(({id,title,link})=>(
<li  className=" text-xl font-normal text-white tracking-wide cursor-pointer
hover:text-designColor duration-300" key={id} > 
<Link 

activeClass="active"
to={link}
spy={true}
smooth={true}
offset={-70}
duration={500}
>
  {title}
  </Link>
</li> 
))}

  </ul>

  <span onClick={()=>setShowMenu(!showMenu)}className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center
  justify-center rounded-full text-designColor cursor-pointer">
    <FiMenu/>
  </span>
  {
    showMenu && (
      <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 
      p-4 scrollbar-hide ">
        <div className="flex flex-col gap-8 py-2 relative ">
         <div className="">
          <img className="w-15 rounded-lg  " src={logo} alt="logo"
          
         />
         <p className="text-4xl font-normal">I am</p>
     <p className="text-5xl font-normal text-designColor mt-2">   Law Mashira</p>

     <p className="text-2xl font-normal text-blue-500 mt-2">a Java Backend Developer</p>

          <p className="text-xl font-normal text-gray-400 mt-2">
          who has practical experience  in writing codes,building and designing software  systems as a freelancer. Currently,  I prefer to 
  work with technologies such as Visual Studio Code,eclipse for Java, ReactJS, MySQL, SpringBoot and Microsoft 
  Visual Studio for C#.
          </p>
         </div>
         <ul className="flex flex-col gap-4">
          {
           NavLinks.map((item)=>(
            <li key={item.id}
             className=" text-xl font-normal text-white tracking-wide cursor-pointer
            hover:text-designColor duration-300"
            >
              <Link
              onClick={()=>setShowMenu(false)}
              activeClass="active"
              to={item.link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >{item.title}</Link></li>
           )) 

           
          }
         </ul>
         <div className='flex flex-col gap-4'>
<h2 className='text-xl uppercase font-titleFont mb-4 text-blue-500'>FIND ME ON
</h2>

<div className='flex gap-4'>
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








         <span 
         onClick={()=>setShowMenu(false)}
         className="absolute top-4 right-4 text-gray-400 hover:text-designColor
         duration-300 text-2xl cursor-pointer ">
          <MdClose/>
         </span>
         </div>
      </div>
    )
  }
 </div>
</div> 
 )
}
export default Navbar