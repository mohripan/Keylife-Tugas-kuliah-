import Axios from 'axios';
import { CART_ADD_ITEM } from '../constants/CartConstants';

export const addToCart = (id) => async(dispatch, getState) => {
    const {data} = await Axios.get(`/api/products/${id}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image:data.image,
            price: data.price,
        },
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartitems));
}