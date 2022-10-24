import React, {useState, useCallback} from 'react';
import {View, FlatList, Image, useWindowDimensions} from 'react-native';
import styles from './styles';

interface ImageCarouselProps {
  images: [string];
}

const ImageCarousel = ({images}: ImageCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = useWindowDimensions().width;

  const onFlatListUpdate = useCallback(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, []);

  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image style={styles.image} source={{uri: item}} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
          // minimumViewTime: 300,
        }}
        onViewableItemsChanged={onFlatListUpdate}
      />
      <View style={styles.dots}>
        {images.map((dot, idx) => (
          <View
            style={[
              styles.dot,
              {backgroundColor: idx === activeIndex ? '#c9c9c9' : '#ededed'},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;
