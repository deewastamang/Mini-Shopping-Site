import React from 'react'
import { styled } from 'styled-components'

const AboutStyled = styled.div`
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  p {
    width: 60%;
    margin:2em auto;
    text-align: justify;
    line-height: 1.5em;

    ul {
      margin: 1.2em 0;

      li{
        margin: .3em 0;
      }
    }

  }
`

export default function About() {
  return (
    <AboutStyled>
      <h1>
        About this Project
      </h1>
      <p>In this project, I have made a mini e-commerce shopping site where you can discover the products from a fakestore api data and also add the products you like to purchase in your cart. You have to be logged in first to get access to those pages. You can register with you email easily and log in to the page.
        <ul>
          <b>Tools used:</b>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>React Router 6</li>
          <li>Redux Toolkit</li>
        </ul>

      </p>

    </AboutStyled>
  )
}
