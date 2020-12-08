import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import prepare from './prepareImage.js';
const Area = styled.TouchableOpacity`
  background-color: #ffffff;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
`;

const Avatar = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 20px;
`;

const InfoArea = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;

const UserName = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

const Price = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

const Score = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

const SeeProfileButton = styled.View`
  width: 85px;
  height: 26px;
  border: 1px solid #4eadbe;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const SeeProfileButtonText = styled.Text`
  font-size: 13px;
  color: #268596;
`;

export default ({data, src}) => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate('Product', {
      id: data.id,
      name: data.name,
      price: data.price,
      score: data.score,
      image: src,
    });
  };
  return (
    <Area onPress={handleClick}>
      <Avatar source={src} />
      <InfoArea>
        <UserName>{data.name}</UserName>
        <Price>Preço: R$ {data.price}</Price>
        <Score>Score: {data.score}</Score>
        <SeeProfileButton>
          <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Area>
  );
};
