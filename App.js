import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import { INCREASE, DECREASE } from "./action";
import reducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
};
const store = createStore(reducer, initialState);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />

      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
