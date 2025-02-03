import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [kids, setKids] = useState([
    { id: '1', name: 'Amalia', image: require('./assets/Amalia.jpg'), selected: false },
    { id: '2', name: 'Andrii', image: require('./assets/Andrii.jpg'), selected: false },
    { id: '3', name: 'Anna', image: require('./assets/Anna.jpg'), selected: false },
    { id: '4', name: 'Arya', image: require('./assets/Arya.jpg'), selected: false },
    { id: '5', name: 'Aylin', image: require('./assets/Aylin.jpg'), selected: false },
    { id: '6', name: 'Bayyan', image: require('./assets/Bayyan.jpg'), selected: false },
    { id: '7', name: 'Berfien', image: require('./assets/Berfien.jpg'), selected: false },
    { id: '8', name: 'Cristian', image: require('./assets/Cristian.jpg'), selected: false },
    { id: '9', name: 'Diana', image: require('./assets/Diana.jpg'), selected: false },
    { id: '10', name: 'Emma', image: require('./assets/Emma.jpg'), selected: false },
    { id: '11', name: 'Fiego', image: require('./assets/Fiego.jpg'), selected: false },
    { id: '12', name: 'Franzziska', image: require('./assets/Franzziska.jpg'), selected: false },
    { id: '13', name: 'Jana', image: require('./assets/Jana.jpg'), selected: false },
    { id: '14', name: 'Johanna', image: require('./assets/Johanna.jpg'), selected: false },
    { id: '15', name: 'Larin', image: require('./assets/Larin.jpg'), selected: false },
    { id: '16', name: 'Lea', image: require('./assets/Lea.jpg'), selected: false },
    { id: '17', name: 'Lein', image: require('./assets/Lein.jpg'), selected: false },
    { id: '18', name: 'Leo', image: require('./assets/Leo.jpg'), selected: false },
    { id: '19', name: 'Liam', image: require('./assets/Liam.jpg'), selected: false },
    { id: '20', name: 'Louis', image: require('./assets/Louis.jpg'), selected: false },
    { id: '21', name: 'Maila', image: require('./assets/Maila.jpg'), selected: false },
    { id: '22', name: 'Malu', image: require('./assets/Malu.jpg'), selected: false },
    { id: '23', name: 'Marie', image: require('./assets/Marie.jpg'), selected: false },
    { id: '24', name: 'Mayla', image: require('./assets/Mayla.jpg'), selected: false },
    { id: '25', name: 'Melina', image: require('./assets/Melina.jpg'), selected: false },
    { id: '26', name: 'Noah', image: require('./assets/Noah.jpg'), selected: false },
    { id: '27', name: 'Noe', image: require('./assets/Noe.jpg'), selected: false },
    { id: '28', name: 'Ole', image: require('./assets/Ole.jpg'), selected: false },
    { id: '29', name: 'Omar', image: require('./assets/Omar.jpg'), selected: false },
    { id: '30', name: 'Tala', image: require('./assets/Tala.jpg'), selected: false },
    { id: '31', name: 'Thea H', image: require('./assets/TheaH.jpg'), selected: false },
    { id: '32', name: 'Thea', image: require('./assets/Thea.jpg'), selected: false },
    { id: '33', name: 'Theo M', image: require('./assets/TheoM.jpg'), selected: false },
    { id: '34', name: 'Theo', image: require('./assets/Theo.jpg'), selected: false },
    { id: '35', name: 'Theressa', image: require('./assets/Theressa.jpg'), selected: false },
    { id: '36', name: 'Vincent', image: require('./assets/Vincent.jpg'), selected: false },
  ]);

  const handleKidPress = (id) => {
    setKids(kids.map(kid => kid.id === id ? { ...kid, selected: !kid.selected } : kid));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meal Time Tracker</Text>
      <ScrollView contentContainerStyle={styles.grid}>
        {kids.map((kid) => (
          <TouchableOpacity
            key={kid.id}
            style={[styles.kidContainer, kid.selected && styles.selectedKid]}
            onPress={() => handleKidPress(kid.id)}
          >
            <Image source={kid.image} style={styles.kidImage} />
            <Text style={styles.kidName}>{kid.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
