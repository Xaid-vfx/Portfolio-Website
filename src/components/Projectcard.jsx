import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Projectcard() {



    const [button1, setbutton1] = useState(true);
    const [button2, setbutton2] = useState(true);
    const [button3, setbutton3] = useState(true);

    const [check1, setcheck1] = useState(true);
    const [check2, setcheck2] = useState(true);
    const [check3, setcheck3] = useState(true);




    return (
        <>

            {/* project 1 */}
            <div className='full'>
                {window.screen.availWidth > 760 ?
                    (<div className='projectx' id='project1'>
                        <h4>CookBook</h4>
                        <p>August, 2022</p>

                    </div>) :
                    (check1 ? (
                        <div className='projectx'  onClick={() => {

                            setcheck1(false);

                        }} id='project1'>
                            <h4>CookBook</h4>
                            <p>August, 2022</p>

                        </div>
                    ) : (<div className='projectx' id='project12'>

                        <p onClick={() => {
                            setcheck1(true);

                        }}><small >The objective of this project was to create a Full-Stack Web app using ReactJS and Firebase. The project displays a list of recipes displayed from the firebase database.
                                <br />



                                Created a Smooth UI using ReactJS to prevent reloading and give a better User Experience</small></p>
                        <div className='btns'>
                            <a href='http://github.com/Xaid-vfx/CookBook'><button className='pbtn'>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg> Code</button></a>
                            <a href='http://recipe-661e9.web.app/'>
                                <button className='pbtn'>Live</button></a>
                        </div>

                    </div>))}




                <div className='prodesc' id='prodesc1'>

                    <p><small>The objective of this project was to create a Full-Stack Web app using ReactJS and Firebase.<br/>
                      The project displays a list of recipes displayed from the firebase database
                        <br />



                        Created a Smooth UI using ReactJS to prevent reloading and give a better User Experience
                    </small></p>
                    <p><strong>Tech Stack : </strong></p>
                    <div>
                        <a href='http://recipe-661e9.web.app/'>
                            <button className='showbtn'>Live </button>
                        </a>
                        &#160;<a href='http://github.com/Xaid-vfx/CookBook'>
                            <button className='showbtn'> Code <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg></button>
                        </a>
                    </div>
                </div>
            </div>


            {/* project2 */}
            <div className='full'>

                {window.screen.availWidth > 760 ?
                    (<div className='projectx project2' id='project2'>
                        <h4>Spotify</h4>
                        <p>July,2022</p>


                    </div>)

                    :
                    (check2 ? (
                        <div className='projectx' onClick={() => {

                            setcheck2(false);

                        }} id='project2'>
                            <h4>Spotify</h4>
                            <p>July ,2022</p>

                        </div>
                    ) : (<div className='projectx' id='project12'>
                        <p onClick={() => {
                            setcheck2(true);

                        }}><small>A Spotify Clone app built using pure HTML,CSS and JavaScript.
                            This web app has an online song player that will allow you to smoothly play/pause songs.
                            Linked a SQL Database to store user credentials
                            .Professional Login and Register pages provided linked with SQL using PHP.
                            </small></p>
                        <div className='btns'>
                            <a href='http://github.com/Xaid-vfx/Spotify1'>
                                <button className='pbtn'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg> Code</button>
                            </a>

                        </div>

                    </div>))}




                <div className='prodesc' id='prodesc2'>
                    <p><small>A Spotify Clone app built using pure HTML,CSS and JavaScript.
                        This web app has an online song player that will allow you to smoothly play/pause songs.
                        Linked a SQL Database to store user credentials
                        .Professional Login and Register pages provided linked with SQL using PHP
                        . Displayed the importance of Primary key and other constraint in Relational Database.
                    </small></p>
                    <p><strong>Tech Stack : </strong></p>
                    <a href='http://github.com/Xaid-vfx/Spotify1'>
                        <button className='showbtn'>Code <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg></button>
                    </a>
                </div>
            </div>

            {/* project3 */}
            {/* <div className='full'>

                {window.screen.availWidth > 760 ?
                    (<div className='projectx' id='project1'>
                        <h4>Project name</h4>
                        <p>Description</p>
                        <button className='showbtn' onClick={() => {

                            document.getElementById('prodesc3').style.opacity = 1;
                            button3 ? document.getElementById('prodesc3').style.opacity = 1 : document.getElementById('prodesc3').style.opacity = 0;
                            setbutton3(button3 ? false : true)


                        }}>{button3 ? ('Show') : ('Hide')}</button>
                    </div>) :
                    (check3 ? (
                        <div className='projectx' onClick={() => {

                            setcheck3(false);

                        }} id='project1'>
                            <h4>Project name</h4>
                            <p>Description</p>

                        </div>
                    ) : (<div className='projectx' onClick={() => {
                        setcheck3(true);

                    }} id='project12'>
                        <p><small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quasi natus enim facere expedita, quam quos non quo molestiae qui sed suscipit sequi accusantium necessitatibus eligendi in animi totam cumque.</small></p>
                        <div className='btns'>
                            <button className='pbtn'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>Code</button>
                            <button className='pbtn'>Live</button>
                        </div>

                    </div>))}




                <div className='prodesc' id='prodesc3'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi magnam saepe distinctio, nulla eveniet corporis, a, et quisquam qui possimus dignissimos inventore veritatis cupiditate veniam repudiandae hic optio libero quasi.</p>
                    <p><strong>Tech Stack : </strong></p>
                    <button className='showbtn'>Live</button>
                </div>
            </div> */}












        </>
    )
}
