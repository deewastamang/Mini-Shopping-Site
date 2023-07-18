import React from 'react'
import { ProductCardStyled } from './styles/products.styled'
import { NavLink, useParams } from 'react-router-dom'
import {  useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion';

export default function ProductCard({id, title, price, rating, image, description, category, state}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const animation = useAnimation();

  React.useEffect(() => {
    if(inView) {
      animation.start({
        y: 0,
        transition: {
          type: 'spring', duration: 1, bounce: 0.3
        },
        opacity: 1,
      
      })
    }
    if(!inView){
      animation.start({
        y: 50,
        opacity: 0,
      })
    }
  },[inView])

  return (
    <ProductCardStyled 
    ref={ref}
    animate={animation}
    whileHover={{scale: 1.1}}
    whileTap={{scale: 1.2}} >
        <p>{id}</p>
        <NavLink to={`/project/products/${id}`} state={{...state}}>
            <img src={image} alt={title} />
            <section>
                <h4>{title}</h4>
                <p>Rs.{price}</p>
            </section>
        </NavLink>
    </ProductCardStyled>
  )
}
