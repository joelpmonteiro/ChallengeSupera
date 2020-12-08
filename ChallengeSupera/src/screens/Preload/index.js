import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {Container, LoadingIcon} from './styles';

export default () => {
  const navigation = useNavigation();
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
      } else {
        navigation.navigate('MainTab');
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <LoadingIcon size="large" color="#FFFFFF" />
    </Container>
  );
};
