import React from 'react'

import { FaJava } from "react-icons/fa";
import { CLine } from 'devicons-react'
import { TbBrandCpp } from "react-icons/tb";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";





import { FaReact, FaHtml5, FaNodeJs } from 'react-icons/fa'
import { SiPython, SiMongodb, SiTailwindcss, 
    SiTypescript, SiPytorch, SiTensorflow, 
    SiNumpy,SiPandas, SiJupyter, SiFramer,
    SiExpress, SiMongoose } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";

export default function SkillsGrid() {
  return (
    <div className='flex flex-wrap items-center justify-center w-[95vw] max-w-[800px]'>
        
        <div className='bg-blue-600 p-3 rounded-lg m-1 flex flex-grow'>
            <h1 className='text-[2rem] text-[#A1E5AB]'>Languages</h1>  
        </div>

        <div className='bg-blue-600 p-2 rounded-lg m-1 flex flex-grow'>
            <SiPython size={35} color='white' />
        </div>

        <div className='bg-blue-600 p-2 rounded-lg m-1 flex flex-grow'>
            <SiTypescript size={35} color='white' />
        </div>

        <div className='bg-blue-600 p-2 rounded-lg m-1 flex flex-grow'>
            <IoLogoJavascript size={35} color='white' />
        </div>

        <div className='bg-blue-600 p-2 rounded-lg m-1 flex flex-grow'>
            <FaJava size={35} color='white' />
        </div>

        <div className='bg-blue-600 p-2 rounded-lg m-1 flex flex-grow'>
            <CLine size={35} color='white' />
        </div>

        <div className='bg-blue-600 p-2 rounded-lg m-1 flex flex-grow'>
            <TbBrandCpp size={35} color='white' />
        </div>

        <div className='bg-blue-600 p-3 rounded-lg m-1 flex flex-grow'>
            <h1 className='text-[2rem] text-[#A1E5AB]'>Front End</h1>  
        </div>

        <div className='bg-blue-600 p-2 rounded-lg m-1 flex flex-grow'>
            <FaReact size={35} color='white' />
        </div>

        <div className='bg-blue-600 p-2 rounded-lg m-1 flex flex-grow'>
            <TbBrandReactNative size={35} color='white' />
        </div>

        <div className='bg-blue-600 p-2 rounded-lg m-1 flex flex-grow'>
            <FaHtml5 size={35} color='white' />
        </div>

        <div className='bg-blue-600 p-2 rounded-lg m-1 flex flex-grow'>
            <IoLogoCss3 size={35} color='white' />
        </div>

        <div className='bg-blue-600 p-2 rounded-lg m-1 flex flex-grow'>
            <TbBrandFramerMotion size={35} color='white' />
        </div>

        <div className='bg-blue-600 p-2 rounded-lg m-1 flex flex-grow'>
            <SiTailwindcss size={35} color='white' />
        </div>

        <div className='bg-blue-600 p-3 rounded-lg m-1 flex flex-grow'>
            <h1 className='text-[2rem] text-[#A1E5AB]'>Back End</h1>  
        </div>

        <div className='bg-blue-600 p-2 rounded-lg m-1 flex flex-grow'>
            <FaNodeJs size={35} color='white' />
        </div>

        <div className='bg-blue-600 p-2 rounded-lg m-1 flex flex-grow'>
            <SiExpress size={35} color='white' />
        </div>

        <div className='bg-blue-600 p-2 rounded-lg m-1 flex flex-grow'>
            <TbBrandNextjs size={35} color='white' />
        </div>

        <div className='bg-blue-600 p-2 rounded-lg m-1 flex flex-grow'>
            <SiMongoose size={35} color='white' />
        </div>

        <div className='bg-blue-600 p-3 rounded-lg m-1 flex flex-grow'>
            <h1 className='text-[2rem] text-[#A1E5AB]'>Databasing</h1>  
        </div>

        <div className='bg-blue-600 p-2 rounded-lg m-1 flex flex-grow'>
            <SiMysql size={35} color='white' />
        </div>

        <div className='bg-blue-600 p-2 rounded-lg m-1 flex flex-grow'>
            <SiMongodb size={35} color='white' />
        </div>

        <div className='bg-blue-600 p-2 rounded-lg m-1 flex flex-grow'>
            <BiLogoPostgresql size={35} color='white' />
        </div>

        <div className='bg-blue-600 p-3 rounded-lg m-1 flex flex-grow'>
            <h1 className='text-[2rem] text-[#A1E5AB]'>AI/ML</h1>  
        </div>

        <div className='bg-blue-600 p-2 rounded-lg m-1 flex flex-grow'>
            <SiNumpy size={35} color='white' />
        </div>

        <div className='bg-blue-600 p-2 rounded-lg m-1 flex flex-grow'>
            <SiPandas size={35} color='white' />
        </div>


        

        
    </div>
  )
}
