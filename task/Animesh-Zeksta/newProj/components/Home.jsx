import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ProfileCard from './ProfileCard';
import axios from 'axios';

const Home = () => {
  const [connections, setConnections] = useState([]);

  const getRandomData = (array) => {
    const shuffledData = array.sort(() => Math.random() - 0.5);
    return shuffledData.slice(0, 5)
  };

  const fetchConnections = async () => {
    try {
      const response = await axios.get('https://ad5fd43ff3494e53ae90dfd8c03a23f9.api.mockbin.io/');
      const randomData = getRandomData(response.data);
      setConnections(randomData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.filter}>Filter</Text>
        <Text style={styles.header}>Daily Connections</Text>
        <TouchableOpacity style={styles.refreshButton}>
            <Text style={styles.refreshButtonText}>Refresh</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.listContainer} showsVerticalScrollIndicator={false}>
        {connections.map((connection, index) => ( 
          <ProfileCard key={index} connection={connection} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    paddingVertical: 50,
    paddingHorizontal: 20
  },
  filter:{
    textAlign: 'right',
    color: '#ce1694',
    fontSize: 16,
    fontWeight: 'bold'
  },
  header:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  refreshButton: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#ce1694',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 60,
    marginVertical: 10,
  },
  refreshButtonText:{
    color: '#ce1694',
    fontSize: 16,
    fontWeight: 'bold'
  },
  listContainer: {
    paddingBottom: 200
  },
});

export default Home;
