import {configureStore} from '@reduxjs/toolkit';
import CartSlice from "./redux/slices/CartSlice";
import CategorySlice from "./redux/slices/CategorySlice";
import SearchSlice from './redux/slices/SearchSlice';

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    category:CategorySlice,
    search:SearchSlice,
  },
});
export default Store;
