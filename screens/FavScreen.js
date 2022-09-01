import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

const FavScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Favourite Screen</Text>
            <Button
            title="Click Here"
            onPress={() => alert("Button Clicked")}
            />
        </View>
    );
};

export default FavScreen;

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
