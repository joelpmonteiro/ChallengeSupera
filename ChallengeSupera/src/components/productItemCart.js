import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import {removeItem} from '../redux/cart/cart';

const Area = styled.TouchableOpacity`
  background-color: #ffffff;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
`;

const Area2 = styled.View`
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

const SeeProfileButton = styled.TouchableOpacity`
  width: 85px;
  height: 26px;
  border: 1px solid #4eadbe;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  color: red;
`;

const SeeProfileButtonText = styled.Text`
  font-size: 13px;
  color: red;
`;

export default ({data, indexx}) => {
  console.log('key: ', indexx);
  const dispatch = useDispatch();

  function deleteItem(item) {
    if (item != '') dispatch(removeItem({item, indexx}));
  }

  return (
    <Area2>
      <Avatar source={data.image} />
      <InfoArea>
        <UserName>{}</UserName>
        <UserName>{data.name}</UserName>
        <Price>Preço: R$ {data.price}</Price>
        <Score>Score: {data.score}</Score>
        <Score>Frete: R$10,00</Score>
        <SeeProfileButton>
          <SeeProfileButtonText onPress={() => deleteItem(data)}>
            Deletar
          </SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Area2>
  );
};
