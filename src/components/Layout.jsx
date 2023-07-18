import React from 'react'
import { NavLink, Outlet, redirect, useNavigate } from 'react-router-dom';
import { LayoutStyled } from './styles/home.styled';
import Footer from './Footer';
import { useSelector, useDispatch } from 'react-redux';
import { logOut, logIn } from '../features/slice/loginSlice';

export default function Layout() {
    const itemAmount = useSelector(state => state.cart.amount)
    const isLoggedIn = useSelector(state => state.logIn.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const activeNav = ({isActive}) => {
        return isActive ? {
            color: '#5979a0',
            fontWeight: '600',
        } : null
    }

    const handleLogClick = (e) => {
        if(isLoggedIn){
            dispatch(logOut());
        }
        else{
            navigate('/login')
        }
    }


  return (
    <>
    <LayoutStyled>
        <h2>D<span>e</span>ewas</h2>
        <nav>
            <NavLink to='/' style={activeNav}>Home</NavLink>
            <NavLink to='about' style={activeNav}>About</NavLink>
        
            <NavLink to='project' style={activeNav}>Project</NavLink>

            {itemAmount > 0 && isLoggedIn  ? <NavLink to='project/products/cartcontainer'>Cart: {itemAmount}</NavLink> : null}
        </nav>

        <button onClick={handleLogClick}> 
            {isLoggedIn ? 'Log Out' : 'Log In' }
        </button>
    
    </LayoutStyled>
    <Outlet />
    <Footer />
    </>
  )
}
