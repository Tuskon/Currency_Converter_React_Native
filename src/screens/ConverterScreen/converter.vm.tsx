import { useNavigation } from '@react-navigation/native';
import { RequestContext } from '@contexts/RequestContext';
import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@redux';
import { useAppDispatch } from '@redux';
import { currencyValueRequest } from '@redux/currencyValue/currencyValue.action';
import { resetGetCurrencyValueRequest } from '@redux/currencyValue/currencyValue.store';
import { Country } from '@models/country';

export const useConverterScreenViewModel = () => {
  const dispatch = useAppDispatch();
  const { handlerReducer } = useContext(RequestContext);
  const GetCurrencyValueRequestReducer = useSelector((state: RootState) => state.getCurrencyValueRequest);
  const [loadingFirst, setLoadingFirst] = useState<boolean>(false);
  const [loadingSecond, setLoadingSecond] = useState<boolean>(false);
  const [isVisibleCountryList, setIsVisibleCountryList] = useState<boolean>(false)
  const [isForFirstCountry, setIsForFirstCountry] = useState<boolean | null>(null)
  const [firstCountry, setFirstCountry] = useState<Country | null>(null)
  const [secondCountry, setSecondCountry] = useState<Country | null>(null)
  const [rateValue, setRateValue] = useState<number | null>(null)
  const [amountValue, setAmountValue] = useState<string | null>(null);
  const [convertedValue, setConvertedValue] = useState<string | null>(null);
  const [isEditingAmount, setIsEditingAmount] = useState(true);


  const showList = (fisrtList: boolean) => {
    setIsVisibleCountryList(true)
    setIsForFirstCountry(fisrtList)
  }

  const setItems = (items: any) => {
    let data = {
      name: items.name,
      currencies: Object.keys(items.currencies)[0],
      flagPng: items.flagPng
    }
    if (isForFirstCountry) {
      setFirstCountry(data)
      setIsVisibleCountryList(false)
      setIsForFirstCountry(null)
    } else {
      setSecondCountry(data)
      setIsVisibleCountryList(false)
      setIsForFirstCountry(null)
    }
  }

  const closeList = () => {
    setIsVisibleCountryList(false)
    setIsForFirstCountry(null)
  }

  useEffect(() => {
    if (firstCountry !== null && secondCountry !== null) {
      const params = {
        firstCountry: firstCountry.currencies,
        secondCountry: secondCountry.currencies
      }
      setLoadingSecond(true)
      dispatch(currencyValueRequest(params))
    }
  }, [firstCountry])

  useEffect(() => {
    if (firstCountry !== null && secondCountry !== null) {
      const params = {
        firstCountry: firstCountry.currencies,
        secondCountry: secondCountry.currencies
      }
      setLoadingFirst(true)
      dispatch(currencyValueRequest(params))
    }
  }, [secondCountry])


  useEffect(() => {

    handlerReducer(
      GetCurrencyValueRequestReducer,
      (response) => {
        console.log(response)
        setRateValue(response.rate)
        setLoadingFirst(false)
        setLoadingSecond(false)
        dispatch(resetGetCurrencyValueRequest());
      },
      (statusCode, errorMessage) => {
        console.log(errorMessage);
        setLoadingFirst(false)
        setLoadingSecond(false)
        dispatch(resetGetCurrencyValueRequest());
      }, () => { }, false
    );
  }, [GetCurrencyValueRequestReducer]);

  useEffect(() => {
    console.log(rateValue)
  }, [rateValue])

  useEffect(() => {
    if (!rateValue) return;

    if (isEditingAmount) {
      if (amountValue && amountValue.length > 0) {
        const result = String(Number(Number(amountValue) * rateValue).toFixed(2));
        setConvertedValue(result);
      }
    } else {
      if (convertedValue && convertedValue.length > 0) {
        const result = String(Number(Number(convertedValue) / rateValue).toFixed(2));
        setAmountValue(result);
      }
    }
  }, [amountValue, convertedValue, rateValue, isEditingAmount]);

  return {
    isVisibleCountryList,
    setIsVisibleCountryList,
    showList,
    closeList,
    setItems,
    firstCountry,
    secondCountry,
    loadingFirst,
    loadingSecond,
    amountValue,
    setAmountValue,
    convertedValue,
    setConvertedValue,
    setIsEditingAmount
  };
};