import React from 'react'
import './OpenSource.css'

export default function OpenSource() {
    return (
        <div className='h-screen text-white'>
            <div id='OSAlign' className='OSAlign h-full'>
                <div className='flex gap-2'>
                    <div className='w-2 bg-[#2C74B3]'></div>
                    <div className='text-4xl OSTitle'>Open Source</div>
                </div>
                <div className='my-5'>

                    <div className='OsSubTitle text-3xl text-center'> GirlScript Summer Of Code</div>
                    <div id="OSCardContainer" className='flex gap-4 my-4'>
                        <div id="OSCardImage" className='w-[20%]'>
                            <img className='' src="https://cdn-images-1.medium.com/max/1200/1*ZfYWXN0zA6TqQQ7wGNJUOg.jpeg"></img>
                        </div>
                        <div id="OSCardContent" className='w-[75%] py-2 px-10 bg-slate-900 rounded'>
                            <div className='text-lg my-3 text-center'>Contribution Stats</div>
                            <div className='OSCardStatsCont flex gap-12 justify-evenly'>
                                <div className='OSCardStats text-xs flex-col flex gap-2'>
                                    <div>Total issues: x</div>
                                    <div>Issues (Ready for work): x</div>
                                    <div>Code Reviews: x</div>
                                </div>
                                <div className='OSCardStats text-xs flex-col flex gap-2'>
                                    <div>Total Pull Requests: x</div>
                                    <div>Pull Requests Merged: x</div>
                                    <div>Total Commits: x</div>
                                </div>
                            </div>

                            <div className='my-4'>Merged PRs:</div>
                            <div id="OSCardContentStack" className='flex justify-evenly text-slate-500 text-sm '>
                                <div>React</div>
                                <div>TypeScript</div>
                                <div>CSS</div>
                                <div>Vue</div>
                                <div>Jekyl</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-5'>

                    <div className='OsSubTitle text-3xl text-center'> Creative Commons</div>
                    <div id="OSCardContainer" className='flex gap-4 my-4'>
                        <div id="OSCardImage" className='w-[20%]'>
                            <img className='' src="https://mirrors.creativecommons.org/presskit/icons/cc.xlarge.png"></img>
                        </div>
                        <div id="OSCardContent" className='w-[75%] py-2 px-10 bg-slate-900 rounded'>
                            <div className='text-lg my-3 text-center'>Contribution Stats</div>
                            <div className='OSCardStatsCont flex gap-12 justify-evenly'>
                                <div className='OSCardStats text-xs flex-col flex gap-2'>
                                    <div>Total issues: x</div>
                                    <div>Issues (Ready for work): x</div>
                                    <div>Code Reviews: x</div>
                                </div>
                                <div className='OSCardStats text-xs flex-col flex gap-2'>
                                    <div>Total Pull Requests: x</div>
                                    <div>Pull Requests Merged: x</div>
                                    <div>Total Commits: x</div>
                                </div>
                            </div>

                            <div className='my-4'>Merged PRs:</div>
                            <div id="OSCardContentStack" className='flex justify-evenly text-slate-500 text-sm '>
                                <div>React</div>
                                <div>TypeScript</div>
                                <div>CSS</div>
                                <div>Vue</div>
                                <div>Jekyl</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
