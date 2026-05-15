import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export const useConverterScreenViewModel = () => {

  const navigation = useNavigation<any>();

  const goInitial = () => {
    navigation.goBack()
  }

  return {
    goInitial
  };
};