import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import CartProductItem from '../../components/CartProductItem';
import products from '../../data/cart';

const ShoppingCartScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        keyExtractor={({id}) => id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default ShoppingCartScreen;
