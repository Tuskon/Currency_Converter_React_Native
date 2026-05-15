import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InitialScreen } from '../screens/InitialScreen';
import { ConverterScreen } from '../screens/ConverterScreen';

const CurrencyStack = createNativeStackNavigator();

function CurrencyNavigator() {
  return (
    <CurrencyStack.Navigator initialRouteName='InitialScreen' screenOptions={{ headerShown: false }}>
      <CurrencyStack.Screen name="InitialScreen" component={InitialScreen} />
      <CurrencyStack.Screen name="ConverterScreen" component={ConverterScreen} />
    </CurrencyStack.Navigator>
  );
}


export default function Navigator() {

  return (
    <NavigationContainer>
      <CurrencyNavigator/>
    </NavigationContainer>
  );
}