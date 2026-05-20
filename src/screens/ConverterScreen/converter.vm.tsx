import { useNavigation } from '@react-navigation/native';
import { RequestContext } from '@contexts/RequestContext';
import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@redux';
import { useAppDispatch } from '@redux';
import { listCountrysRequest } from '@redux/listCountrys/listCountrys.action';
import { resetGetListCountrysRequest } from '@redux/listCountrys/listCountrys.store';
import { ListCountryInteface } from '@redux/listCountrys/models/listCountrys.models';
import { Country } from '@models/country';

export const useConverterScreenViewModel = () => {
  const [isVisibleCountryList, setIsVisibleCountryList] = useState<boolean>(false)
  const [isForFirstCountry, setIsForFirstCountry] = useState<boolean | null>(null)
  const [firstCountry, setFirstCountry] = useState<Country | null>(null)
  const [secondCountry, setSecondCountry] = useState<Country | null>(null)


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

  return {
    isVisibleCountryList,
    setIsVisibleCountryList,
    showList,
    closeList,
    setItems,
    firstCountry,
    secondCountry
  };
};