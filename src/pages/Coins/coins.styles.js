import styled from "styled-components";

export const StyledBody = styled.div`
    background-color: ${(props) => props.theme.bodyBackground};
    color: ${(props)=> props.theme.color};
    margin: 0;
`