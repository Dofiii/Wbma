import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const Listitem = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.imageBox}>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: props.singleMedia.thumbnails.w160}}
        />
      </View>

      <View>
        <Text>{props.singleMedia.title}</Text>
        <Text>{props.singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBox: {
    flex: 1,
  },
});

Listitem.propTypes = {
  singleMedia: PropTypes.object,
};

export default Listitem;
