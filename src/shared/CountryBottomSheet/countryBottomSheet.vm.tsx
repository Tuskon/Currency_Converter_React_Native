import { useContext, useEffect, useState } from 'react';
import { RequestContext } from '@contexts/RequestContext';
import { useSelector } from 'react-redux';
import { RootState } from '@redux';
import { useAppDispatch } from '@redux';
import { listCountrysRequest } from '@redux/listCountrys/listCountrys.action';
import { resetGetListCountrysRequest } from '@redux/listCountrys/listCountrys.store';


export const useCountryBottomSheetViewModel = () => {

  const dispatch = useAppDispatch();
  const { handlerReducer } = useContext(RequestContext);
  const GetListCountrysRequestReducer = useSelector((state: RootState) => state.getListCountrysRequest);
  const [countries, setCountries] = useState<any[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<any[]>([]);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<boolean>(false);

  const getCountries = () => {
    dispatch(listCountrysRequest({}));
    setLoading(true);
    setError(false);
  };

  const retry = () => {
    getCountries();
  };

  const updateSearch = (value: string) => {

    setSearch(value);

    const filtered = countries.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredCountries(filtered);
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {

    handlerReducer(
      GetListCountrysRequestReducer,
      (response) => {
        const formattedCountries: any[][] = response.map(
          (item: any) => ({
            name: item.name?.common,
            currencies: item.currencies,
            flagPng: item.flags?.png,
          })
        );
        setCountries(formattedCountries);
        setFilteredCountries(formattedCountries);
        setLoading(false);
        dispatch(resetGetListCountrysRequest());
      },

      (statusCode, errorMessage) => {
        console.log(errorMessage);
        setError(true);
        setLoading(false);
        dispatch(resetGetListCountrysRequest());
      }, () => { }, false
    );
  }, [GetListCountrysRequestReducer]);

  return {
    loading,
    error,
    search,
    filteredCountries,
    updateSearch,
    retry,
  };
};