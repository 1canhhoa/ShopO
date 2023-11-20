import userReducer from "./reducers/user";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import sellerReducer from "./reducers/seller";
import orderReducer from "./reducers/order";
import productReducer from "./reducers/product";
import eventReducer from "./reducers/event";
import cartReducer from "./reducers/cart";
import addressReducer from "./reducers/address";
import chatReducer from "./reducers/chat";
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['user', 'cart']
}
const rootReducer = combineReducers({
  user: userReducer,
  seller: sellerReducer,
  product: productReducer,
  event: eventReducer,
  cart: cartReducer,
  address: addressReducer,
  order: orderReducer,
  chat: chatReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
});
let persistor = persistStore(store)
export default persistor;