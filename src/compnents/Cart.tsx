import React from 'react'
import CartItem from "./CartItem";
import { CartWrapper } from "./item.style";
import { CartItemType } from "../models/CartItemType";

type CartProps = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const Cart = ({cartItems, addToCart, removeFromCart}: CartProps) => {
    const calculatTotalPrice = (items: CartItemType[]) => {
        return items.reduce((totalPrice: number, item) => totalPrice + (item.quantity * item.price), 0);
    }

    return (
        <CartWrapper>
            <h2>Your Shopping Cart</h2><hr/>
            {cartItems.length === 0 ? <p>No items in cart</p> : null}
            {cartItems.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}

            <h3>Total Amount: UGX {calculatTotalPrice(cartItems).toFixed(2)}</h3>
        </CartWrapper>
    )
}

export default Cart