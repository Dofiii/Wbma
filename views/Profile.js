import React, {useContext} from 'react';
import {StyleSheet, SafeAreaView, Text, Platform, Button} from 'react-native';
import {AuthContext} from '../contexts/AuthContext';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';

const Profile = ({navigation}) => {
  const {setIsLoggedIn, user} = useContext(AuthContext);
  console.log('logged in userdata: ', user);
  const logout = async () => {
    setIsLoggedIn(false);
    await AsyncStorage.clear();
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
      <Text style={styles.title}>{user.username}</Text>
      <Text style={styles.description}>{user.email}</Text>
      <Button title={'Logout'} onPress={logout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
  description: {
    padding: 10,
    fontSize: 20,
  },
});

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
