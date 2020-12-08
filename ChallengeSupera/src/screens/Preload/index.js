import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {Container, LoadingIcon} from './styles';

import Logo from '../../assets/Teste.svg';

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
      <Logo width="100%" height="160" />
      <LoadingIcon size="large" color="#FFFFFF" />
    </Container>
  );
};
