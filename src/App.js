import React from 'react'
import Router from './Router'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/styles/theme'
import GlobalStyle from './components/styles/GlobalStyle'
import { calculateTotal } from './features/slice/cartSlice'
import { useDispatch, useSelector } from 'react-redux'



export default function App() {
  const cartItems = useSelector(item => item.cart.cartItems)
  const total = useSelector(item => item.cart.total)
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(calculateTotal());
    console.log('total', total)
  },[cartItems])
  return (
    <div>
    
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </div>
  )
}
