import axios from "axios";
import { Dispatch } from "redux";
import { CovidDataAction, CovidDataTypes } from "../../types/covidData";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<CovidDataAction>) => {
    try {
      dispatch({ type: CovidDataTypes.FETCH_COVID_DATA });
      const response = await axios.get(
        "https://covidapi.info/api/v1/country/IND/timeseries/2020-03-15/2020-03-20"
      );
      dispatch({
        type: CovidDataTypes.FETCH_COVID_DATA_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CovidDataTypes.FETCH_COVID_DATA_ERROR,
        payload: "Błąd przy pobieraniu danych",
      });
    }
  };
};
