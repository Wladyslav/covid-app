import {
  CovidDataAction,
  CovidDataTypes,
  CovidDataState,
} from "../../types/covidData";

const initialState: CovidDataState = {
  covidData: {},
  loading: false,
  error: null,
};

export const covidDataReducer = (
  state = initialState,
  action: CovidDataAction
): CovidDataState => {
  switch (action.type) {
    case CovidDataTypes.FETCH_COVID_DATA:
      return { loading: true, error: null, covidData: {} };
    case CovidDataTypes.FETCH_COVID_DATA_SUCCESS:
      return { loading: false, error: null, covidData: action.payload };
    case CovidDataTypes.FETCH_COVID_DATA_ERROR:
      return { loading: false, error: action.payload, covidData: {} };
    default:
      return state;
  }
};
