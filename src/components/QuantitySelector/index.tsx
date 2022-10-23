import {View, Text, Pressable} from 'react-native';
import React from 'react';

const QuantitySelector = () => {
  const onMinus = () => {};
  const onPlus = () => {};
  return (
    <View>
      <Pressable onPress={onMinus}>
        <Text>-</Text>
      </Pressable>

      <Text>0</Text>

      <Pressable onPress={onPlus}>
        <Text>+</Text>
      </Pressable>
    </View>
  );
};

export default QuantitySelector;
