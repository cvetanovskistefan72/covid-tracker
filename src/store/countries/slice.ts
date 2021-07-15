import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Country, CountryState } from "../../models/countries";

export const initialState: CountryState = {
  countries: [],
  country: undefined,
  loading: false,
  loadingCountry: false,
  chartDataConfirmed: [[]],
  chartDataDeaths: [[]],
  chartDataRecovered: [[]],
};
const userSlice = createSlice({
  name: "countriesSlice",
  initialState,
  reducers: {
    fetchCountries(state) {
      state.loading = true;
    },
    setCountries(state, { payload }: PayloadAction<Country[]>) {
      state.countries = payload.map((country) => {
        return {
          id: country.id,
          country: country.country,
          province: country.province,
        };
      });
      state.loading = false;
    },
    fetchCountry(state, { payload }: PayloadAction<number>) {
      state.loadingCountry = true;
    },
    setCountry(state, { payload }: PayloadAction<Country>) {
      state.loadingCountry = false;
      if (payload?.timelines) {
        state.chartDataConfirmed = Object.entries(
          payload?.timelines?.confirmed.timeline
        );
        state.chartDataRecovered = Object.entries(
          payload?.timelines?.recovered.timeline
        );
        state.chartDataDeaths = Object.entries(
          payload?.timelines?.deaths.timeline
        );
      }
      state.country = payload;
    },
  },
});

export const { actions, reducer, name: sliceName } = userSlice;
