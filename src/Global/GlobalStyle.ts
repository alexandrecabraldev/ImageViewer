import { createGlobalStyle, StyledComponent } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: 400;
        color: ${props=>props.theme.white};
        font-size: 1rem;
    }

    body{
        background-color: ${props=>props.theme.bodyBackgroundColor};
    }
`;