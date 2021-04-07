import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers/index";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const StateProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default StateProvider;
