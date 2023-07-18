import React from 'react'
import { Navigate } from 'react-router-dom'
import { styled } from 'styled-components';

const ProjectStyled = styled.div`
  min-height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    margin-top: .5em;
  }

  button {
    padding: 1em;
    border-radius: 5px;
    font-weight: 600;
    margin-top: 2em;
    &:hover {
      color: white;
      background-color: ${({theme}) => theme.colors.pop}
    }
    }
`

export default function Project() {
    const [press, setPress] = React.useState(false);
    const handleClick = () => {
        setPress(true);
    }
    if(press) {
        return <Navigate to='products' />
    }
  return (
    <ProjectStyled>
      <h1>Get Data from Fakestore API</h1>
      <h3>You have to be logged in first</h3>
        <button onClick={handleClick} >Get Products</button>
    </ProjectStyled>
  )
}
