import React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const ProductItem = () => {
  return (
    <View style={styles.root}>
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
  );
};

export default ProductItem;
