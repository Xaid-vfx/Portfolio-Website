import React from 'react'
import navIcon1 from '../assets/img/li.svg'
import navIcon2 from '../assets/img/git.svg'
import navIcon3 from '../assets/img/twi.svg'

export default function SocialIcons() {
    return (
        
            <div className="social-icon">
                <a href='https://www.linkedin.com/in/mohd-zaid-3889801b7/'><img src={navIcon1} alt='1' />
                </a>
                <a href='https://github.com/Xaid-vfx'><img src={navIcon2} alt='1' />
                </a>
                <a href='https://twitter.com/Xaid-vfx'><img src={navIcon3} alt='1' />
                </a>
            </div>

    )
}
