import React from 'react'
import './about.css'
import photo from './myphoto.png'

export default function About() {
  const observer = new IntersectionObserver(ent=>{

  })

  // const det=document.querySelectorAll('.details')
  // det.map(e=>{
  //   observer.observe(e);
  // })
  


  return (
    <div className='container about'>
      <div className='details'>
        <h1>About me</h1>

        <div className='indet'>
          <span className='tags top-tags'>&lt;p&gt;</span>

          <p>Hi,<br/>I'm Zaid. I am Web/Software Developer with specialization in Frontend Development. I am a pre-final year Computer Science Engineering student at Nitte Meenakshi Institute of Technology. I have an experience of over 1 year in Web and software development. I have built 2 Full Stack projects and  3 Front-End projects.<br/></p>

          <span className='tags bottom-tags'>&lt;/p&gt;</span>
        </div>
      </div>
      <img id='profileimg' src={photo} alt='1'>
      </img>
    </div>
  )
}
