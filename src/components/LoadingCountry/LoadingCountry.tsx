import React from "react";
import styles from "./LoadingCountry.module.scss";
interface LoadingCountryProps {
  color?: string;
}
const LoadingCountry: React.FC<LoadingCountryProps> = ({ color }) => {
  return (
    <div>
      <div className={styles.ldsRing}>
        <div
          style={{
            borderColor: `${
              color || "white"
            } transparent transparent transparent`,
          }}
        ></div>
        <div
          style={{
            borderColor: `${
              color || "white"
            } transparent transparent transparent`,
          }}
        ></div>
        <div
          style={{
            borderColor: `${
              color || "white"
            } transparent transparent transparent`,
          }}
        ></div>
        <div
          style={{
            borderColor: `${
              color || "white"
            } transparent transparent transparent`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingCountry;
