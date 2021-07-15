import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/countries/slice";
import Chart from "../components/Chart/Chart";
import CountryList from "../components/CountriesList/CountryList";
import Search from "../components/Search/Search";
import styles from "./Countries.module.scss";
import { selectChartDataConfirmed, selectChartDataDeaths, selectChartDataRecovered, selectCountry } from "../store/countries/selectors";

const CountriesPage = () => {
  const dispatch = useDispatch();
      const chartDataRecovered = useSelector(selectChartDataRecovered);
      const chartDataConfirmed = useSelector(selectChartDataConfirmed);
      const chartDataDeaths = useSelector(selectChartDataDeaths);
  const getCountry = (id: number) => {
    dispatch(actions.fetchCountry(id));
  };

  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <Search getCountry={getCountry} />
        <CountryList />
      </div>
      <div className={styles.right}>
        <Chart
          title="Confirmed"
          color="white"
          borderColor="#d4ac0d"
          chartData={chartDataConfirmed}
        />
        <Chart
          title="Recovered"
          color="white"
          borderColor="#16a085"
          chartData={chartDataRecovered}
        />
        <Chart
          title="Deaths"
          color="white"
          borderColor="#e74c3c"
          chartData={chartDataDeaths}
        />
      </div>
    </div>
  );
};

export default CountriesPage;
