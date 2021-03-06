import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./ReducerIndex";

export default function configureStore(initialState) {
  return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk)
  );
}