import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { useEffect, useState } from 'react'
import logo from '../assets/img/zlogo1.png'


export default function Home() {



    const name = ['a', 'i', 'd'];
    const soft = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e'];
    const dev = ['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

    const [disp, setdisp] = useState('');
    const [loop, setloop] = useState(0);
    const [isdelete, setisdelete] = useState(false);

    let va = '', ka = 'Web Developer / Frontend Developer';

    useEffect(() => {

        for (let i = 0; i < ka.length; i++) {
            setTimeout(() => {
                va = va + ka[i];
                setdisp(va);
                //console.log(disp);
            }, 150 * i);
        }
        


    }, [])

    









    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br /><div className='nameletters'>
                    I'm &#160; <img className='logoimg1' src={logo} />
                    <div className='nameletters'>
                        {name.map(e => {
                            return (
                                <div className='nameanimation'>
                                    {e}
                                </div>
                            );
                        })}
                    </div>
                    <br />
                </div>
                </h1><h3>
                    <div className='nameletters'>
                    
                        {soft.map(e => {
                            return (
                                <div className='nameanimation'>
                                    {e}
                                </div>
                            );
                        })}
                        &#160;
                        {dev.map(e => {
                            return (
                                <div className='nameanimation'>
                                    {e}
                                </div>
                            );
                        })}

                    </div>
                </h3>
                <p>{disp}
                
                <div className='cursor'></div></p>

            </div>




        </div>
    )
}