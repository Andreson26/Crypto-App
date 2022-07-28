import styled from "styled-components";

export const CoinsTypesWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        margin: 5px;
        background-color: ${(props) => props.theme.elementBackground};
        padding: 5px 10px;
        border-radius: 10px;
        cursor: pointer;

        :active {
            background-color: #06D554;
        }
    }
`