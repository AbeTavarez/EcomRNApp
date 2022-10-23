import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import product from '../../data/product';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options[0] ? product.options[0] : null,
  );
  console.log(selectedOption);

  return (
    <View>
      <Text style={styles.title}>{product.title}</Text>

      {/* Image carousel */}

      {/* option selector */}

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
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map(op => (
          <Picker.Item label={op} value={op} />
        ))}
      </Picker>

      {/* Button  */}
    </View>
  );
};

export default ProductScreen;
