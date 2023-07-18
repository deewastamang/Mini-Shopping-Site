import { styled } from "styled-components"
import { motion } from "framer-motion"

export const ProductCardStyled = styled(motion.div)`
    box-shadow: rgba(0, 0, 0, 0.65) 0px 5px 15px;
    border: 2px solid black;
    width: 250px;
    height: 300px;
    padding: 10px;
    text-align: center;
    background-color: rgba(255,0,0,0);
    overflow: hidden;
    border-radius: 10px;
    transition: ease .2s;


    &:hover{
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    }
    
    a {
        min-width: 250px;
        text-decoration: none;
        color: ${({theme}) => theme.colors.bg};
    
        img{
            margin-left: 10%;
            width: 100%;
            max-height: 200px;
            object-fit: contain;
        }
        
        section{
            text-align: center;
            h4 {
                font-weight: 600;   
                margin-top: 5px;

            }
            p {
                margin-top: .5em;
                font-weight: 600;
                color: black;
            }
        }

        }

        @media screen and (max-width: 781px) {
            a {
                img {
                    width: 60%;
                }
            }
        }
    
`

export const ProductsStyled  = styled.div`
    background-color: whitesmoke;

   
    h1 {
        text-align: center;
        color: black;
    }
    h3 {
        text-align: center;
        color: black;
        margin-top: 1em;
    }

    nav {
        color: black;
        text-align: center;
        margin-top: .8em;
        div {
            display: inline;
            margin-left: 2em;
            &:hover {
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }

    div {
        width: 80%;
        margin: 1em auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: .4em;
    

    @media screen and (max-width: 1249px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 740px) {
        grid-template-columns: 1fr;
    }
    }
   

`

export const ProductLayoutStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 60vh;
    
    & > a {
        color: ${({theme}) => theme.colors.font};
        text-decoration: none;
        font-weight:600;
        font-size: 1.5em;
        &:hover {
            text-decoration: underline;
        }
    }

    div {
        background-color: #FFF7ED;
        width: 80%;
        max-width: 700px;
        margin: 2em 0;
        border-radius: 20px;
        overflow: hidden;
        max-height: 350px;
        padding: 1em;

        a {
            text-decoration: none;
            margin-left: 20px;
            color: black;

            &:hover{
                text-decoration: underline;
                cursor: pointer;
                font-weight: 600;
            }
        }
        section {
            display: flex;
            justify-content: space-around;
            align-items: center;
            max-height: 250px;

            img {
                margin-top: 1em;
                width: 150px;
                border-radius: 10px;
            }
            article {
                color: black;
                margin-left: 1.2em;

                p {
                    margin: 1em 0;
                }

                button {
                    padding: .3em;
                    border-radius: 5px;

                    &:hover {
                        color: white;
                        background-color: red;
                    }
                }
            }
        }

        nav {
            text-align: center;
            margin-top: 1.5em;
            a {
                text-decoration: none;
                color: black;
                margin: 2em;
                

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`

