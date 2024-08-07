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
    <div
        className='flex flex-wrap items-center justify-center w-[95vw] max-w-[800px]'>
        
        <div
            className='primaryBg border-2 border-[#E8E8E8] p-3 rounded-lg m-1 flex flex-grow'>
            <h1 className='text-[2rem] text-[#A2D0AC]'>Languages</h1>  
        </div>

        <div
            className='primaryBg border-2 border-[#E8E8E8] p-2 rounded-lg m-1 flex flex-grow'>
            <SiPython size={35} className='primaryText' />
        </div>

        <div
            className='primaryBg border-2 border-[#E8E8E8] p-2 rounded-lg m-1 flex flex-grow'>
            <SiTypescript size={35} className='primaryText' />
        </div>

        <div
            className='primaryBg border-2 border-[#E8E8E8] p-2 rounded-lg m-1 flex flex-grow'>
            <IoLogoJavascript size={35} className='primaryText' />
        </div>

        <div
            className='primaryBg border-2 border-[#E8E8E8] p-2 rounded-lg m-1 flex flex-grow'>
            <FaJava size={35} className='primaryText' />
        </div>

        <div
            className='primaryBg border-2 border-[#E8E8E8] p-2 rounded-lg m-1 flex flex-grow'>
            <CLine size={35} className='primaryText' color='#E8E8E8' />
        </div>

        <div
            className='primaryBg border-2 border-[#E8E8E8] p-2 rounded-lg m-1 flex flex-grow'>
            <TbBrandCpp size={35} className='primaryText' />
        </div>

        <div className='primaryBg border-2 border-[#E8E8E8] p-3 rounded-lg m-1 flex flex-grow'>
            <h1 className='text-[2rem] text-[#A2D0AC]'>Front End</h1>  
        </div>

        <div
            className='primaryBg border-2 border-[#E8E8E8] p-2 rounded-lg m-1 flex flex-grow'>
            <FaReact size={35} className='primaryText' />
        </div>

        <div
            className='primaryBg border-2 border-[#E8E8E8] p-2 rounded-lg m-1 flex flex-grow'>
            <TbBrandReactNative size={35} className='primaryText' />
        </div>

        <div
            className='primaryBg border-2 border-[#E8E8E8] p-2 rounded-lg m-1 flex flex-grow'>
            <FaHtml5 size={35} className='primaryText' />
        </div>

        <div
            className='primaryBg border-2 border-[#E8E8E8] p-2 rounded-lg m-1 flex flex-grow'>
            <IoLogoCss3 size={35} className='primaryText' />
        </div>

        <div
            className='primaryBg border-2 border-[#E8E8E8] p-2 rounded-lg m-1 flex flex-grow'>
            <TbBrandFramerMotion size={35} className='primaryText' />
        </div>

        <div
            className='primaryBg border-2 border-[#E8E8E8] p-2 rounded-lg m-1 flex flex-grow'>
            <SiTailwindcss size={35} className='primaryText' />
        </div>

        <div className='primaryBg border-2 border-[#E8E8E8] p-3 rounded-lg m-1 flex flex-grow'>
            <h1 className='text-[2rem] text-[#A2D0AC]'>Back End</h1>  
        </div>

        <div
            className='primaryBg border-2 border-[#E8E8E8] p-2 rounded-lg m-1 flex flex-grow'>
            <FaNodeJs size={35} className='primaryText' />
        </div>

        <div
            className='primaryBg border-2 border-[#E8E8E8] p-2 rounded-lg m-1 flex flex-grow'>
            <SiExpress size={35} className='primaryText' />
        </div>

        <div
            className='primaryBg border-2 border-[#E8E8E8] p-2 rounded-lg m-1 flex flex-grow'>
            <TbBrandNextjs size={35} className='primaryText' />
        </div>

        <div
            className='primaryBg border-2 border-[#E8E8E8] p-2 rounded-lg m-1 flex flex-grow'>
            <SiMongoose size={35} className='primaryText' />
        </div>

        <div className='primaryBg border-2 border-[#E8E8E8] p-3 rounded-lg m-1 flex flex-grow'>
            <h1 className='text-[2rem] text-[#A2D0AC]'>Databasing</h1>  
        </div>

        <div
            className='primaryBg border-2 border-[#E8E8E8] p-2 rounded-lg m-1 flex flex-grow'>
            <SiMysql size={35} className='primaryText' />
        </div>

        <div
            className='primaryBg border-2 border-[#E8E8E8] p-2 rounded-lg m-1 flex flex-grow'>
            <SiMongodb size={35} className='primaryText' />
        </div>

        <div
            className='primaryBg border-2 border-[#E8E8E8] p-2 rounded-lg m-1 flex flex-grow'>
            <BiLogoPostgresql size={35} className='primaryText' />
        </div>

        <div className='primaryBg border-2 border-[#E8E8E8] p-3 rounded-lg m-1 flex flex-grow'>
            <h1 className='text-[2rem] text-[#A2D0AC]'>AI/ML</h1>  
        </div>

        <div
            className='primaryBg border-2 border-[#E8E8E8] p-2 rounded-lg m-1 flex flex-grow'>
            <SiNumpy size={35} className='primaryText' />
        </div>

        <div
            className='primaryBg border-2 border-[#E8E8E8] p-2 rounded-lg m-1 flex flex-grow'>
            <SiPandas size={35} className='primaryText' />
        </div>
    </div>
  )
}
