import React from 'react'
import { educationData } from '../../../assets/educationData'

function EducationCard({ educationData }) {

    return (
        <div className='secondaryBg rounded-lg flex flex-col m-1 p-2 max-w-[450px] w-[95vw]'>
            <h1 className='text-2xl sm:text-3xl secondaryText'>{educationData.institution}</h1>
            <h1 className='sm:text-xl italic secondaryText'>{educationData.degree}</h1>
            <ul className='list-disc pl-5'>
                {educationData.bullets.map((txt, indx) => (
                    <li
                        key={indx}
                        className='sm:text-lg secondaryText'>{txt}</li>
                ))}
            </ul>
        </div>
    )}


export default function EducationScreen() {
  return (
    <div className="flex flex-col items-center justify-center w-[100vw] min-h-[65vh] primaryBg py-4">
        <h1 className="text-[4rem] sm:text-8xl primaryText mb-3">Education</h1>

        <div className='flex flex-wrap justify-center'>
            {Object.keys(educationData).map((key, indx) => (
                <EducationCard 
                    key={indx}
                    educationData={educationData[key]} />
            ))}
        </div>
    </div>
  )
}
