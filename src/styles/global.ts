import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 22px;
    }

    body {
        background: ${(props) => props.theme.colors.background};
        font-size: 16px;
        color: ${(props) => props.theme.colors.text};
        font-family: 'Lato', sans-serif;
    }
`;
