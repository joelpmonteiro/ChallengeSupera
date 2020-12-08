import React, {useState, useEffect} from 'react';
import {RefreshControl} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useSelector, useDispatch, useStore} from 'react-redux';
import ProductItemCart from '../../components/productItemCart';

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  HeaderAreaValor,
  UserName,
  InfoArea,
  LoadingIcon,
  ListArea,
  TotalPrice,
  TotalItem,
  Score,
  ServiceChooseBtnText,
  ServiceChooseButton,
} from './style';
import {reOrder, valueTotal} from '../../redux/cart/cart';

export default () => {
  const [loading, setLoading] = useState(false);
  const prod = useSelector((state) => state.cart);
  const [selectedValue, setSelectedValue] = useState();

  let [list, setList] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const cartProd = () => {
    setList([...prod]);
  };
  const total = () => {
    let y = 0;
    return prod.map((x) => {
      y += x.price;
      setTotalValue(y);
    });
  };

  // const reOrder = () => {
  //   return prod.sort((a, b) => a.score > b.score);
  // };
  useEffect(() => {
    setLoading(true);
    total();
    console.log('valor final', totalValue);
    console.log('total de Prod: ', prod.length);
    setLoading(false);
  }, [total, prod, totalValue]);

  //total();
  const onRefresh = () => {
    setRefreshing(false);
    cartProd();
    total();
  };
  return (
    <Container>
      <Scroller
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <HeaderArea>
          <HeaderTitle numberOfLines={3}>
            Frete Gratis apartir de R$250,00 - Total de Items {prod.length}
          </HeaderTitle>
        </HeaderArea>

        <HeaderAreaValor>
          <TotalPrice>
            Valor dos Produtos: {prod.length > 0 ? totalValue : 0}
          </TotalPrice>
          <TotalItem>Total Items: {prod.length}</TotalItem>
          <>
            {totalValue > 250 ? (
              <TotalItem>SubTotal: {totalValue}</TotalItem>
            ) : (
              <>
                {totalValue > 250 ? (
                  <TotalItem>
                    Total a Pagar com Frete:{' '}
                    {prod.length > 0 ? prod.length * 10 + totalValue : 0}
                  </TotalItem>
                ) : (
                  <TotalItem>
                    Total a Pagar sem Frete:{' '}
                    {prod.length > 0 ? prod.length * 10 + totalValue : 0}
                  </TotalItem>
                )}
              </>
            )}
          </>
          <Picker
            enabled={prod.length > 0 ? true : false}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedValue(itemValue);
              dispatch(reOrder({prod, itemValue}));
            }}>
            <Picker.Item disabled label="Escolha um Valor abaixo" value="-1" />
            <Picker.Item label="Ordenar Por Score" value="score" />
            <Picker.Item label="Ordenar Por Preço" value="preco" />
            <Picker.Item label="Ordem Alfabética" value="alfa" />
          </Picker>
        </HeaderAreaValor>
        {loading && <LoadingIcon size="large" color="#FFFFFF" />}

        <ListArea>
          {prod.map((item, k) => (
            <ProductItemCart key={k} data={item} indexx={k} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};
