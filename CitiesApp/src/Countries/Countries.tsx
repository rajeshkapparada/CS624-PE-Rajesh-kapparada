import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

interface Country {
  id: string;
  name: string;
  currency: string;
  population?: number;
  capital?: string;
}

interface CountriesProps {
  countries: Country[];
  navigation: any;
}

export default function Countries({ countries, navigation }: CountriesProps) {
  return (
    <View style={styles.container}>
      {countries.length === 0 ? (
        <Text style={styles.empty}>No countries added yet.</Text>
      ) : (
        <FlatList
          data={countries}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Country', { country: item })}
              style={styles.card}
            >
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.currency}>Currency: {item.currency}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  empty: { textAlign: 'center', marginTop: 20, fontSize: 16 },
  card: {
    backgroundColor: '#e8f0fe',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  name: { fontSize: 18, fontWeight: 'bold' },
  currency: { fontSize: 16, color: '#333' },
});
