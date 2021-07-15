import { useDispatch, useSelector } from "react-redux";
import { selectCountries, selectLoading } from "./store/countries/selectors";
import { actions } from "./store/countries/slice";
import { useEffect } from "react";
import Loading from "./components/Loading/Loading";
import CountriesPage from "./pages/CountriesPage";

function App() {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(actions.fetchCountries());
  }, []);

  if (loading) return <Loading />;
  
  return <div>{countries && <CountriesPage />}</div>;
}

export default App;
