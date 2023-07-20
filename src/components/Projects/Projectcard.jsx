import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import navIcon2 from './git.svg'

export default function Projectcard(props) {

    return (
        <div className='wrapperCard relative overflow-hidden'>

            <div className=''>
                <img src={props.link} alt="1" />
            </div>
            <div className='desctrans absolute' id={"desc" + props.id}></div>
            <div className='descSub relative flex flex-col justify-between' id={"descrip" + props.id}>

                <div className=' text-[2vw] flex flex-col'>
                    <div className='projectName text-[.8em] '>{props.name}</div>
                    <div className='projectDescription text-[.6em]'><small>
                        {props.desc}
                    </small></div>
                    <div className='projectStack text-[.5em] flex'>
                        Tech Stack : {props.stack.map(e => {
                            return <div className='px-1 hover:text-stone-400 hover:cursor-pointer'>{e}</div>
                        })}
                    </div>
                </div>
                <div className='flex text-[2vw] gap-2'>
                    <a href={props.git} className=' no-underline text-white '>
                        <div className='projectButton border p-1 flex gap-1 hover:bg-white  git hover:cursor-pointer  no-underline hover:text-black'>
                            <div className='text-[.5em] projectButtonText'>Code</div>
                            <img className='w-[.6em] projectButtonIcon' src={navIcon2} /></div>
                    </a>
                    <a href={props.live} className=' no-underline text-white '>
                        <div className='projectButton border p-1 flex gap-1 hover:bg-white  git hover:cursor-pointer  no-underline hover:text-black'>
                            <div className='text-[.5em]  projectButtonText'>Live</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    )
}
