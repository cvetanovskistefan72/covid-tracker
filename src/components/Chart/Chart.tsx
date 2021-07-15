import React from "react";
import Bar from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
  selectCountry,
  selectLoadingCountry,
} from "../../store/countries/selectors";
import LoadingCountry from "../LoadingCountry/LoadingCountry";
import dateFormat from 'dateformat';
import styles from "./Chart.module.scss";
interface ChartProps {
  title: string;
  color: string;
  borderColor: string;
  chartData: Array<string[]>;
}

const Chart: React.FC<ChartProps> = ({ title, color, borderColor, chartData }) => {
  const loading = useSelector(selectLoadingCountry);
  const dates = chartData.map((x, i) => {
    if (i % 9 === 0) return dateFormat(x[0], "longDate");
  });
  const numbers = chartData.map((x, i) => {
    if (i % 9  === 0) return x[1];
  });
  return (
    <div className={styles.root}>
      {loading ? (
        <LoadingCountry color="black" />
      ) : (
        <>
          {chartData && (
            <Bar
              data={{
                labels: dates,
                datasets: [
                  {
                    label: title,
                    backgroundColor: color,
                    borderColor: borderColor,
                    data: numbers,
                  },
                ],
              }}
              width={1000}
              height={300}
              options={{ maintainAspectRatio: false }}
              type="line"
            />
          )}
        </>
      )}
    </div>
  );
};

export default Chart;
