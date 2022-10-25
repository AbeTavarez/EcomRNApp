import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector';
import styles from './styles';

interface CartProductItemsProps {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      price: number;
      oldPrice?: number;
    };
  };
}

const CartProductItem = ({cartItem}: CartProductItemsProps) => {
  const {quantity: quantityProp, item} = cartItem;
  const [quantity, setQuantity] = useState(quantityProp);
  return (
    <View>
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
                key={`${item.id}-${idx}`}
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
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
    </View>
  );
};

export default CartProductItem;
