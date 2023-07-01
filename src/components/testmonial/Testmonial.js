import React from 'react'
import Slider from 'react-slick'
import {RiStarFill} from 'react-icons/ri'
import Title from '../layouts/Title'
import { law, logo } from '../../assets';
export default function Testmonial() {
const settings={
  dots:true,
  infinite:true,
  speed:500,
  SlideToShow:1,
  SliderToScroll:1,

};


  return (
    <section id='testmonial' 
    className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center
       text-center text-5xl">
      <Title   
      title="Client Views"
      des=" Testimonial"
      />
      </div>
      <div className='max-w-6xl max-auto '>
        
        <Slider {...settings}>
          <div className='w-full'>
            <div className='w-full h-[500px] flex justify-between'>
            <div className='w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b]
             p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'> 
            <img  className='h-72 rounded-lg object-cover'
            src={law} alt='uierui'/>
            <div>
              <p className='text-xs uppercase text-designColor tracking-wide mb-2'>Synergy Salse</p>
            
            <h3 className='text-2xl font-bold'>Thamarie</h3>
            <p className='text-base tracking-wide text-gray-500'>Opereartion Officeer</p>
            </div>
            </div>
            <div className='w-[60%] h-full flex flex-col justify-between'>
              <img 
              className='w-[20%]'
              src={logo} alt='logo'/>
              <div className='w-full h-[70%] py-50 bg-gradient-to-r from-[#1e2024] to-[#23272b] 
              rounded-lg shadow-shadowOne p-8 flex flex-col justify-center gap-8' >
                <div className='flex justify-between items-center py-8 border-b-2 border-b-gray-900
                '>
                  <div>
                    <h3 className='text-2xl font-medium tracking-wide '>
                      
                      Inventory Managenment Sysstem
                    </h3>
                    <p className='text-base text-gray-400  mt-3'>
                     
                      Via Upwork 2021- 2022
                    </p>
                  </div>
                  <div className='text-yellow-500 flex gap-1'> 
                    <RiStarFill/>
                    <RiStarFill/>
                    <RiStarFill/>
                    <RiStarFill/>
                    <RiStarFill/>
                  </div>
                </div>
              <p className='text-base font-titleFont text-gray-400 font-medium tracking-wide
              leading-6'> djhksdybdfuidfjhsdfyudfbnsdfuidfnmdvjk nmi8dfi demostration nnhy</p>


              </div>
            </div>
            </div>
          </div>
          {/*<div>
            <h3>2</h3>
  </div>*/}
          
        </Slider>
      </div>




      </section>
        )

}
