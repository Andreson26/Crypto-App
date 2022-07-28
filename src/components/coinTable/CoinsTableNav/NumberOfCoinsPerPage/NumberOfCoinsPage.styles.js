import styled from "styled-components";

export const NumberOfCoinsPerPageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RowSelection = styled.div`
    display: flex;
    align-tems: center;
    justify-content: center;
    margin-left: 10px;
    padding: 5px 10px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.elementBackground}
`

export const ArrowDown = styled.div`
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid ${(props)=> props.theme.color};
    margin-top: 10px;
    margin-left: 10px;
    cursor: pointer;
`