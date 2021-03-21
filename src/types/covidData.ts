// interface UserCompany {
//   name: string;
//   catchPhrase: string;
//   bs: string;
// }

// interface UserAddressCoordinate {
//   lat: string;
//   lng: string;
// }

// interface UserAddress {
//   street: string;
//   suite: string;
//   city: string;
//   zipcode: string;
//   geo: UserAddressCoordinate;
// }

// interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   phone: string;
//   website: string;
//   address: UserAddress;
//   company: UserCompany;
// }
interface CovidDataResult {
  confirmed: number;
  date: string;
  deaths: number;
  recovered: number;
}

interface CovidData {
  result?: CovidDataResult[];
}

export interface CovidDataState {
  covidData: CovidData;
  loading: boolean;
  error: null | string;
}

export enum CovidDataTypes {
  FETCH_COVID_DATA = "FETCH_COVID_DATA",
  FETCH_COVID_DATA_SUCCESS = "FETCH_COVID_DATA_SUCCESS",
  FETCH_COVID_DATA_ERROR = "FETCH_COVID_DATA_ERROR",
}
interface FetchCovidAction {
  type: CovidDataTypes.FETCH_COVID_DATA;
}
interface FetchCovidActionSuccess {
  type: CovidDataTypes.FETCH_COVID_DATA_SUCCESS;
  payload: CovidData;
}
interface FetchCovidActionError {
  type: CovidDataTypes.FETCH_COVID_DATA_ERROR;
  payload: string;
}

export type CovidDataAction =
  | FetchCovidAction
  | FetchCovidActionSuccess
  | FetchCovidActionError;
