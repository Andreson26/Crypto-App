import styled from "styled-components";

export const Form = styled.form`
    padding: 10px 15px;
    background-color: ${(props) => props.theme.navElementbackground};
    border-radius: 10px;
    margin-left: 40px;

`

export const StyleLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 30px;
    height: 25px;

    input[type="checkbox"] {
        display: none;
    }

    span {
        position: absolute;
        cursor: pointer;
        background-color: ${(props)=> props.theme.navBackground};
        border-radius: 25px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transition: background-color 0.5s ease;
    }

    span::before {
        position: absolute;
        content: "";
        left: 0px;
        top: 2px;
        width: 20px;
        height: 21px;
        background-color: ${(props)=> props.theme.color};
        border-radius: 50%;
        transition: transform 0.5s ease;
     }

     input[type="checkbox"]:checked + span::before {
        transform: translateX(10px);
        background-color: ${(props)=> props.theme.color};
     }

     input[type="checkbox"]:checked + span {
        background-color: ${(props)=> props.theme.navBackground};
      }
`

