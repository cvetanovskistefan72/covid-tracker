import React from "react";
import { useSelector } from "react-redux";
import NumberFormat from "react-number-format";
import {
  selectLoadingCountry,
} from "../../store/countries/selectors";
import LoadingCountry from "../LoadingCountry/LoadingCountry";
import styles from "./CountryItem.module.scss";
interface CountryItemProps {
  title: string;
  latest: number | undefined;
}
const CountryItem: React.FC<CountryItemProps> = ({ latest, title }) => {
  const loading = useSelector(selectLoadingCountry);
  return (
    <div className={`${styles.root} ${styles[title]}`}>
      {loading ? (
        <LoadingCountry />
      ) : (
        <div className={styles.header}>
          <div>
            <h2>{title}</h2>
          </div>
          <div>
            <h1>
              {latest && latest > 0 ? (
                <NumberFormat
                  thousandSeparator={true}
                  value={latest}
                  displayType={"text"}
                />
              ) : (
                "N/A"
              )}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryItem;
