import React from 'react'
import Projectcard from './Projectcard'
import './project.css'

export default function Projects() {
  return (
    <div className='container f'>
        <h1>Projects</h1>
       <div  className='projects'><Projectcard/></div>
    </div>
  )
}
