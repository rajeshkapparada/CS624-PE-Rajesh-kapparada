import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CurrencyProps {
  route: {
    params: {
      currency: string;
      countryName: string;
    };
  };
}

export default function Currency({ route }: CurrencyProps) {
  const { currency, countryName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Currency Info</Text>
      <Text style={styles.label}>Country:</Text>
      <Text style={styles.value}>{countryName}</Text>

      <Text style={styles.label}>Currency Used:</Text>
      <Text style={styles.currency}>{currency}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5faff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#1a237e',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    color: '#37474f',
  },
  value: {
    fontSize: 20,
    marginBottom: 20,
    color: '#00796b',
  },
  currency: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginTop: 5,
  },
});
