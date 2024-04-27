import React from 'react'
import { educationData } from '@/app/assets/educationData'

function EducationCard({ educationData }) {

    return (
        <div className='bg-[#E8E8E8] rounded-lg flex flex-col m-1 p-2 max-w-[450px] w-[95vw]'>
            <h1 className='text-2xl sm:text-3xl text-blue-600'>{educationData.institution}</h1>
            <h1 className='sm:text-xl italic text-blue-600'>{educationData.degree}</h1>
            <ul className='list-disc pl-4'>
                {educationData.bullets.map((txt, indx) => (
                    <li
                        key={indx}
                        className='sm:text-lg text-blue-600'>{txt}</li>
                ))}
            </ul>
        </div>
    )}


export default function EducationScreen() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[65vh] bg-blue-600 py-4">
        <h1 className="text-[4rem] sm:text-8xl text-[#E8E8E8] mb-3">Education</h1>

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
