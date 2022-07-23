import styled from "styled-components";

export const ToggleWrapper = styled.div`
 
`

export const CurrencyWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props)=> props.theme.navElementbackground};
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
        margin: auto 8px auto 15px;
       }
`

/*div {
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    background-color: transparent;
    border: none;
}*/
