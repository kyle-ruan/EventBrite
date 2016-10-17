import React from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  img: {
    resizeMode: 'cover',
  },
});

const Carousel = ({ images, height }) => (
  <ScrollView
    horizontal={true}
    decelerationRate={'fast'}
    directionalLockEnabled={true}
    pagingEnabled={true}
    showsHorizontalScrollIndicator={false}
    removeClippedSubviews={true}
    automaticallyAdjustContentInsets={false}
    scrollEventThrottle={200}
    height={height}
  >
    {images.map((item, i) =>
      <Image
        key={i}
        style={[styles.img, { height, width }]}
        source={{ uri: item.src }}
      />
    )}
  </ScrollView>
);

Carousel.defaultProps = {
  images: [],
  height: 300,
  gutter: 0,
  offset: false
};

Carousel.propTypes = {
  images: React.PropTypes.array.isRequired,
  height: React.PropTypes.number.isRequired
};

export { Carousel };
