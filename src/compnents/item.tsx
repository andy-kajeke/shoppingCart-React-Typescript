import { Button } from "@material-ui/core";
import React from "react";
import { CartItemType } from "../models/CartItemType";
import { ItemWrapper } from "./item.style";

type ItemProps = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item = ({item, handleAddToCart}: ItemProps) => (
    <ItemWrapper>
        <img src={item.image} alt={item.title}/>
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>UGX {item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}>Add To Cart</Button>
    </ItemWrapper>
);


export default Item
