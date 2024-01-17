import { createStore } from "vuex";

import drivers from './modules/drivers'
import busses from './modules/busses'
import distributions from './modules/distributions'
import filters from './modules/filters'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    drivers,
    busses,
    distributions,
    filters
  },
});
