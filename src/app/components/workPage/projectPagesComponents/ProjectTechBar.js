'use client'

import React, { useState, useEffect } from 'react'

import { FaReact, FaHtml5, FaNodeJs } from 'react-icons/fa'
import { SiPython, SiMongodb, SiTailwindcss, 
    SiTypescript, SiPytorch, SiTensorflow, 
    SiNumpy,SiPandas, SiJupyter, SiFramer,
    SiExpress, SiMongoose} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";



export default function ProjectTechBar({ stack, full }) {
    
    // State Vars for Technologies
    const [python, setPython] = useState(false)
    const [JS, setJS] = useState(false)
    const [TS, setTS] = useState(false)
    const [tailwind, setTailwind] = useState(false)
    const [react, setReact] = useState(false)
    const [reactNative, setReactNative] = useState(false)
    const [express, setExpress] = useState(false)
    const [mongoDB, setMongoDB] = useState(false)
    const [mongoose, setMongoose] = useState(false)
    const [pyTorch, setPyTorch] = useState(false)
    const [tensorFlow, setTensorFlow] = useState(false)
    const [numPy, setNumPy] = useState(false)
    const [pandas, setPandas] = useState(false)
    const [jupyter, setJupyter] = useState(false)
    const [HTML, setHTML] = useState(false)
    const [CSS, setCSS] = useState(false)
    const [node, setNode] = useState(false)
    const [framer, setFramer] = useState(false)
    const [overflow, setOverflow] = useState(false)

    useEffect(() => {
        // Create a copy of the stack
        let displayStack = [...stack];
    
        // Check if we want the full stack
        if (!full && stack.length > 2) {
            // Construct abbreviated stack
            displayStack = stack.slice(0, 4);
            displayStack.push('overflow');
        }
    
        // Reset all state variables
        setPython(false);
        setJS(false);
        setTS(false);
        setTailwind(false);
        setReact(false);
        setReactNative(false);
        setExpress(false);
        setMongoDB(false);
        setMongoose(false);
        setPyTorch(false);
        setTensorFlow(false);
        setNumPy(false);
        setPandas(false);
        setJupyter(false);
        setHTML(false);
        setCSS(false);
        setNode(false);
        setFramer(false);
        setOverflow(false);
    
        // Set state variables based on displayStack
        for (const technology of displayStack) {
            switch (technology) {
                case 'JS':
                    setJS(true);
                    break;
                case 'TS':
                    setTS(true);
                    break;
                case 'tailwind':
                    setTailwind(true);
                    break;
                case 'ReactNative':
                    setReactNative(true);
                    break;
                case 'React':
                    setReact(true);
                    break;
                case 'Express':
                    setExpress(true);
                    break;
                case 'Mongoose':
                    setMongoose(true);
                    break;
                case 'MongoDB':
                    setMongoDB(true);
                    break;
                case 'Python':
                    setPython(true);
                    break;
                case 'PyTorch':
                    setPyTorch(true);
                    break;
                case 'TensorFlow':
                    setTensorFlow(true);
                    break;
                case 'NumPy':
                    setNumPy(true);
                    break;
                case 'Pandas':
                    setPandas(true);
                    break;
                case 'Jupyter':
                    setJupyter(true);
                    break;
                case 'CSS':
                    setCSS(true);
                    break;
                case 'HTML':
                    setHTML(true);
                    break;
                case 'node':
                    setNode(true);
                    break;
                case 'framer':
                    setFramer(true);
                    break;
                case 'overflow':
                    setOverflow(true);
                    break;
                default:
                    console.log('Unrecognized technology: ', technology);
            }
        }
    }, [stack, full]);
  return (
    <div className='flex flex-row flex-wrap items-start space-x-1'>
        {react && <div className='bg-blue-600 w-fit items-start p-2  rounded-lg'>
            <FaReact size={30} color='#E8E8E8'/>
        </div>}

        {python && <div className='bg-blue-600 w-fit items-start p-2  rounded-lg'>
            <SiPython size={30} color='#E8E8E8' />
        </div>}

        {reactNative && <div className='bg-blue-600 w-fit items-start p-2  rounded-lg'>
            <TbBrandReactNative size={30} color='#E8E8E8' />
        </div>}

        {mongoDB && <div className='bg-blue-600 w-fit items-start p-2  rounded-lg'>
            <SiMongodb size={30} color='#E8E8E8' />
        </div>}

        {tailwind && <div className='bg-blue-600 w-fit items-start p-2  rounded-lg'>
            <SiTailwindcss size={30} color='#E8E8E8' />
        </div>}

        {JS && <div className='bg-blue-600 w-fit items-start p-2  rounded-lg'>
            <IoLogoJavascript size={30} color='#E8E8E8' />
        </div>}

        {TS && <div className='bg-blue-600 w-fit items-start p-2  rounded-lg'>
            <SiTypescript size={30} color='#E8E8E8' />
        </div>}

        {pyTorch && <div className='bg-blue-600 w-fit items-start p-2  rounded-lg'>
            <SiPytorch size={30} color='#E8E8E8' />
        </div>}

        {tensorFlow && <div className='bg-blue-600 w-fit items-start p-2  rounded-lg'>
            <SiTensorflow size={30} color='#E8E8E8' />
        </div>}

        {numPy && <div className='bg-blue-600 w-fit items-start p-2  rounded-lg'>
            <SiNumpy size={30} color='#E8E8E8' />
        </div>}

        {pandas && <div className='bg-blue-600 w-fit items-start p-2  rounded-lg'>
            <SiPandas size={30} color='#E8E8E8' />
        </div>}

        {jupyter && <div className='bg-blue-600 w-fit items-start p-2  rounded-lg'>
            <SiJupyter size={30} color='#E8E8E8' />
        </div>}
        
        {CSS && <div className='bg-blue-600 w-fit items-start p-2  rounded-lg'>
            <IoLogoCss3 size={30} color='#E8E8E8' />
        </div>}

        {HTML && <div className='bg-blue-600 w-fit items-start p-2  rounded-lg'>
            <FaHtml5 size={30} color='#E8E8E8' />
        </div>}

        {node && <div className='bg-blue-600 w-fit items-start p-2  rounded-lg'>
            <FaNodeJs size={30} color='#E8E8E8' />
        </div>}

        {framer && <div className='bg-blue-600 w-fit items-start p-2  rounded-lg'>
            <SiFramer size={30} color='#E8E8E8' />
        </div>}

        {express &&  <div className='bg-blue-600 w-fit items-start p-2  rounded-lg'>
            <SiExpress size={30} color='#E8E8E8' />
        </div>}

        {mongoose &&  <div className='bg-blue-600 w-fit items-start p-2  rounded-lg'>
            <SiMongoose size={30} color='#E8E8E8' />
        </div>}

        {overflow && <div className='flex w-fit items-start py-2   rounded-lg font-bold'>
            <h2 className='text-[#E8E8E8]'>...</h2>
        </div>}
    </div>
  )
}