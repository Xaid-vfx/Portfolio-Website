import React, { useState, useEffect } from "react";
import Projectcard from './Projectcard'
import './project.css'
import ParticleBack from "../Particle";

export default function Projects() {
  const res = [{
    id: 1,
    name: "E-commerce",
    desc: "A Full stack image selling e-commerce website built using React.js and Firebase",
    link: "https://ewm.swiss/application/files/8216/1597/9679/E-commerce_web_design_EWM_SA_Digital_Agency_Geneva.jpg",
    git: "https://github.com/Xaid-vfx/ecom",
    live: "",
    stack: ["React.js,", " JavaScript"]
  }, {
    id: 2,
    name: "CookBook",
    desc: "A Full Stack Website to display and search recipes using React.js and Firebase",
    link: "https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2022/07/allrecipes-dinners-for-one-website.jpg",
    git: "https://github.com/Xaid-vfx/CookBook",
    live: "https://recipe-661e9.web.app/",
    stack: ["React.js,", " JavaScript"]
  }, {
    id: 3,
    name: "GitHub Tool",
    desc: "A Github tool built with GitHub API to display details of GitHub users along with server side Pagination",
    link: "https://external-preview.redd.it/millions-of-github-repos-likely-vulnerable-to-repojacking-v0-YNqQOsiDM3jTR9GhJgc9o21fYFKJCsOq5RkTF8UFFvs.jpg?auto=webp&s=7faf172820a56abc9e2857dd3ea7c4c1a672def4",
    git: "https://github.com/Xaid-vfx/Github-Tool",
    live: " github-tool.vercel.app ",
    stack: ["React.js,", " JavaScript,", " GitHub API"]
  }, {
    id: 4,
    name: "Shopping UI",
    desc: "A shopping website UI designed with smooth animations developed using React.js. Multiple Filters are provided to narrow down the search",
    link: "https://www.designbombs.com/wp-content/uploads/2020/09/12.jpg",
    git: "https://github.com/Xaid-vfx/Shopping",
    live: "shoppingapp-gamma.vercel.app",
    stack: ["React.js,", " JavaScript,", " API"]
  }]

  function enter(e) {
    console.log(e);
    let ele = document.getElementById("desc" + e.currentTarget.id)
    ele.style.display = "block"
    ele.style.width = "100%"
    let ele2 = document.getElementById("descrip" + e.currentTarget.id)
    ele2.style.opacity = "1"
  }
  function exit(e) {
    let ele2 = document.getElementById("descrip" + e.currentTarget.id)
    ele2.style.opacity = "0"
    let ele = document.getElementById("desc" + e.currentTarget.id)
    ele.style.width = "0px"
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
      })
    }, { threshold: .5 })
    for (let i = 1; i <= 4; i++) {
      const project = document.querySelectorAll(".card" + i)
      project.forEach((el) => {
        console.log(el);
        observer.observe(el);
      })
    }
  }, [])

  return (
    <div className="flex relative gap-2 justify-center flex-col items-center h-[140vh] projectbg">
      <div className='connectLine'>
      </div>
      <div className='PageNumber'><div className='number'>2</div> <div className='abouttitle'>Projects</div></div>
      <div className={'ProjectsAlignment absolute top-[20%] grid grid-cols-2 w-9/12'}>
        {res.map((e) => {
          return <div className={"card" + e.id + " " + "cardcss"} id={e.id} onMouseEnter={(e) => { enter(e) }} onMouseLeave={(e) => { exit(e) }}><Projectcard name={e.name} desc={e.desc} link={e.link} id={e.id} stack={e.stack} git={e.git} live={e.live} /></div>
        })}
      </div>
    </div>
  )
}
