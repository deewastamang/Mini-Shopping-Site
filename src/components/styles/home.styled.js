import {styled} from 'styled-components';

export const LayoutStyled = styled.header`
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-around;

    button {
        padding: .8em;
        border-radius: 5px;
        border: none;
        font-weight: 600;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

        &:hover {
            background-color: ${({theme}) => theme.colors.pop};
            color: ${({theme}) => theme.colors.font}
        }
    }    
    h2 {
        user-select: none;
        font-weight: 600;
        letter-spacing: .03em;

        span {
            color: ${({theme}) => theme.colors.pop};
        }
    }

    a {
        text-decoration: none;
        margin-left: 3rem;
        color: ${({theme}) => theme.colors.font};
        font-size: 1.2em;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -6px;
            width: 100%;
            height: 3px;
            background-color: ${({theme}) => theme.colors.pop};
            border-radius: 5px;
            transform-origin: right;
            transform: scaleX(0);
            transition: transform 0.5s;
        }

        &:hover::after {
            transform-origin: left;
            transform: scaleX(1);
        }
    }
`


export const HomePageStyled = styled.div`
    min-height: 90vh;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        section {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 8;
            margin-left: 7vw;
            h1 {
                font-size: 4em;
                text-align: center;
                user-select: none;
            }

            h3 {
                margin-top: 1em;
                user-select: none;
            }

            span {
                color: ${({theme}) => theme.colors.pop}
            }
        }
        img {
           
            max-width: 350px;
            border-radius: 30% 30% 50% 50%;
            flex: 4;
            margin: 8vh 12vw;
            box-shadow: rgb(192,192,192, 0.62) 0px 2px 4px 0px, rgb(192,192,192,0.82) 0px 2px 16px 0px;
        }
    }

    @media screen and (max-width: 733px) {
        div{
            img{
                max-width: 250px;
            }

            section {
                h1 {
                    font-size: 3em;
                }
                
            }
        }
    }

    @media screen and (max-width: 415px) {
        div {
            flex-direction: column;
            section{
                margin-top: 5vh;
            }
            img {
                border-radius: 20px;
                max-width: 100%;
                border: 1px solid red;
            }
        }
    }
`

export const FooterStyled = styled.footer`
    min-height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: ${({theme}) => theme.colors.font};
    border-radius: 5px 5px 0 0;
    font-weight: 500;

`