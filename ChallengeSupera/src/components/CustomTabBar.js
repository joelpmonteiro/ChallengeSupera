import React, {useContext} from 'react';
import {useSelector} from 'react-redux';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

import {UserContext} from '../context-Api/usersContext';

import HomeIcon from '../assets/home.svg';
import TodayIcon from '../assets/cart-icon.svg';
import FavoriteIcon from '../assets/favorite.svg';
import AccountIcon from '../assets/account.svg';
import styles from './styles';

const TabArea = styled.View`
  height: 60px;
  background-color: #4eadbe;
  flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #28231c;
  border-radius: 35px;
  border: 3px solid #4eadbe;
  margin-top: -20px;
`;
const AvatarIcon = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;

export default ({state, navigation}) => {
  const {state: user} = useContext(UserContext);
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };
  const length = useSelector((state) => state.cart.length);

  return (
    <TabArea>
      <TabItem></TabItem>
      <TabItem onPress={() => goTo('Home')}>
        <HomeIcon
          style={{opacity: state.index === 0 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem>
      <TabItemCenter onPress={() => goTo('Carrinho')}>
        <TodayIcon width="40" height="40" fill="#4EADBE" color="red" />
        <View style={styles.container}>
          <Text style={styles.text}>{length}</Text>
        </View>
      </TabItemCenter>

      <TabItem></TabItem>
    </TabArea>
  );
};
