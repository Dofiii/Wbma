import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';


const ListItem = (props) => {
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
/*
omissa styleissä jotain häikkää joten pistin defaultit tähän
*/
const styles = StyleSheet.create({
  imageBox: {
    flex: 1,
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;
