import styled from "styled-components";

export const CoinsPaginationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PageSelection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;

    span {
        margin: 6px;
    }
`


export const ArrowLeft = styled.div`
    width: 0;
    height: 0px;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-right: 4px solid ${(props) => props.theme.color};
    margin-top: 4px;
    cursor: pointer;
`

export const ArrowRight = styled.div`
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-left: 4px solid ${(props)=> props.theme.color};
    margin-top: 4px;
    cursor: pointer;
`