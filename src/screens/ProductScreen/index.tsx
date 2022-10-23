import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import styles from './styles';
import product from '../../data/product';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options[0] ? product.options[0] : null,
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      {/* Image carousel */}

      {/* option selector */}
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map(op => (
          <Picker.Item label={op} value={op} />
        ))}
      </Picker>

      {/* Price  */}
      <Text style={styles.price}>
        from: ${product.price}{' '}
        {product.oldPrice && (
          <Text style={styles.oldPrice}>${product?.oldPrice}</Text>
        )}
      </Text>

      {/* Description  */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Quantity Selector  */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      {/* Button  */}
      <Button
        text={'Add To Cart'}
        onPress={() => {
          console.warn('Add to cart');
        }}
      />
      <Button
        text={'Buy Now'}
        onPress={() => {
          console.warn('buy now');
        }}
      />
    </View>
  );
};

export default ProductScreen;
