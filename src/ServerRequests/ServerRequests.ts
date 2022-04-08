import { CartItemType } from "../models/CartItemType";
import ServerConnection from "../constants/constants";

export const GetAllProducts = async(): Promise<CartItemType[]> => await (await fetch(ServerConnection.GET_ALL_PROUDUCTS_URL)).json();