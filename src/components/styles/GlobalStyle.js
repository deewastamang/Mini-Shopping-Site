import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Roboto&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
    }

    html, body {
        background-color: ${({theme}) => theme.colors.bg};
        color: ${({theme}) => theme.colors.font};
        font-family: 'Poppins', sans-serif;
        font-family: 'Roboto', sans-serif;

    }

`

export default GlobalStyle;