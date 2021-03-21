import { combineReducers } from "redux";
import { covidDataReducer } from "./covidDataReducer";

export const rootReducer = combineReducers({
  covidData: covidDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
