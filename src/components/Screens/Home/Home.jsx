import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TextInput, Image} from 'react-native';
import {StyleSheet} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FlatlistCom from './src/components/FlatList/Flatlist';
import FlatListImg1 from './src/Assets/flatListImg1.jpg';
import FlatListImg2 from './src/Assets/flatListImg2.jpg';
import FlatListImg3 from './src/Assets/flatListImg3.jpg';
import FlatListImg4 from './src/Assets/flatListImg4.jpg';
import FlatListImg5 from './src/Assets/flatListImg5.jpg';
import HightLightItems from './src/components/HighLightItems/HightLightItems';
import SectionListCom from './src/components/SectionListCom/SectionListCom';
import {DATA} from './src/components/constants';

const Home = () => {
  const [favouriteItems, setFavouriteItems] = useState(false);
  const [flatListData, setFlatListData] = useState();
  const flatListdata = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Honey limb Combo',
      Image: FlatListImg1,
      isFavourite: false,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Milk',
      Image: FlatListImg2,
      isFavourite: false,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Fast Food ',
      Image: FlatListImg3,
      isFavourite: false,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97666f63',
      title: 'Milk',
      Image: FlatListImg4,
      isFavourite: false,
    },
    {
      id: '58694a0f-3da1-471f-bd96-1455444471e29d72',
      title: 'Fast Food ',
      Image: FlatListImg5,
      isFavourite: false,
    },
  ];
  useEffect(() => {
    setFlatListData(flatListdata);
  }, []);

  const handleFavouroteItems = id => {
    setFlatListData(pre =>
      pre.map(item =>
        item.id === id ? {...item, isFavourite: !item.isFavourite} : item,
      ),
    );

    console.log('flatListdata---->', flatListdata);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.head}>
        <MaterialIcon name="menu" size={30} color="#000" />

        <AwesomeIcon name="shopping-basket" size={30} color="orange" />
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>
          Hello Kante,
          <Text style={styles.boldText}>
            What fruit salad combo do you want today?
          </Text>
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search for Fruits and Salad combos"
          keyboardType="text"
          placeholderTextColor="#272145"
        />
        <AwesomeIcon
          style={styles.searchIcon}
          name="search"
          size={25}
          color="orange"
        />
        <AwesomeIcon
          style={styles.slidersIcon}
          name="sliders"
          size={35}
          color="orange"
        />
      </View>
      <View>
        <Text style={styles.recommendHeading}>Recommended Combo</Text>
        <FlatlistCom
          flatListdata={flatListData}
          handleFavouroteItems={handleFavouroteItems}
        />
      </View>
      <View>
        <HightLightItems />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingVertical: 40,
    // paddingHorizontal: 30,
    overflow: 'hidden',
  },

  head: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  heading: {
    fontSize: 20,
    color: '#000',
    lineHeight: 26,
    paddingHorizontal: 20,
  },
  boldText: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  headingContainer: {
    marginTop: 35,
  },
  input: {
    backgroundColor: '#F3F4F9',
    position: 'relative',
    paddingLeft: 45,
    paddingRight: 10, // Ensure there's space for the icon
    height: 60,
    borderRadius: 10,
    fontSize: 14,
  },
  searchIcon: {
    position: 'absolute',
    top: 15,
    left: 30,
  },
  slidersIcon: {
    // zIndex: 5,
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 18,
  },
  recommendHeading: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Roboto-Black',
    marginVertical: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
});
export default Home;
