import React from 'react'
import { HomePageStyled } from '../components/styles/home.styled'
import deewasImage from '../assets/images/deewasImg.jpg'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <HomePageStyled>
        <div>
            <motion.section animate={{x: 0, scale: 1}} initial = {{x: -300, scale: 0}} transition={{duration: .6, type: 'spring'}}>
                <h1>Hi, <span>I</span>'m <br /> <span>D</span>eewas T<span>a</span>mang</h1>
                <h3>React Developer</h3>
            </motion.section>
            <motion.img 
            src={deewasImage} 
            alt='deewas image' 
            animate={{x: 0, scale: 1}}
            initial = {{x: 300, scale: 0}}
            transition={{duration: .6, type: 'spring'}}
            />

        </div>
    </HomePageStyled>
  )
}
