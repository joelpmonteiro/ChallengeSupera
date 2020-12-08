import React, {useState, useEffect} from 'react';
import {Platform, RefreshControl} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ProductItem from '../../components/productItem';
import data from '../../json/products.json';
import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  //   SearchButton,
  //   LocationArea,
  //   LocationInput,
  //   LocationFinder,
  LoadingIcon,
  ListArea,
} from './style';
export default () => {
  const navigation = useNavigation();
  let imgs = {
    0: require('../../assets/super-mario-odyssey.png'),
    1: require('../../assets/call-of-duty-infinite-warfare.png'),
    2: require('../../assets/the-witcher-iii-wild-hunt.png'),
    3: require('../../assets/call-of-duty-wwii.png'),
    4: require('../../assets/mortal-kombat-xl.png'),
    5: require('../../assets/shards-of-darkness.png'),
    6: require('../../assets/terra-media-sombras-de-mordor.png'),
    7: require('../../assets/fifa-18.png'),
    8: require('../../assets/horizon-zero-dawn.png'),
  };

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    setList([]);
    let res = await data;
    if (res != '') {
      setList(res);
    } else alert('Erro ao Ler lista de Produtos:');
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const onRefresh = () => {
    setRefreshing(false);
    getProducts();
  };
  return (
    <Container>
      <Scroller
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>
            Encontre o seu Game favorito
          </HeaderTitle>
        </HeaderArea>

        {loading && <LoadingIcon size="large" color="#FFFFFF" />}

        <ListArea>
          {list.map((item, k) => (
            <ProductItem key={k} data={item} src={imgs[k]} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};
