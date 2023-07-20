import React, { useEffect } from 'react'
import './Experience.css'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ExperienceMobile from './ExperienceMobile'

export default function Experience() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                    [...document.getElementsByClassName('Exp1')].forEach(e => {
                        e.classList.toggle('show', entry.isIntersecting)
                    })
                    if (entry.isIntersecting)
                        observer.unobserve(entry.target)
            })
        }, { threshold: 0.5 })

        const exp1 = document.querySelectorAll('#InterSect');
        exp1.forEach((el) => {
            observer.observe(el);
        })
    }, [])
    return (
        <div className='h-[125vh] bg-black'>
            <div className='connectLine'>
            </div>
            <div className='PageNumber'>
                <div className='number'>3</div> <div className='abouttitle'>Experience</div>
            </div>

            {window.innerWidth < 500 ? <ExperienceMobile /> : <div className='flex flex-col items-center h-[100%] justify-around'>
                <div className='ml-5 relative flex-col flex justify-between border rounded-xl p-10 ExpCard w-[50%] h-[35%]'>
                    <div id="InterSect" className='flex flex-col text-5xl absolute left-[-20%] top-[35%] bg-black font-bold'>
                        <div className=' overflow-hidden'>
                            <div id='Exp1' className='Exp1 translate-y-14'>Open Source</div>
                        </div> <br />
                        <div className=' overflow-hidden'>
                            <div id='Exp1' className='Exp1 translate-y-14'>Contributor</div>
                        </div>

                        <a href="/open-source">
                            <div className='text-sm mt-2 text-left flex items-center gap-2 hover:underline'>View <div className='inline'><FaExternalLinkAlt /></div></div>
                        </a>
                    </div>
                    <div className='text-3xl font-extrabold text-slate-400 text-right'>
                        <div className='overflow-hidden'>
                            <div id='Exp1' className='Exp1 -translate-y-10'>Creative Commons</div>
                        </div>
                    </div>

                    <div className='Exp1 flex justify-end relative text-xs w-full'>
                        <div className='w-[60%]'>
                            I have been a part of Creative Commons open source community for over 5 months  where I have contributed to 4 repositories, with over 10+ issues, 6 Pull Requests(4 Merged and 2 Draft), reviewed code from other developers, etc

                        </div>
                    </div>

                    <div className='flex justify-evenly text-slate-500 text-sm '>
                        <div>React</div>
                        <div>TypeScript</div>
                        <div>CSS</div>
                        <div>API</div>
                    </div>
                </div>
                {/* <div  className='ml-5 relative flex-col flex justify-between border rounded-xl p-10 ExpCard w-[50%] h-[35%]'>
                    <div className='flex flex-col text-5xl absolute left-[-20%] top-[35%] bg-black font-bold'>
                        <div className=' overflow-hidden'>
                            <div id='Exp1' className='Exp1 translate-y-14'>Software</div>
                        </div> <br />
                        <div className=' overflow-hidden'>
                            <div id='Exp1' className='Exp1 translate-y-14'>Developer</div> 
                        </div>

                        <div className='text-sm mt-2 text-left flex items-center gap-2 hover:underline'>INTERN <div className='inline'><FaExternalLinkAlt /></div></div></div>
                    <div className='text-3xl font-extrabold text-slate-400 text-right'>
                    <div className='overflow-hidden'>
                        <div id='Exp1' className='Exp1 -translate-y-10'>Graviti</div>
                        </div>
                    </div>

                    <div className='relative text-xs w-full text-right'>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit</div>

                    </div>

                    <div className='flex justify-evenly text-slate-500 text-sm '>
                        <div>React</div>
                        <div>TypeScript</div>
                        <div>CSS</div>
                        <div>API</div>
                    </div>
                </div> */}
            </div>}
        </div>
    )
}
