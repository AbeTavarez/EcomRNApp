import React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

interface ProductItemsProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem = (props: ProductItemsProps) => {
  const {item} = props;
  return (
    <View style={styles.root}>
      <Image
        style={styles.productImage}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        <View style={styles.ratingContainer}>
          {[...new Array(5)].map((el, idx) => (
            <FontAwesome
              style={styles.star}
              name={idx < Math.floor(item.avgRating) ? 'star' : 'star-o'}
              size={18}
              color="#e47911"
            />
          ))}
          <Text>{item.avgRating}</Text>
        </View>
        <Text style={styles.price}>
          from: ${item.price}{' '}
          {item.oldPrice && (
            <Text style={styles.oldPrice}>${item?.oldPrice}</Text>
          )}
        </Text>
      </View>
    </View>
  );
};

export default ProductItem;
