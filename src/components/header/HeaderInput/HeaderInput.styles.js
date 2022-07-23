import styled from 'styled-components'; 

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props)=> props.theme.navElementbackground};
    border-radius: 10px;
    
    padding-left: 10px;
    
    input {
        border: none;
        outline: none;
        background-color: transparent;
        padding:15px 100px 15px 20px;
        color: inherit;

        ::placeholder{
            font-size: 16px;
            color: ${(props)=> props.theme.color}
        };
    }

    
`
export const SearchIcon = styled.img`
    height: 25px;
    filter: ${(props) => props.theme.iconColor};
    
`