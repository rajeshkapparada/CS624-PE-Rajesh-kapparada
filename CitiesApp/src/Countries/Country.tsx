import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface CountryProps {
  route: {
    params: {
      country: {
        name: string;
        currency: string;
        population?: number;
        capital?: string;
      };
    };
  };
  navigation: any;
}

export default function Country({ route, navigation }: CountryProps) {
  const { country } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{country.name}</Text>

      {country.capital && (
        <>
          <Text style={styles.label}>Capital:</Text>
          <Text style={styles.value}>{country.capital}</Text>
        </>
      )}

      {country.population && (
        <>
          <Text style={styles.label}>Population:</Text>
          <Text style={styles.value}>{country.population.toLocaleString()}</Text>
        </>
      )}

      <Text style={styles.label}>Currency:</Text>
      <Text style={styles.value}>{country.currency}</Text>

      <Button
        title="View Currency Info"
        onPress={() =>
          navigation.navigate('Currency', {
            countryName: country.name,
            currency: country.currency,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf0',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#3f51b5',
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    color: '#555',
    marginTop: 10,
  },
  value: {
    fontSize: 20,
    fontWeight: '500',
    color: '#1e88e5',
    marginBottom: 10,
  },
});
