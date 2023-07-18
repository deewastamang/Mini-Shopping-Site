import React from 'react'
import { NavLink, Link, Outlet, useLoaderData, useLocation } from 'react-router-dom'
import { getProducts } from '../api'
import { ProductLayoutStyled } from './styles/products.styled'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/slice/cartSlice';

export const productLayoutLoader = async ({params}) => {
    return await getProducts(params.id);
}

export default function ProductLayoutDetail() {
    const product = useLoaderData();
    const productData = {...product, amount: 1};
    const location = useLocation();
    const search = location.state?.search || '';
    const dispatch = useDispatch();
    const {cartItems, amount} = useSelector(state => state.cart)

    const activeNav = ({isActive}) => {
      return isActive ? {
          color: '#5979a0',
          fontWeight: '600',
      } : null
    }

    const handleClick = (e) => {
      cartItems.find(item => item.id === productData.id) ? alert('Already in cart') :  dispatch(addItem(productData))
      
    }

  return (
    <>
    <ProductLayoutStyled>
      {cartItems.length ? <Link relative="path" to={`../cartcontainer/?id=${productData.id}`}>Your cart has {amount} items, Tap to see them</Link> : null}
      
      <div>
            <Link to={`..?${search}`} relative='path'>&larr; Go Back</Link>
          <section>
            <img src={productData.image} />
            <article>
              <h4>{productData.title}</h4>
              <p><b>Category:</b> {productData.category}</p>
              <button onClick={handleClick}>Add to cart</button>
            </article>

          </section>

          <nav>
            <NavLink to='.' end style={activeNav}>Info</NavLink>
            <NavLink to='ratings' style={activeNav}>Ratings</NavLink>
          </nav>
      </div>
    </ProductLayoutStyled>
      <Outlet context={productData} />
    
    </>
  )
}
