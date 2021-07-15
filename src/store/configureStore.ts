import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { reducer as countryReducer } from "../store/countries/slice";
import { countriesSaga } from "./countries/saga";
export const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  countriesState: countryReducer,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(countriesSaga);

export default store;
