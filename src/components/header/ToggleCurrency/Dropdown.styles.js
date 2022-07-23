import styled from "styled-components";

export const DropdownWrapper = styled.div`
    position: absolute;
    right: 10%;
    top: 11%;
    border-radius: 10px;
    background-color: ${(props)=> props.theme.navElementbackground}; 
    padding: 10px;
    cursor: pointer;

    li {
        display: flex;
        list-style: none;
        padding: 10px 15px;
        border-radius: 10px;

        :hover {
            background-color: ${(props) => props.theme.navBackground};
        }

        span {
            color: green;
            background-color: black;
            border-radius: 50%;
            padding:  2px 8px;
        }

        h4 {
            margin: auto 8px auto 15px;
        }
    }
`