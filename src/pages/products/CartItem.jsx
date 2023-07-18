import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from 'styled-components'
import { removeItem, increase, decrease } from '../../features/slice/cartSlice';
import { ChevronDown, ChevronUp } from '../../assets/icons/icons';

const CartStyled = styled.div`
  width: 90%;
  padding: .8em;
  margin: .5em auto;
  background-color: grey;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  max-height: 150px;
  img {
    width: 100px;
    object-fit: contain;
    border-radius: 5px;
  }
  
  div {
    color: ${({theme}) => theme.colors.bg};
    text-align: center;
    flex: 8;

    p {
      color: #dbdb00;
      margin: .3em;
      
    }

    button {
      padding: .4em;
      border-radius: 5px;
      &:hover {
        color: white;
        background-color: red;
      }
    }
  }
  & >div:nth-of-type(2) {
    flex: 2;
  }
`

export default function CartItem({id, price, image, description, title, amount}) {
  const dispatch = useDispatch();
  return (
    <CartStyled>
      <img src={image} />
      <div>
        <h3>{title}</h3>
        <p><b>Price: $</b>{price}</p>
        <button onClick={() => dispatch(removeItem(id))}>Remove item</button>
      </div>

      
      <div>
          <button className="amount-btn" onClick={() => dispatch(increase( id ))}>
                    <ChevronUp />
            </button>
            <p style={{fontSize: '1.5em', fontWeigth: '600',color:'black'}}>{amount}</p>
            <button className="amount-btn" onClick={() => {
              if (amount === 1) {
                  return dispatch(removeItem(id));
                  
              }
              dispatch(decrease(id));
              }}>
              <ChevronDown />
            </button>
            </div>
    </CartStyled>
  )
}
