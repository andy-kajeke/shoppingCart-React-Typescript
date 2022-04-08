import { Button } from "@material-ui/core";
import { CartItemType } from "../models/CartItemType";
import { CartItemWrapper } from "./item.style";
import React from 'react'

type CartItemProps = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const CartItem = ({item, addToCart, removeFromCart}: CartItemProps) => {
    return (
        <CartItemWrapper>
            <div>
                <h3>{item.title}</h3>
                <div className="information">
                    <p>Price: UGX {item.price}</p>
                    <p>Total: UGX {(item.quantity * item.price).toFixed(2)}</p>
                </div>
                <div className="buttons">
                    <Button size="small" disableElevation variant="contained" onClick={() => removeFromCart(item.id)}> - </Button>
                    <p>{item.quantity}</p>
                    <Button size="small" disableElevation variant="contained" onClick={() => addToCart(item)}> + </Button>
                </div>
            </div>
            <img src={item.image} alt={item.title}/>
        </CartItemWrapper>
    )
}

export default CartItem