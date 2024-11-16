import React from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';

const HightLightItems = ({flatListdata}) => {
  return (
    <View style={styles.highlightContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Highlights Items</Text>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Roboto-Black',
    marginVertical: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  headingContainer: {
    backgroundColor: 'orange',
    marginTop: 15,
  },
});
export default HightLightItems;
