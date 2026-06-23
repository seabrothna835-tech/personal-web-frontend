import React from 'react'
import { Flex, Progress, Slider, Typography } from 'antd';

function Skills() {
    const classNames = {
    root: 'demo-progress-root',
    rail: 'demo-progress-rail',
    track: 'demo-progress-track',
    };
    const stylesFn = info => {
    const percent = info?.props?.percent ?? 0;
    const hue = 200 - (200 * percent) / 100;
    return {
        track: {
        backgroundImage: `
            linear-gradient(
            to right,
            hsla(${hue}, 85%, 65%, 1),
            hsla(${hue + 30}, 90%, 55%, 0.95)
            )`,
        borderRadius: 8,
        transition: 'all 0.3s ease',
        },
        rail: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 8,
        },
    };
    };
    const skillPercent =[
        {name:"html",percent:80},
        {name:"css",percent:50},
        {name:"java",percent:70},
        {name:"javascript",percent:20},
        {name:"react js",percent:60},
        {name:"Database",percent:80},
    ];
    return (
        <div className='pt-20'>
            <p className='uppercase text-3xl text-white font-bold text-center '>my skills</p>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
                <div className='ml-[20%]'>
                    {skillPercent.map((per,key)=>(
                        <div key={key} className='mt-4'>
                            <p className='text-md text-white uppercase'>{per.name}</p>
                            <Progress classNames={classNames} styles={stylesFn} percent={per.percent} />
                        </div>
                    ))}
                </div>
                <div className='mt-10 mr-[20%] grid grid-cols-2 lg:grid-cols-3 gap-2 ml-[20%]'>
                    {skillPercent.map((per,key)=>(
                        <div key={key}>
                            <Progress type="dashboard" steps={10} percent={per.percent} railColor="rgba(0, 0, 0, 0.06)" strokeWidth={20} />
                            <p className='text-center text-white uppercase'>{per.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills