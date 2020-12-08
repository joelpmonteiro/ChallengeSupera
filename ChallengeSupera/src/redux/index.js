import {configureStore} from '@reduxjs/toolkit';

import reduxCart from './cart/cart';

export default configureStore({
  reducer: {
    cart: reduxCart,
  },
});
