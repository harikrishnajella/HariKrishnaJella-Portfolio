import React from 'react'
import {Link} from 'react-router-dom'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

import Header from '../Header'
import './index.css'


const Home = () => {
    const [text] = useTypewriter({
        words: ['Hari Krishna Jella','React Developer', 'Frontend Developer', 'Web Developer'],
        loop: {},
        typeSpeed: 100,
    })

    return (
        <>
            <Header/> 
            <div className='home-container'>
                <img className='home-website-developer-img' src='https://chaitanya216-portfolio.netlify.app/devchaitu.png' alt='img' />
                <div className='home-iam-details-card'>
                    <h1 className='home-iam-heading'> I'm {''}
                        <span className='home-iam-span-heading'>{text}</span>
                        <span className='home-iam-heading'><Cursor/></span>
                    </h1>
                    <h1 className='home-title-heading'>Hello! I am Hari Krishna Jella, An Graduated Student, <br/>Passionate about working in Web Development
                    Industry &amp; Software Developer.</h1>
                    <Link to='/aboutme'>
                    <button className='home-aboutme-btn' type='button'>About me</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home


