import styled from "styled-components";

export const FilterCoinsTableTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        filter: white;
    }
`

export const ArrowsWrapper = styled.div`
    margin-top:10px;
`

export const ArrowUp = styled.div`
    width: 0;
    height: 0px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid ${(props) => props.theme.color};
    margin-bottom: 4px: 
    cursor: pointer;
`

export const ArrowDown = styled.div`
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid ${(props)=> props.theme.color};
    margin-top: 4px;
    cursor: pointer;
`
export const FilterCoinsTableTitleIcons = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5px;
`

export const FilterCoinsTableTitleText = styled.div`
    margin: 10px;

    span {
        font-size: 20px;
     }
`



