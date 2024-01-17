
import { isCorrespondToFilter } from '../helpers'

export default {
    
    namespaced: true,

    state: {
        filterObj: {},        
    },
    
    getters: {
        getFilterObj: (state) => state.filterObj,

        getFilteredDriversList: (state, getters, rootState, rootGetters) => {
        const filteredList = rootGetters['drivers/getDriversList'].filter((driver) => isCorrespondToFilter(driver, state.filterObj))
        return filteredList
        }
    },

    mutations: {
        setFilter(state, filterDataObj) {
            state.filterObj = filterDataObj
        },    
    },
    
    actions: {
        updateFilter({ commit }, filterDataObj) {
            commit('setFilter', filterDataObj)
        },        
    },

    modules: {},
  }