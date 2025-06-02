import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import uuid from 'react-native-uuid';
import { colors } from '../components/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type City = {
  id: string;
  city: string;
  country: string;
  locations: { name: string; coordinates: number[] }[];
};

type Props = {
  addCity: (city: City) => void;
  navigation: NativeStackNavigationProp<any>;
};

export default function AddCity({ addCity, navigation }: Props) {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const validateInput = (text: string) => /^[a-zA-Z\s]+$/.test(text);

  const submit = () => {
    if (!validateInput(city) || !validateInput(country)) {
      Alert.alert('Invalid Input', 'Only letters and spaces are allowed.');
      return;
    }

    if (city.trim() === '' || country.trim() === '') {
      Alert.alert('Incomplete Form', 'Please fill in both fields.');
      return;
    }

    const newCity: City = {
      id: String(uuid.v4()),
      city,
      country,
      locations: [],
    };

    addCity(newCity);
    setCity('');
    setCountry('');
    navigation.navigate('Cities');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add a City</Text>
      <TextInput
        placeholder="City name"
        onChangeText={setCity}
        style={styles.input}
        value={city}
        autoCapitalize="words"
        returnKeyType="next"
      />
      <TextInput
        placeholder="Country name"
        onChangeText={setCountry}
        style={styles.input}
        value={country}
        autoCapitalize="words"
        returnKeyType="done"
      />
      <TouchableOpacity onPress={submit} style={styles.button}>
        <Text style={styles.buttonText}>Add City</Text>
      </TouchableOpacity>
    </View>
  );
}

const commonStyles = {
  borderRadius: 8,
  paddingHorizontal: 12,
  height: 50,
  fontSize: 16,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    color: 'white',
    fontSize: 36,
    marginBottom: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  input: {
    ...commonStyles,
    marginVertical: 10,
    backgroundColor: 'white',
  },
  button: {
    ...commonStyles,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
