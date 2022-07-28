import styled from "styled-components";

export const TableContainer = styled.div`
    margin: auto 90px;
    background-color: ${(props) => props.theme.overviewBackground};
    border-radius: 10px;

    hr{
        color: ${(props) => props.theme.color};
        margin: 0;
        padding: 0;
    }
`