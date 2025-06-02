import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../components/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type City = {
  id: string;
  city: string;
  country: string;
  locations: { name: string; coordinates: number[] }[];
};

type Props = {
  cities: City[];
  navigation: NativeStackNavigationProp<any>;
};

export default function Cities({ cities, navigation }: Props) {
  const navigateToCity = (city: City) => {
    navigation.navigate('City', { city });
  };

  return (
    <View style={styles.container}>
      {cities.length === 0 ? (
        <CenterMessage message="No saved cities!" />
      ) : (
        <FlatList
          data={cities}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable onPress={() => navigateToCity(item)} style={styles.cityContainer}>
              <Text style={styles.city}>{item.city}</Text>
              <Text style={styles.country}>{item.country}</Text>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  cityContainer: {
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  city: {
    fontSize: 20,
    fontWeight: '600',
  },
  country: {
    color: colors.secondaryText || 'rgba(0, 0, 0, .5)',
    fontSize: 14,
  },
});
