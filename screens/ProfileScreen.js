import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

const ProfileScreen = () => {

    return(
        <View style={styles.container}>
       <Text style={styles.title}>
        My name is 
       </Text>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
    fontSize: 24,
    color: '#800000',
    textAlign: 'center',
    fontWeight: 'bold',
  }, 
});
