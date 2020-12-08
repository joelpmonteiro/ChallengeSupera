import React from 'react';
import styled from 'styled-components/native';

export const HeaderAreaValor = styled.View`
  background-color: #ffffff;
  margin-bottom: 20px;
  border-radius: 1px;
  padding: 15px;
  flex-direction: column;
`;

export const ServiceChooseButton = styled.TouchableOpacity`
  width: 100%;
  max-width: 25%;
  background-color: #4eadbe;
  border-radius: 5px;
  padding: 1px 1px;
  margin-left: 1%;
  margin-top: 5%;
  margin-right: 1%;
`;

export const ServiceChooseBtnText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
`;

export const Area = styled.TouchableOpacity`
  background-color: #ffffff;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
`;
export const TotalPrice = styled.Text`
  flex: 1;
  font-size: 17px;
  font-weight: bold;
  margin-right: 10px;
  margin-left: 10px;
`;
export const TotalItem = styled.Text`
  flex: 1;
  flex-direction: column;
  font-size: 17px;
  font-weight: bold;
  margin-left: 10px;
  margin-top: 10px;
`;

export const Score = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #63c2d1;
`;

export const InfoArea = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderTitle = styled.Text`
  width: 250px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
export const SearchButton = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
`;

export const LocationArea = styled.View`
  background-color: #4eadbe;
  height: 60px;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
`;
export const LocationInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #ffffff;
`;
export const LocationFinder = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;
export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;
export const ListArea = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
`;
