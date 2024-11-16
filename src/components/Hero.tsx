import React from 'react'
import logo from '../images/ChessClubLogo.png'
import board from '../images/ChessBoard.png'
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <div>
        <div className="top-background pb-8 pt-8 w-full flex items-center justify-center text-white font-bold"
        style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: '3rem',
            fontFamily: '"Arial", Helveitca, sans-serif',
        }}> 
        <img src={logo.src} style={{ width: '100px', height: 'auto' }} alt="Logo" />
        <h1>University of Calgary Chess Club</h1>
        </div>
        
        <div className="circle-container">
        <div className="animated-circle"></div>
        </div>
        
        <div className='pt-12 pb-6 flex items-center justify-center'> The University of Calgary's Chess Club is focused on finding positive culture in a competitive environment. </div>


        <div className='flex items-center justify-center pt-10'>
            <h1 className="text-3xl font-bold ">About Us</h1>
        </div>

        <div className='about-us'>
            <img src={board.src} className='p-10' style={{ width: '500px', height: 'auto' }}></img>
            <div className='about-us-card'>
                <TextGenerateEffect 
                    words='The UCCC is geared towards promoting the sport of chess among all demographics, from beginner to master. Our objective is to assist fellow enthusiasts and players to hone their chess skills and continue to reach new peaks of excellence.'
                    className="text-lg text-black"/>
            </div>
        </div>

        <div className='announcements'>
            <div className='flex items-center justify-center pt-10'>
                <h1 className="text-3xl font-bold ">Announcements</h1>
            </div>
        </div>

        <div className='team'></div>

        <div className='contact'></div>
    </div>
    
    
    
    
  )
}

export default Hero