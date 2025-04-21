import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Image } from 'react-native';

const App = () => {
  // ''' State to store the user's favorite course '''
  const [favoriteCourse, setFavoriteCourse] = useState('');

  // ''' Predefined course lists based on assignment '''
  const coreCourses = [
    "CS504 -  Softwear Engineering",
    "CS506 - Programming for Computing",
    "CS519 - Cloud Computing Overview",
    "CS533 - Computer Architecture",
    "CS 547 - Security Systems and Programs",
    "CS 622 - Discrete Math and Algorithms for Computing",
    "CS510 - Artificial intelligence for Data Science",
    "DS 620 - Machine Learning & Deep Learning"
  ];

  const depthCourses = [
    "CS624  - Full-Stack Devolopment - Mobile App",
    "CS628 - Full-Stack Development - Wed App"
  ];

  const capstoneCourse = "CS698 - Capstone Project";

  return (
    <ScrollView style={styles.container}>
      {/* ''' App icon image at the top ''' */}
      <Image source={require('/workspaces/CS624-PE-Rajesh-kapparada/my-app-PE02-CoreComponents/assets/images/icon.png')} style={styles.icon} />

      {/* ''' App heading ''' */}
      <Text style={styles.heading}>MSCS Core Components App</Text>

      {/* ''' Text input for favorite course ''' */}
      <Text style={styles.label}>Enter Your Favorite Course:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        onChangeText={(text) => setFavoriteCourse(text)}
        value={favoriteCourse}
      />

      {/* ''' Display entered favorite course ''' */}
      {favoriteCourse !== '' && (
        <Text style={styles.favorite}>Your favorite course is: {favoriteCourse}</Text>
      )}

      {/* ''' Core courses list ''' */}
      <Text style={styles.sectionTitle}>Core Courses</Text>
      {coreCourses.map((course, index) => (
        <Text key={index} style={styles.courseItem}>{course}</Text>
      ))}

      {/* ''' Depth of study courses ''' */}
      <Text style={styles.sectionTitle}>Depth of Study Courses</Text>
      {depthCourses.map((course, index) => (
        <Text key={index} style={styles.courseItem}>{course}</Text>
      ))}

      {/* ''' Capstone course ''' */}
      <Text style={styles.sectionTitle}>Capstone Course</Text>
      <Text style={styles.courseItem}>{capstoneCourse}</Text>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  icon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  favorite: {
    fontSize: 16,
    color: '#2980b9',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#34495e',
  },
  courseItem: {
    fontSize: 16,
    paddingVertical: 5,
    color: '#555',
  },
});
