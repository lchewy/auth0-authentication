import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";
import registerServiceWorker from "./registerServiceWorker";
// import { BrowserRouter } from "react-router-dom";
import reducers from "./reducers";
import App from "./components/App";

// import Auth from "./utils/Auth";

// const auth = new Auth();

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
