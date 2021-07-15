import React, { useRef } from "react";
import Bar from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
  selectCountry,
  selectLoadingCountry,
} from "../../store/countries/selectors";
import LoadingCountry from "../LoadingCountry/LoadingCountry";
import dateFormat from "dateformat";
import styles from "./Chart.module.scss";
interface ChartProps {
  title: string;
  color: string;
  borderColor: string;
  chartData: Array<string[]>;
}

const Chart: React.FC<ChartProps> = ({
  title,
  color,
  borderColor,
  chartData,
}) => {
  const loading = useSelector(selectLoadingCountry)
  const dates = chartData.map((x, i) => {
    if (i % 2 === 0) return dateFormat(x[0], "longDate").toString();
  });
  const numbers = chartData.map((x, i) => {
    if (i % 2 === 0) return x[1];
  });
  return (
    <div className={styles.root}>
      {!loading ? (
        <>
          {dates && numbers && dates.length && numbers.length && (
            <Bar
              data={{
                labels: dates,
                datasets: [
                  {
                    label: title,
                    borderColor: borderColor,
                    backgroundColor: borderColor,
                    data: numbers,
                    barThickness: 5,
                    fill: true,
                  },
                ],
              }}
              height={300}
              options={{
                maintainAspectRatio: false,
                spanGaps: true,
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
              type="line"
            />
          )}
        </>
      ) : (
        <LoadingCountry color="black" />
      )}
    </div>
  );
};

export default Chart;
