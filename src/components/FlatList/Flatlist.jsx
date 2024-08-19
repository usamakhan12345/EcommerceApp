import React from 'react';
import {View, FlatList, StyleSheet, Text, Image} from 'react-native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import flatListImg1 from '../../Assets/flatListImg1.jpg';
const FlatlistCom = ({flatListdata}) => {
  console.log(flatListdata);
  return (
    <View>
      <FlatList
        data={flatListdata}
        horizontal={true}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.listItemContainer}>
            <AwesomeIcon
              style={styles.heartIcon}
              name="heart-o"
              size={30}
              color="orange"
            />
            <Image style={styles.listImg} source={flatListImg1} />
            <Text style={styles.listTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#F3F4F9',
    borderRadius: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#272145',
  },
  listItemContainer: {
    height: 250,
    width: 150,
    backgroundColor: '#F6F7F8',
    display: 'relative',
  },
  heartIcon: {
    position: 'absolute',
    right: 0,
  },
  listImg: {
    height: 50,
    width: 50,
    zIndex: 6,
    resizeMode: 'cover',
  },
  listTitle: {
    color: 'orange',
    fontSize: 20,
  },
});

export default FlatlistCom;
