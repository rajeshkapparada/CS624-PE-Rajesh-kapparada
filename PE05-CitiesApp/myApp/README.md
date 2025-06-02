#Input 
The CitiesApp, built with Expo Router and TypeScript, lets users add information through forms. In the AddCity screen, users type a city name and country in text boxes. In the AddCountry screen, users enter a country name and its currency. The app checks that these fields aren’t empty. When users press the “submit” button, the app saves the data with a unique ID created by a tool called react-native-uuid.

#Process
 The app saves user data using a simple storage system called Zustand. It keeps lists of cities and countries. The app adds new cities, locations within cities, or countries to these lists. Expo Router uses files to control screen navigation, with app/_layout.tsx setting up four tabs (Cities, AddCity, AddCountry, Countries) and app/city/[id].tsx showing city details.

#Output 
The app shows cities in a scrollable list on the Cities screen, where users can tap to see city locations. The Countries screen lists countries and their currencies. If no data is added, the app displays “No saved cities!” or “No saved countries!” using a CenterMessage component.
