import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Heading: React.FC = () => (
  <View style={styles.header}>
    <Text style={styles.title}>todos</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: '200',
    color: '#e3bebe', // Subtle pink as per screenshot
    letterSpacing: 2,
  },
});

export default Heading;
