import styled from"styled-components";

const ImageContainerTotal = styled.div`

    display: grid;
    gap: 2rem;

    max-width: 22rem;
    margin: 0 auto; 

    img{
        width: 100%;
        height: 26rem;
        object-fit: cover;        
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s;
        //all seleciona todas as propriedades, nesse caso a opacity e o transform;

        &:hover{
            opacity: 0.7;
            transform: scale(1.1);
            
        }
    }
`;

const ImageContainer = styled.div`
    position: relative;
    
    h2{
        position:absolute;
        display: grid;
        gap:1.4375rem;
        left: 0;
        bottom: 1.75rem;
        margin-left: 1.75rem;

        font-weight: 800;
        font-size:2.5rem;
        line-height: 3rem;
     

        span{
            background-color: ${props=>props.theme.white};
            color: ${props=>props.theme.textImageColor};
            padding: 0 1rem;
            line-height: 2rem;
            border-radius: 19px;
            width: fit-content;
            
        }
    }
`;


export function Principal(){
    return(
        <ImageContainerTotal>
            <ImageContainer>
                <img src="https://images.unsplash.com/photo-1601524909109-10c0a85365ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                
                <h2>
                    <span>Computer</span> 
                    Macbook
                </h2>
            </ImageContainer>

            <ImageContainer>
                <img src="https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                
                <h2>
                    <span>Smartfhone</span>
                    Iphone 
                </h2>
            </ImageContainer>

            <ImageContainer>
                <img src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                
                <h2>
                    <span>Tecnology</span>
                    Apple
                </h2>
            </ImageContainer>

            <ImageContainer>
                <img src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=647&q=80" alt="" />
                
                <h2>
                    <span>Console</span>
                    Playstation
                </h2>
            </ImageContainer>
        </ImageContainerTotal>
    );
}