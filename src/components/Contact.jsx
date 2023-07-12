import React from 'react'
import './Contact.css'
import navIcon1 from '../assets/img/li.svg'
import navIcon2 from '../assets/img/git.svg'
import navIcon3 from '../assets/img/twi.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMailBulk, faMailForward, faMailReply, faPhone } from '@fortawesome/free-solid-svg-icons'

import { faMessage } from '@fortawesome/free-regular-svg-icons'
import SocialIcons from './SocialIcons'



export default function Contact() {
    return (
        <div className='h-[100vh] relative flex justify-center items-center'>
            <div className='connectLine h-[14%]'>
      </div>
      <div className='PageNumber'><div className='number'>4</div> <div className='abouttitle'>Contact Me</div></div>
            <div>
                <div className='content'>
                    <div className='suggest'>
                        <h5>Suggestion Box</h5>
                        <div className='inbox'>
                            <p>
                                <small> Email</small>
                            </p>
                            <input className='box' style={{ "padding": "5px" }} type="Email" placeholder='Email' />
                        </div>
                        <div className='inbox'>
                            <p>
                                <small> Description</small>
                            </p>
                            <textarea rows={6} cols={45} className='desc box' maxLength={500} style={{ "padding": "5px" }} type="Email" placeholder='Description' />
                        </div>
                        <button className='showbtn box' onClick={() => {
                            alert('Sent')
                        }}>Send</button>
                    </div>

                    <div className='line'></div>

                    <div className='mail'>
                        <h5>Lets Work Together</h5>
                        <div className='mailcon'>
                            <a className='email' href='mailto:mohdzaid.work@gmail.com'>
                                <p><small><FontAwesomeIcon icon={faEnvelope} /> &nbsp;
                                    mohdzaid.work@gmail.com </small></p>
                            </a>
                            <a href='tel:+91 9369828007' className='email'><p><small>
                                <FontAwesomeIcon icon={faPhone} />&nbsp;+91 9369828007</small></p></a>
                            <div className='linever'></div>

                        </div>
                        <SocialIcons />
                        <p id='copy'><small>Copyrights 	&#169; reserved</small></p>
                        <p className='made' id='copy'>Made by Zaid</p>
                    </div>


                </div>

            </div>
        </div>
    )
}
