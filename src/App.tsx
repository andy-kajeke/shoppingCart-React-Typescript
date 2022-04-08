import React, { useState }from "react";
import { useQuery } from "react-query";
/**material components */
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from '@material-ui/core/Grid';
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import { CartItemType } from "./models/CartItemType";
import { GetAllProducts } from "./ServerRequests/ServerRequests";
import Item from "./compnents/item";
import Cart from "./compnents/Cart";
/**styles */
import { Wrapper, StyledButton } from "./App.styles";

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const {data, isLoading, error} = useQuery<CartItemType[]>(
    'products', 
    GetAllProducts
  );

  console.log(data);

  /** Get total items in the shopping cart */
  const getTotalItems = (items: CartItemType[]) => items.reduce((sum: number, item) => sum + item.quantity, 0);

  /** Add item to shopping cat */
  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      /**is item already in cart */
      const isItemInCart = prev.find(item => item.id === clickedItem.id)

      if(isItemInCart){
        return prev.map(item => (
          item.id === clickedItem.id ? {...item, quantity: item.quantity + 1} : item
        ))
      }
      else{
        return [...prev, {...clickedItem, quantity: 1}]
      }
    })
  };

  /** Remove item from shopping cart */
  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => 
      prev.reduce((list, item) => {
        if(item.id === id){
          if(item.quantity === 1){
            return list;
          }
          else{
            return [...list, {...item, quantity: item.quantity - 1}]
          }
        }
        else{
          return [...list, item]
        }
      }, [] as CartItemType[])
    );
  };
    

  if(isLoading) return <LinearProgress/>
  if(error) return <div>Something went wrong..</div>
  
  return (
    <div>
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          Shopping Cart in React with Typescript

          <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart 
          cartItems={cartItems} 
          addToCart={handleAddToCart} 
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>

      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCart/>
        </Badge>
      </StyledButton>
      
        </Typography>
      </Toolbar>
    </AppBar>
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map((pdt) => (
          <Grid item key={pdt.id} xs={6} sm={3}>
            <Item item={pdt} handleAddToCart={handleAddToCart}/>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
    </div>
  );
}

export default App;
