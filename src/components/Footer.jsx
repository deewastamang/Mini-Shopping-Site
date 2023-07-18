import React from 'react'
import { FooterStyled } from './styles/home.styled'

export default function Footer() {

  return (
    <FooterStyled>
        ©{new Date().getFullYear()} Deewas. All rights reserved.
    </FooterStyled>
  )
}
