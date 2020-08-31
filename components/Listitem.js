import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const Listitem = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>

        <View style={[styles.box, styles.shadow]}>
          <Image style={styles.image}
            source={{uri: props.singleMedia.thumbnails.w160}}
          />
          <View style={styles.textview}>
            <Text style={styles.title}>{props.singleMedia.title}</Text>
            <Text style={styles.text}>{props.singleMedia.description}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity >
  );
};

/*
Hmm en oikee viel tajuu tätä style hommaa
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'gray',
    padding: 15,
    marginBottom: 0,
    paddingTop: 5,
  },
  box: {
    flex: 5,
    padding: 5,
    flexDirection: 'row',
    backgroundColor: 'white',
    border: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    maxWidth: 500,
    maxHeight: 200,
  },
  image: {
    margin: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '50%',
  },
  textview: {
    flex: 2,
    padding: 15,
  },
  title: {
    color: 'brown',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 1,
  },
  text: {
    fontSize: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

Listitem.propTypes = {
  singleMedia: PropTypes.object,
};

export default Listitem;
