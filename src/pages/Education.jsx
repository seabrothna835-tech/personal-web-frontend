import React from 'react'
import { MdOutlineDateRange } from "react-icons/md";

function Education() {
    const educations = [
        {icon:<MdOutlineDateRange/> ,date: "2024-Present", school:"University",desc:"Study at Royal University of Phnom Penh(RUPP) on major of computer science"},
        {icon:<MdOutlineDateRange/> ,date: "2019-2024", school:"High School",desc:"Graduated at Hun sen takok High School"},
        {icon:<MdOutlineDateRange/> ,date: "2013-2019", school:"Primary School",desc:"Graduated at Svay OukDom primary school"},
    ];
    const exps = [
        {icon:<MdOutlineDateRange/> ,date: "2024-Present",place:"ppap",desc:"I am working at PPAP since I was Year one at RUPP"},
        {icon:<MdOutlineDateRange/> ,date: "2025-Present",place:"ETEC",desc:"at hear, I am Learning about C/C++ , Java, HTML, CSS, JAVASCRIPT"}
    ];
    const [stepsCount, setStepsCount] = React.useState(5);
    const [stepsGap, setStepsGap] = React.useState(7);
    return (
        <div className='pt-20'>
            <h1 className="uppercase text-4xl text-center font-bold text-white">My journey</h1>
            <div className='mr-[10%] ml-[10%]'>
                <h1 className='uppercase pt-10 pb-5 text-3xl text-white font-bold'>education</h1>
                {educations.map((edu, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden border-3 border-white rounded-2xl p-5 group cursor-pointer"
                    >
                        {/* Animated Background */}
                        <span className="absolute inset-0 bg-blue-300 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                        <div className="relative z-10">
                            <div className='flex items-center gap-3 font-bold text-2xl'>
                                <p className='text-blue-700'>{edu.icon}</p>
                                <p >{edu.date}</p>
                            </div>
                            <p className='text-3xl font-bold ml-8'>{edu.school}</p>
                            <p className='text-lg ml-8'>{edu.desc}</p>
                        </div>
                    </div>
                ))}
                <h1 className='uppercase pt-10 pb-5 text-3xl text-white font-bold'>experience & course</h1>
                {exps.map((exp, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden border-3 border-white rounded-2xl p-5 group cursor-pointer"
                    >
                        {/* Animated Background */}
                        <span className="absolute inset-0 bg-blue-300 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                        <div className="relative z-10">
                            <div className='flex items-center gap-3 font-bold text-2xl'>
                                <p className='text-blue-700'>{exp.icon}</p>
                                <p >{exp.date}</p>
                            </div>
                            <p className='text-3xl font-bold ml-8 uppercase'>{exp.place}</p>
                            <p className='text-lg ml-8 capitalize'>{exp.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education