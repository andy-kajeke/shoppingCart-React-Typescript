import styled from "styled-components";

export const ItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid lightblue;
    border-radius: 20px;

    button {
        border-radius: 0 0 20px 20px;
    }

    img {
        max-height: 250px;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
    }

    div {
        font-family: Arial, Helvetical, sans-serif;
        padding: 1rem;
        height: 100%
    }
`;

export const CartWrapper = styled.aside`
    font-family: Arial, Helvetical, sans-serif;
    width: 400px;
    padding: 20px;
`;

export const CartItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetical, sans-serif;
    border-bottom: 1px solid lightblue;
    padding-bottom: 20px;

    div {
        flex: 1;
    }

    .information, 
    .buttons {
        display: flex;
        justify-content: space-between;
    }

    img {
        width: 100px;
        object-fit: cover;
        margin-left: 10px;
    }
`;