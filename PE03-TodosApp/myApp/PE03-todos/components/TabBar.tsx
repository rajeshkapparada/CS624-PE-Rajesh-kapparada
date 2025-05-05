import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface TabBarProps {
  filter: 'All' | 'Complete' | 'Active';
  onFilterChange: (filter: 'All' | 'Complete' | 'Active') => void;
}

const TabBar: React.FC<TabBarProps> = ({ filter, onFilterChange }) => (
  <View style={styles.tabBar}>
    {(['All', 'Active', 'Complete'] as const).map((tab) => (
      <TouchableOpacity
        key={tab}
        style={[
          styles.tab,
          filter === tab && styles.activeTab,
        ]}
        onPress={() => onFilterChange(tab)}
      >
        <Text
          style={[
            styles.tabText,
            filter === tab && styles.activeTabText,
          ]}
        >
          {tab}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 16,
    color: '#888',
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default TabBar;
