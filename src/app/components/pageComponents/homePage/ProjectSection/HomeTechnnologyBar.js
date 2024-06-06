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



export default function HomeTechnologyBar({ stack, full }) {
    
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
        {react && <div className='primaryBg w-fit items-start p-2 mr-1 mb-1 rounded-lg'>
            <FaReact size={25} className='primaryText'/>
        </div>}

        {python && <div className='primaryBg w-fit items-start p-2 mr-1 mb-1 rounded-lg'>
            <SiPython size={25} className='primaryText' />
        </div>}

        {reactNative && <div className='primaryBg w-fit items-start p-2 mr-1 mb-1 rounded-lg'>
            <TbBrandReactNative size={25} className='primaryText' />
        </div>}

        {mongoDB && <div className='primaryBg w-fit items-start p-2 mr-1 mb-1 rounded-lg'>
            <SiMongodb size={25} className='primaryText' />
        </div>}

        {tailwind && <div className='primaryBg w-fit items-start p-2 mr-1 mb-1 rounded-lg'>
            <SiTailwindcss size={25} className='primaryText' />
        </div>}

        {JS && <div className='primaryBg w-fit items-start p-2 mr-1 mb-1 rounded-lg'>
            <IoLogoJavascript size={25} className='primaryText' />
        </div>}

        {TS && <div className='primaryBg w-fit items-start p-2 mr-1 mb-1 rounded-lg'>
            <SiTypescript size={25} className='primaryText' />
        </div>}

        {pyTorch && <div className='primaryBg w-fit items-start p-2 mr-1 mb-1 rounded-lg'>
            <SiPytorch size={25} className='primaryText' />
        </div>}

        {tensorFlow && <div className='primaryBg w-fit items-start p-2 mr-1 mb-1 rounded-lg'>
            <SiTensorflow size={25} className='primaryText' />
        </div>}

        {numPy && <div className='primaryBg w-fit items-start p-2 mr-1 mb-1 rounded-lg'>
            <SiNumpy size={25} className='primaryText' />
        </div>}

        {pandas && <div className='primaryBg w-fit items-start p-2 mr-1 mb-1 rounded-lg'>
            <SiPandas size={25} className='primaryText' />
        </div>}

        {jupyter && <div className='primaryBg w-fit items-start p-2 mr-1 mb-1 rounded-lg'>
            <SiJupyter size={25} className='primaryText' />
        </div>}
        
        {CSS && <div className='primaryBg w-fit items-start p-2 mr-1 mb-1 rounded-lg'>
            <IoLogoCss3 size={25} className='primaryText' />
        </div>}

        {HTML && <div className='primaryBg w-fit items-start p-2 mr-1 mb-1 rounded-lg'>
            <FaHtml5 size={25} className='primaryText' />
        </div>}

        {node && <div className='primaryBg w-fit items-start p-2 mr-1 mb-1 rounded-lg'>
            <FaNodeJs size={25} className='primaryText' />
        </div>}

        {framer && <div className='primaryBg w-fit items-start p-2 mr-1 mb-1 rounded-lg'>
            <SiFramer size={25} className='primaryText' />
        </div>}

        {express &&  <div className='primaryBg w-fit items-start p-2 mr-1 mb-1 rounded-lg'>
            <SiExpress size={25} className='primaryText' />
        </div>}

        {mongoose &&  <div className='primaryBg w-fit items-start p-2 mr-1 mb-1 rounded-lg'>
            <SiMongoose size={25} className='primaryText' />
        </div>}

        {overflow && <div className='flex w-fit items-start py-2 mr-1  mb-1 rounded-lg font-bold'>
            <h2 className='secondaryText'>...</h2>
        </div>}
    </div>
  )
}