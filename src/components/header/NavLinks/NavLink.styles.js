import styled from "styled-components";
import { Link } from "react-router-dom"

export const LinksWrapper = styled.li`
    list-style: none;    
`
export const LinkTag = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    padding: 10px 20px;
    margin: 20px;
    border-radius: 10px;
    color: ${(props)=> props.theme.color};

    &:active {
        background-color: ${(props)=> props.theme.navElementbackground};  
    }

    &:focus {
        background-color: ${(props)=> props.theme.navElementbackground};   
    }
    
`
   