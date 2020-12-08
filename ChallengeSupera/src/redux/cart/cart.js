import {createAction, createReducer} from '@reduxjs/toolkit';

const init_state = [];
const actionT = [];

export const addItem = createAction('ADD_ITEM');
export const removeItem = createAction('REMOVE_ITEM');
export const valueTotal = createAction('VALUE_TOTAL');
export const reOrder = createAction('REORDER');

export default createReducer(init_state, {
  [valueTotal.type]: (state, action) => {
    let value = 0;
    value = value + action.payload.price;
    console.log('state:', value);
    return [...state, action.payload];
  },
  [addItem.type]: (state, action) => {
    return [...state, action.payload];
  },
  [removeItem.type]: (state, action) => {
    console.log('action: ', action.payload.indexx);
    console.log('state: ', state);
    return state.filter((x, index) => index != action.payload.indexx);
  },
  [reOrder.type]: (state, action) => {
    console.log('reOrder: ', action);
    if (action.payload.itemValue != -1) {
      if (action.payload.itemValue === 'score')
        return state.sort((a, b) => a.score > b.score);
      else if (action.payload.itemValue === 'preco')
        return state.sort((a, b) => a.price > b.price);
      else return state.sort((a, b) => a.name > b.name);
    }
  },
});
