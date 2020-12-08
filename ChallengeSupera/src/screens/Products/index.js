import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Swiper from 'react-native-swiper';
import data from '../../json/products.json';
import BackIcon from '../../assets/back.svg';
import styleSheet from '../../components/styles';

import CartIcon from '../../assets/cart-icon.svg';
import {
  Container,
  Scroller,
  FakeSwiper,
  PageBody,
  UserInfoArea,
  ServiceArea,
  TestimonialArea,
  SwipeDot,
  SwipeDotActive,
  UserAvatar,
  UserInfo,
  UserInfoName,
  UserFavButton,
  UserCartButton,
  BackButton,
  SwipeImage,
  SwipeItem,
  LoadingIcon,
  ServiceItem,
  ServiceInfo,
  ServicePrice,
  ServiceScore,
  ServiceName,
  ServiceTitle,
  ServiceChooseBtnText,
  ServiceChooseButton,
} from './style';
import {addItem} from '../../redux/cart/cart';
export default () => {
  const length = useSelector((state) => state.cart.length);

  const navigation = useNavigation();
  const route = useRoute();
  //Redux
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    image: route.params.image,
    name: route.params.name,
    price: route.params.price,
    score: route.params.score,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = () => {
      setLoading(true);
      let t = data.filter((x, index) => {
        if (x.id === userInfo.id) {
          x.image = userInfo.image;
          return x;
        }
      });
      setUserInfo(t[0]);
      console.log('userInfo: ', userInfo);

      setLoading(false);
    };
    getProducts();
  }, []);

  function addItemCart(item) {
    if (item != '') {
      dispatch(addItem(item));
      setTimeout(() => {
        alert('Produto adicionado com Sucesso');
      }, 150);
    } else {
      alert('Erro ao Adicionar o produto');
    }
  }
  const handleBack = () => {
    navigation.goBack();
  };
  const handleRouter = () => {
    navigation.navigate('Carrinho');
  };
  return (
    <Container>
      <Scroller>
        {userInfo.image && userInfo.image != '' ? (
          <Swiper
            style={{height: 240}}
            dot={<SwipeDot />}
            activeDot={<SwipeDotActive />}>
            <SwipeItem></SwipeItem>
          </Swiper>
        ) : (
          <FakeSwiper></FakeSwiper>
        )}
        <PageBody>
          <UserInfoArea>
            <UserAvatar source={userInfo.image} />
            <UserInfo>
              <UserInfoName>{userInfo.name}</UserInfoName>
            </UserInfo>
            {/* <UserFavButton>
              <FavoriteIcon
                width="24"
                height="24"
                fill="#FF0000"></FavoriteIcon>
            </UserFavButton> */}
            <UserCartButton onPress={() => handleRouter()}>
              <CartIcon width="24" height="24" fill="#FF0000"></CartIcon>
              <View style={styleSheet.container}>
                <Text style={styleSheet.text}>{length}</Text>
              </View>
            </UserCartButton>
          </UserInfoArea>
          {loading && <LoadingIcon size="large" color="#000000" />}
          <ServiceArea>
            <ServiceTitle>Descrição do Produto</ServiceTitle>
            <ServiceItem>
              <ServiceInfo>
                <ServiceName>Nome:{userInfo.name}</ServiceName>
                <ServicePrice>Preço:{userInfo.price}</ServicePrice>
                <ServiceScore>Pontuação:{userInfo.score}</ServiceScore>
              </ServiceInfo>
            </ServiceItem>
            <ServiceChooseButton>
              <ServiceChooseBtnText onPress={() => addItemCart(userInfo)}>
                Comprar
              </ServiceChooseBtnText>
            </ServiceChooseButton>
            <View>
              <ServiceName>
                Clique no Icone do carrinho para entrar no carrinho, e ver o
                total da compra
              </ServiceName>
            </View>
          </ServiceArea>
          <TestimonialArea></TestimonialArea>
        </PageBody>
      </Scroller>
      <BackButton onPress={handleBack}>
        <BackIcon width="44" height="44" fill="#FFFFFF" />
      </BackButton>
    </Container>
  );
};
