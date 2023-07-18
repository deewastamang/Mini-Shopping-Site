import React from 'react'
import { styled } from 'styled-components'
import { useOutletContext } from 'react-router-dom'

const RatingsStyled = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: 20vh;
  text-align: center;

  h1 {
    font-size: 2.3em;

  }

  p {
    margin-top: .7em;
  }
`

export default function Ratings() {
  const product = useOutletContext();
  return (
    <RatingsStyled>
      <h1>Rating</h1>
      <p><b>Rate: </b>{product.rating.rate}</p>
      <p><b>Total Count: </b>{product.rating.count}</p>
    </RatingsStyled>
  )
}
