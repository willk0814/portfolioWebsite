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



export default function WorkTechBar({ stack, full }) {
    
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
    <div className='flex flex-row flex-wrap items-start'>
        {react && <div className='secondaryBg w-fit items-start p-1 mr-1 mb-1 rounded-lg'>
            <FaReact size={18} className='secondaryText'/>
        </div>}

        {python && <div className='secondaryBg w-fit items-start p-1 mr-1 mb-1 rounded-lg'>
            <SiPython size={18} className='secondaryText' />
        </div>}

        {reactNative && <div className='secondaryBg w-fit items-start p-1 mr-1 mb-1 rounded-lg'>
            <TbBrandReactNative size={18} className='secondaryText' />
        </div>}

        {mongoDB && <div className='secondaryBg w-fit items-start p-1 mr-1 mb-1 rounded-lg'>
            <SiMongodb size={18} className='secondaryText' />
        </div>}

        {tailwind && <div className='secondaryBg w-fit items-start p-1 mr-1 mb-1 rounded-lg'>
            <SiTailwindcss size={18} className='secondaryText' />
        </div>}

        {JS && <div className='secondaryBg w-fit items-start p-1 mr-1 mb-1 rounded-lg'>
            <IoLogoJavascript size={18} className='secondaryText' />
        </div>}

        {TS && <div className='secondaryBg w-fit items-start p-1 mr-1 mb-1 rounded-lg'>
            <SiTypescript size={18} className='secondaryText' />
        </div>}

        {pyTorch && <div className='secondaryBg w-fit items-start p-1 mr-1 mb-1 rounded-lg'>
            <SiPytorch size={18} className='secondaryText' />
        </div>}

        {tensorFlow && <div className='secondaryBg w-fit items-start p-1 mr-1 mb-1 rounded-lg'>
            <SiTensorflow size={18} className='secondaryText' />
        </div>}

        {numPy && <div className='secondaryBg w-fit items-start p-1 mr-1 mb-1 rounded-lg'>
            <SiNumpy size={18} className='secondaryText' />
        </div>}

        {pandas && <div className='secondaryBg w-fit items-start p-1 mr-1 mb-1 rounded-lg'>
            <SiPandas size={18} className='secondaryText' />
        </div>}

        {jupyter && <div className='secondaryBg w-fit items-start p-1 mr-1 mb-1 rounded-lg'>
            <SiJupyter size={18} className='secondaryText' />
        </div>}
        
        {CSS && <div className='secondaryBg w-fit items-start p-1 mr-1 mb-1 rounded-lg'>
            <IoLogoCss3 size={18} className='secondaryText' />
        </div>}

        {HTML && <div className='secondaryBg w-fit items-start p-1 mr-1 mb-1 rounded-lg'>
            <FaHtml5 size={18} className='secondaryText' />
        </div>}

        {node && <div className='secondaryBg w-fit items-start p-1 mr-1 mb-1 rounded-lg'>
            <FaNodeJs size={18} className='secondaryText' />
        </div>}

        {framer && <div className='secondaryBg w-fit items-start p-1 mr-1 mb-1 rounded-lg'>
            <SiFramer size={18} className='secondaryText' />
        </div>}

        {express &&  <div className='secondaryBg w-fit items-start p-1 mr-1 mb-1 rounded-lg'>
            <SiExpress size={18} className='secondaryText' />
        </div>}

        {mongoose &&  <div className='secondaryBg w-fit items-start p-1 mr-1 mb-1 rounded-lg'>
            <SiMongoose size={18} className='secondaryText' />
        </div>}

        {overflow && <div className='flex w-fit items-start mr-1  mb-1 rounded-lg font-bold'>
            <h2 className='primaryText'>...</h2>
        </div>}
    </div>
  )
}