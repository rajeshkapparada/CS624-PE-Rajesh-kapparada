import React, { useState, createContext, useContext, lazy, Suspense } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';

const Cities = lazy(() => import('../../src/Cities/Cities'));
const AddCity = lazy(() => import('../../src/AddCity/AddCity'));
const AddCountry = lazy(() => import('../../src/AddCountry/AddCountry'));
const Countries = lazy(() => import('../../src/Countries/Countries'));

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Create context for Cities & Countries
const CitiesContext = createContext();
const CountriesContext = createContext();

export function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const addCity = (city) => setCities((prevCities) => [...prevCities, city]);

  return <CitiesContext.Provider value={{ cities, addCity }}>{children}</CitiesContext.Provider>;
}

export function CountriesProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const addCountry = (country) => setCountries((prevCountries) => [...prevCountries, country]);

  return <CountriesContext.Provider value={{ countries, addCountry }}>{children}</CountriesContext.Provider>;
}

function CitiesStackScreen() {
  const { cities } = useContext(CitiesContext);
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cities">{(props) => <Cities {...props} cities={cities} />}</Stack.Screen>
    </Stack.Navigator>
  );
}

function AppTabs() {
  const { addCity, cities } = useContext(CitiesContext);
  const { addCountry, countries } = useContext(CountriesContext);

  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <Tab.Navigator>
        <Tab.Screen name="Cities">{(props) => <CitiesStackScreen {...props} cities={cities} />}</Tab.Screen>
        <Tab.Screen name="Add City">{(props) => <AddCity {...props} addCity={addCity} />}</Tab.Screen>
        <Tab.Screen name="Add Country">{(props) => <AddCountry {...props} addCountry={addCountry} />}</Tab.Screen>
        <Tab.Screen name="Countries">{(props) => <Countries {...props} countries={countries} />}</Tab.Screen>
      </Tab.Navigator>
    </Suspense>
  );
}

export default function Index() {
  return (
    <CitiesProvider>
      <CountriesProvider>
        <AppTabs />
      </CountriesProvider>
    </CitiesProvider>
  );
}
