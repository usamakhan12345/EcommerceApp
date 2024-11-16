import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import flatListImg1 from '../../Assets/flatListImg1.jpg';
const FlatlistCom = ({flatListdata, handleFavouroteItems}) => {
  console.log(flatListdata);
  return (
    <View>
      <FlatList
        data={flatListdata}
        horizontal={true}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View key={item.id} style={styles.listItemContainer}>
            <TouchableOpacity onPress={() => handleFavouroteItems(item.id)}>
              <AwesomeIcon
                style={styles.heartIcon}
                name={item.isFavourite ? 'heart' : 'heart-o'}
                size={22}
                color="red"
              />
            </TouchableOpacity>
            <View style={styles.imageContainer}>
              <Image style={styles.listImg} source={item.Image} />
              <Text style={styles.listTitle}>{item.title}</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>$2,000</Text>
              <TouchableOpacity>
                <AwesomeIcon
                  style={styles.plusIcon}
                  name="plus"
                  size={22}
                  color="orange"
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 8,
    backgroundColor: '#F3F4F9',
    borderRadius: 10,
    marginHorizontal: 10,
    width: '100%',
  },
  itemText: {
    fontSize: 16,
    color: '#272145',
  },
  listItemContainer: {
    height: 250,
    width: 170,
    backgroundColor: '#F6F7F8',
    display: 'relative',
    marginHorizontal: 5,
    borderRadius: 25,
    shadowColor: 'rgba(100, 100, 111, 0.2)', // Equivalent to the color in boxShadow
    shadowOffset: {width: 0, height: 7}, // Equivalent to the offset (7px in height)
    shadowOpacity: 0.29, // Opacity of the shadow
    shadowRadius: 10, // Blur radius
    elevation: 5,
  },
  heartIcon: {
    position: 'absolute',
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#0000',
  },
  plusIcon: {
    backgroundColor: '#FFF2E7',
  },
  listImg: {
    height: 100,
    width: 100,
    zIndex: 6,
    resizeMode: 'cover',
    borderRadius: 20,
    textAlign: 'center',
  },
  listTitle: {
    color: '#000',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  priceText: {
    color: 'orange',
    fontSize: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default FlatlistCom;
