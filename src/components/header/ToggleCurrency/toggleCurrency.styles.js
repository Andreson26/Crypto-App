import styled from "styled-components";

export const ToggleWrapper = styled.div`
 
`

export const CurrencyWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props)=> props.theme.elementBackground};
    border-radius:10px;
    padding: 10px;
    cursor: pointer;
    margin-left: 40px;

    label {
        color: green;
        background-color: black;
        border-radius: 50%;
        padding: 3px 8px;

    }
    
    h4 {
        margin: auto 5px auto 8px;
       }
`

export const ArrowsWrapper = styled.div`
    margin-top: 3px;
`

export const ArrowUp = styled.div`
    width: 0;
    height: 0px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom:6px solid green;
    margin-bottom: 2px: 
`

export const ArrowDown = styled.div`
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid green;
    margin-top: 2px;
    
`

