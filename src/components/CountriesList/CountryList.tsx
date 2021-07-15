import React from "react";
import { useSelector } from "react-redux";
import { selectCountry } from "../../store/countries/selectors";

import CountryItem from "../CountryItem/CountryItem";
import styles from "./CountryList.module.scss";
const CountryList: React.FC = () => {
  const country = useSelector(selectCountry);

  let activeCases = 0;
  if (country?.latest && country?.latest?.recovered > 0) {
    activeCases =
      country?.latest?.confirmed -
      country?.latest?.deaths -
      country?.latest?.recovered;
  }
  return (
    <div className={styles.root}>
      <CountryItem
        latest={country?.latest?.confirmed}
        title="confirmed"
      />
      <CountryItem latest={activeCases} title="active" />
      <CountryItem latest={country?.latest?.deaths} title="deaths" />
      <CountryItem latest={country?.latest?.recovered} title="recovered" />
    </div>
  );
};

export default CountryList;
