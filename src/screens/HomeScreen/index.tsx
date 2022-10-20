import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          style={styles.productImage}
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
          }}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB
          </Text>
          <View style={styles.ratingContainer}>
            <FontAwesome
              style={styles.star}
              name="star"
              size={18}
              color="#e47911"
            />
            <FontAwesome
              style={styles.star}
              name="star"
              size={18}
              color="#e47911"
            />
            <FontAwesome
              style={styles.star}
              name="star"
              size={18}
              color="#e47911"
            />
            <FontAwesome
              style={styles.star}
              name="star-half-full"
              size={18}
              color="#e47911"
            />
            <FontAwesome
              style={styles.star}
              name="star-o"
              size={18}
              color="#e47911"
            />
            <Text>13,348</Text>
          </View>
          <Text style={styles.price}>
            from: $11.99 <Text style={styles.oldPrice}>$13.45</Text>{' '}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  wrapper: {
    flexDirection: 'row',
    margin: 10,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  productImage: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  star: {
    margin: 2,
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
});

export default HomeScreen;
