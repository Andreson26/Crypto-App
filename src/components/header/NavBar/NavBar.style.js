import styled from 'styled-components';

export const StyleNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props)=> props.theme.background};
    color: ${(props)=> props.theme.color};
    padding: 20px 50px;
    font-weight: 700;   
`
export const RightNav = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 0 20px;
`