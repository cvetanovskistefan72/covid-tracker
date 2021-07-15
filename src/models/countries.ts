import { AppState } from "./app";

export interface Country {
  id: number;
  country: string;
  province: string;
  latest?: Latest;
  timelines?: Timelines;
}

export interface Latest {
  confirmed: number;
  deaths: number;
  recovered: number;
}
export interface Timelines {
  confirmed: { timeline: {} };
  deaths: { timeline: {} };
  recovered: { timeline: {} };
}

export interface CountryState extends AppState {
  countries: Country[];
  country: Country | undefined;
  chartDataConfirmed: Array<string[]>;
  chartDataRecovered: Array<string[]>;
  chartDataDeaths: Array<string[]>;
}

export interface CountriesResponseData {
  locations: Country[];
}
