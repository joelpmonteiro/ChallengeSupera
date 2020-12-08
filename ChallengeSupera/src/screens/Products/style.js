import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;

export const FakeSwiper = styled.View`
  flex: 1;
  padding: 20px;
`;

export const PageBody = styled.View`
  background-color: #ffffff;
  border-top-left-radius: 50px;
  margin-top: -50px;
  min-height: 400px;
`;

export const UserInfoArea = styled.View`
  flex-direction: row;
  margin-top: -30px;
`;
export const ServiceArea = styled.View`
  margin-top: 20px;
`;
export const TestimonialArea = styled.View`
  flex: 1;
  padding: 20px;
`;

export const UserAvatar = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 20px;
  margin-left: 30px;
  margin-right: 20px;
  border-width: 4px;
  border-color: #ffffff;
`;

export const UserInfo = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const UserInfoName = styled.Text`
  color: #000000;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const UserFavButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border: 2px solid #999999;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const UserCartButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: #28231c;
  border: 2px solid #999999;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const SwipeDot = styled.View`
  width: 10px;
  height: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 3px;
`;

export const SwipeDotActive = styled.View`
  width: 10px;
  height: 10px;
  background-color: #000000;
  border-radius: 5px;
  margin: 3px;
`;

export const SwipeItem = styled.View`
  flex: 1;
  background-color: #63c2d1;
`;
export const SwipeImage = styled.Image`
  width: 100%;
  height: 240px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const ServiceItem = styled.View`
  flex-direction: row;
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;
`;

export const ServiceInfo = styled.View`
  flex: 1;
`;

export const ServicePrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #268596;
  margin-top: 15px;
`;

export const ServiceScore = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #268596;
  margin-top: 15px;
`;

export const ServiceName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #268596;
`;

export const ServiceChooseButton = styled.TouchableOpacity`
  width: 100%;
  max-width: 90%;
  background-color: #4eadbe;
  border-radius: 5px;
  padding: 10px 20px;
  margin-left: 5%;
  margin-top: 25%;
  margin-right: 40%;
`;

export const ServiceChooseBtnText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
`;

export const ServiceTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #268596;
  margin-left: 30px;
  margin-bottom: 20px;
`;
