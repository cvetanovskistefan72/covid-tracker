import { createSelector } from "reselect";
import { RootState } from "../../models/app";

const selectDomain = (state: RootState) => state.countriesState;

export const selectCountries = createSelector(
  selectDomain,
  (state) => state.countries
);

export const selectCountry = createSelector(
  selectDomain,
  (state) => state.country
);
export const selectLoadingCountry = createSelector(
  selectDomain,
  (state) => state.loadingCountry
);

export const selectChartDataConfirmed = createSelector(
  selectDomain,
  (state) => state.chartDataConfirmed
);
export const selectChartDataRecovered = createSelector(
  selectDomain,
  (state) => state.chartDataRecovered
);
export const selectChartDataDeaths = createSelector(
  selectDomain,
  (state) => state.chartDataDeaths
);

export const selectLoading = createSelector(
  selectDomain,
  (state) => state.loading
);
