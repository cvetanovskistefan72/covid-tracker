import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCountries } from "../../store/countries/selectors";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { defaultCountryIndex } from "../../config/config";
import styles from "./Search.module.scss";
interface SearchProps {
  getCountry: Function;
}
const Search: React.FC<SearchProps> = ({ getCountry }) => {
  const countries = useSelector(selectCountries);
  const [country, setCountry] = useState(defaultCountryIndex);

  useEffect(() => {
    getCountry(country);
  }, [country]);

  return (
    <div className={styles.root}>
      <Autocomplete
        options={countries}
        getOptionLabel={(option) => `${option.country} ${option.province}`}
        onChange={(e, value) => {
          if (value) setCountry(value.id);
        }}
        style={{ width: 300 }}
        defaultValue={countries[defaultCountryIndex]}
        renderInput={(params) => (
          <TextField {...params} label="Country" variant="outlined" />
        )}
      />
    </div>
  );
};

export default Search;
