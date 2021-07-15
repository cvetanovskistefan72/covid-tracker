import { PayloadAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { takeLatest, call, put, take } from "redux-saga/effects";
import { getCountries, getCountry } from "../../api/api";
import { CountriesResponseData, Country } from "../../models/countries";
import { actions } from "./slice";

function* handleGetCountries() {
  try {
    const data: CountriesResponseData = yield getCountries();
    yield put(actions.setCountries(data.locations));
  } catch (error) {
    console.log(error);
  }
}

function* handleGetCountry({ payload }: PayloadAction<number>) {
  try {
    const data: Country = yield getCountry(payload);
    yield put(actions.setCountry(data))
  } catch (error) {
    console.log(error);
  }
}

export function* countriesSaga() {
  yield takeLatest(actions.fetchCountries.type, handleGetCountries);
  yield takeLatest(actions.fetchCountry.type, handleGetCountry);
}
