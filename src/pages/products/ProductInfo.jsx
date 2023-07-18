import React from 'react'
import { useOutletContext } from 'react-router-dom';
import { styled } from 'styled-components';

const ProductInfoStyled = styled.div`
  min-height: 40vh;
  width: 80%;
  margin: 0 auto;

  p {
    text-align: center;
    margin: 1em 0;
  }
`

export default function ProductInfo() {
  const product = useOutletContext();
  return (
    <ProductInfoStyled>
      <p><b>Price: Rs.</b> {product.price}</p>
      <p><b>Description: </b> {product.description}</p>
    </ProductInfoStyled>
  )
}
