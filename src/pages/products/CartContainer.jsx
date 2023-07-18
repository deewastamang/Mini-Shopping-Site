import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from 'styled-components'
import CartItem from './CartItem'
import { Link, useSearchParams } from 'react-router-dom'
import { clearCart } from '../../features/slice/cartSlice'


const CartContainerStyled = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        text-align: center;
    }

    section {
        display: flex;
        justify-content: space-around;
        a {
            color: ${({theme}) => theme.colors.font};
            text-decoration: none;
            flex: 3;
            text-align: center;

            &:hover {
                text-decoration: underline;
                font-weight:600;
            }

        }

        button {
            flex: 3;
            max-width: 100px;
            margin-right: 8vw;
            padding: .6em;
            border-radius: 5px;

        }

        h3 {
            flex: 9;
        }
    }

    footer {
        min-height: 15vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export default function CartContainer() {
    const cartItems = useSelector(state => state.cart.cartItems);
    const cartAmount = useSelector(state => state.cart.amount)
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const {total} = useSelector(state => state.cart);

    const previousItemId = searchParams.get('id');


    if(cartItems.length === 0) {
        return (<>
        <div  style={{width:'100%',height:'80vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h1>Noting in your cart</h1>
        <Link to='/project/products' style={{color:'white', marginTop:'2em'}}>Explore products</Link>

        </div>
     </>)
    }

  return (
    <CartContainerStyled>
        <section>
            <Link to={previousItemId ? `../${previousItemId}` : '/project/products'} relative='path'>&larr; Go back</Link>
            <h3>In your cart: {cartAmount}</h3>
            <button onClick={() => dispatch(clearCart())}>Remove all</button>
        </section>
        <div>
            {cartItems.map(item => {
                return <CartItem key={item.id} {...item} />
            })}
        </div>
        <hr />
        <footer>
            <h3>Total: ${total.toFixed(2)}</h3>

        </footer>
    </CartContainerStyled>
  )
}
