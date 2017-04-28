// const INITIAL_STATE =  [{name: 'ball', description: 'big red ball', numberRemaining: 2, categories: ['sports', 'balls', 'bouncy toys'], price: 5},
//                         {name: 'chew bone', description: 'doggie chew bone', numberRemaining: 5, categories: ['pets', 'pet toys'], price: 3},
//                         {name: 'doll', description: 'a cool hipster doll wearing plaid', numberRemaining: 1, categories: ['dolls'], price: 5},
//                         {name: 'ferrari', description: 'because adults need toys too', numberRemaining: 11, categories: ['adult toys', 'cars', 'luxery'], price: 100000}]
//INITIAL STATE IS CURRENTLY ACTING AS OUR DATA MOCKUP BEFORE WE START HITTING THE API

import { FETCH_PRODUCTS } from '../actions/types'

const INITIAL_STATE = {products: []};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      //this will have to use the spread operator to combine and return a new product state on an API call
      return {products: action.payload.data.products};
    default:
      return state;
  }
}
