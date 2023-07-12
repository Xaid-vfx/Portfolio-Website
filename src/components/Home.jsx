import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { useEffect, useState } from 'react'
import logo from '../assets/img/zlogo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fatwitter } from '@fortawesome/free-regular-svg-icons'
import SocialIcons from './SocialIcons'
import './home.css'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import ParticlesBack from './Particle'
import Particle from './Particle'
import ParticleBack from './Particle'
import { BsFileEarmarkPdf, BsGithub, BsChevronDoubleDown } from "react-icons/bs";

export default function Home() {

  useEffect(() => {
    setTimeout(() => {
      document.getElementById('head1').classList.toggle('show', true)
      document.getElementById('head2').classList.toggle('show', true)

    }, 500);
    setTimeout(() => {
      document.getElementById('foot1').classList.toggle('show', true)
      document.getElementById('foot2').classList.toggle('show', true)
    }, 2000);
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       entry.target.classList.toggle('show', entry.isIntersecting)
  //       if (entry.isIntersecting) observer.unobserve(entry.target)

  //     })

  //   }, { threshold: 0 })

  //   // const ob1 = document.querySelectorAll('#head1');
  //   // ob1.forEach((el) => {
  //   //   observer.observe(el);
  //   // })
  //   // const ob2 = document.querySelectorAll('#head2');
  //   // ob2.forEach((el) => {
  //   //   observer.observe(el);
  //   // })
  //   // const ob3 = document.querySelectorAll('#foot1');
  //   // ob3.forEach((el) => {
  //   //   observer.observe(el);
  //   // })
  //   const ob4 = document.querySelectorAll('#foot2');
  //   ob4.forEach((el) => {
  //     observer.observe(el);
  //   })
  }, [])

  return (
    <div className='h-[100vh]'>
      <div className='flex justify-center items-center h-[80%] pt-[7%] pb-[3%]'>
        <div id="headContainer" className='w-7/12'>
          <div className='text-center tracking-[5px] text-lg' id="head1">
            HI I AM <div className='inline text-blue-500'>ZAID</div>
          </div>
          <div className='welcome text-center animate-charcter mb-10 mt-2' id="head2">
            Introducing my portfolio
          </div>
          <div className='tracking-wider text-base opacity-70' id='foot1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perspiciatis voluptatem nobis maxime ut, aperiam minus sint corrupti, esse fugit quo ex molestiae amet quos mollitia sed laborum itaque illo.
            <br />
            <br />
           
          </div>
          <div className='flex gap-5 justify-center mt-5 text-[1vw]' id='foot2'>
            <button id='btnText' className=' border border-2 rounded text-[1em] hover:bg-white hover:text-black flex gap-2'>
              <BsFileEarmarkPdf  className='  text-[1.4em]' />
              <div>RESUME</div>
            </button>
            <button onClick={() => { window.location.href = "https://github.com/Xaid-vfx" }} id='btnText' className='border border-2 rounded  text-[1em] hover:bg-white hover:text-black flex gap-2'>
              <BsGithub className=' text-[1.4em]' /><div>
                GITHUB</div></button>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <BsChevronDoubleDown className='text-[2em] scrollIcon' />
      </div>









      {/* <svg className='svg'>
        <symbol id="s-text">

          <text text-anchor="middle" x='53%' y='85%'>XAID </text>
          <text text-anchor="middle" x='55%' y='85%'>XAID </text>

        </symbol>

        <g class="g-ants">
          <use xlinkHref="#s-text" class="text-copy"></use>
          <use xlinkHref="#s-text" class="text-copy"></use>
          <use xlinkHref="#s-text" class="text-copy"></use>
          <use xlinkHref="#s-text" class="text-copy"></use>
          <use xlinkHref="#s-text" class="text-copy"></use>
        </g>
      </svg> */}
      </div>
  )
}
