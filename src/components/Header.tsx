import styled, {keyframes} from "styled-components";

const TopDown = keyframes`
     0%{  
        transform: translateY(-25%);
        opacity: 0;
     }

     100%{
        transform: translateY(0);
        opacity: 1;
     }
`;

const HeaderContainer = styled.header`

    animation: ${TopDown} 0.5s;
    span{
        display: block;
        font-size: 1rem;
        line-height: 2rem;
        letter-spacing: 3px;
        text-transform: uppercase;
        color:${props=>props.theme.textHeaderColor};
        text-align: center;
    }

    h1{
        text-align: center;
        font-weight: 800;
        font-size: 2.5rem;
        line-height: 3rem;
        padding-bottom: 5rem;
    }
`;


export function Header(){
    return(
        <HeaderContainer>
            <span>Recentes</span>
            <h1>Trabalhos</h1>
        </HeaderContainer>
    );
}