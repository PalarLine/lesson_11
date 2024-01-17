
export default {
    
    namespaced: true,

    state: {
        selectedList: [
            {
                id: 1,
                driverId: 2,
                busId: 101,
            },
            {
                id: 2,
                driverId: 1,
                busId: 102,
            },
        ]
        
    },
    getters: {
        getSelectedList: (state) => state.selectedList,
  
        getFullList: (state, getters, rootState, rootGetters) => 
            state.selectedList.map((item) => ({
                id: item.id,
                driverName: rootGetters['drivers/getDriverById'](item.driverId).name,
                busNumber: rootGetters['busses/getBusById'](item.busId).number,
                }))                           
    },

    mutations: {
        deleteDistribution(state, itemId) {
            state.selectedList = state.selectedList.filter(item => item.id !== itemId)
        },

        deleteDistributionByBusId(state, busId) {
            state.selectedList = state.selectedList.filter((item) => item.busId !== busId)
        },

        deleteDistributionByDriverId(state, driverId) {
            state.selectedList = state.selectedList.filter((item) => item. driverId !==  driverId)
        },

        addDistribution(state, item) {
            state.selectedList.push(item)
        }
              

    },
    actions: {
        deleteDistribution({ commit }, itemId) {
            commit('deleteDistribution', itemId)
        },

        deleteDistributionByBusId({ commit }, busId) {
            commit('deleteDistributionByBusId', busId)

        },

        deleteDistributionByDriverId({ commit }, driverId) {
            commit('deleteDistributionByDriverId', driverId)

        },

        addDistribution({ commit }, item) {
            commit('addDistribution', {
                id: new Date().getTime(),
                ...item
            })
        }            
    },
    modules: {},
  }