import React, { useEffect } from 'react'
import './Experience.css'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function ExperienceMobile() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                [...document.getElementsByClassName('Exp1')].forEach(e => {
                    e.classList.toggle('show', entry.isIntersecting)
                    if (entry.isIntersecting)
                        observer.unobserve(entry.target)
                })
            })
        }, { threshold: 1 })

        const exp1 = document.querySelectorAll('#InterSect');
        exp1.forEach((el) => {
            observer.observe(el);
        })
        const exp2 = document.querySelectorAll('#InterSect2');
        exp2.forEach((el) => {
            observer.observe(el);
        })
    }, [])
    return (
        <div className='flex flex-col items-center pt-[200px] h-full justify-evenly'>
            <div className='ml-5 relative justify-between rounded-xl p-2 ExpCard w-[80%]' id="InterSect">
                <div  className=' text-5xl bg-black font-bold items-baseline '>
                    <div className=' overflow-hidden flex gap-2'>
                        <div id='Exp1' className='Exp1 translate-y-14 text-xl'>Open Source</div>
                        <a href="/open-source">
                            <div className='text-xs mt-2 flex items-center gap-2 hover:underline'><div className='Exp1 inline translate-y-14'><FaExternalLinkAlt /></div></div>
                        </a>
                    </div>


                </div>
                <div className='border p-3 rounded-lg'>
                    <div className='text-3xl font-extrabold text-slate-400 text-right'>
                        <div className='overflow-hidden'>
                            <div id='Exp1' className='Exp1 -translate-y-10 text-sm mb-1'>Creative Commons</div>
                        </div>
                    </div>

                    <div className='relative text-[10px] w-full my-3'>
                        <div id='Exp1' className='Exp1'>I have been a part of Creative Commons open source community for over 5 months where I have contributed to 4 repositories, with over 10+ issues, 6 Pull Requests(4 Merged and 2 Draft), reviewed code from other developers, etc.</div>

                    </div>

                    <div className='flex justify-evenly text-slate-500 text-sm '>
                        <div>HTML</div>
                        <div>TypeScript</div>
                        <div>Vue</div>
                        <div>JS</div>
                    </div>
                </div>
            </div>
            <div className='ml-5 relative justify-between rounded-xl p-2 ExpCard w-[80%]' id="InterSect2">
                <div className=' text-5xl bg-black font-bold items-baseline '>
                    <div className=' overflow-hidden flex gap-2'>
                        <div id='Exp1' className='Exp1 translate-y-14 text-xl mb-1'>Software  Developer Intern</div>
                    </div>


                </div>
                <div className='border p-3 rounded-lg'>
                    <div className='text-3xl font-extrabold text-slate-400 text-right'>
                        <div className='overflow-hidden'>
                            <div id='Exp1' className='Exp1 -translate-y-10 text-sm'>Graviti</div>
                        </div>
                    </div>

                    <div className='relative text-[10px] w-full my-3'>
                        <div id='Exp1' className='Exp1 '>

                        • Developed a Live Order Tracking System on Google Maps through GoogleMaps API which is used by 100+ Shippers, Transporters and Customers to track goods through out the shipping process.
                        <br />
                        • Created an embedded PDF and Image viewer,inspired by Firefox,using the Pdf.js library specifically tailored for viewing Confirmation and Payment Receipts.
                        <br />
                        • Designed multiple website components, implemented responsiveness and improved the overall user interface and experience by 80%.
                        </div>
                    </div>

                    <div className='flex justify-evenly text-slate-500 text-sm '>
                        <div>React</div>
                        <div>TypeScript</div>
                        <div>API</div>
                        <div>Next</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
