import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const NotFoundStyled = styled.div   `
    min-height: 50vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        color: white;
        margin: 1em;
    }
`

export default function NotFound() {
  return (
    <NotFoundStyled>
        <h1>Page Not Found.</h1>
        <Link to='/'>Go back to home page</Link>
    </NotFoundStyled>
  )
}
