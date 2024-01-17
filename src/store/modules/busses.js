
export default {
    
    namespaced: true,

    state: {
        bussesList: [
            { 
                id: 101,
                number: 'AO6825PU',
                year: 2011,
                seats: 40,
            },
            { 
                id: 102,
                number: 'AO1515TR',
                year: 2000,
                seats: 50,
            },
            { 
                id: 103,
                number: 'AO6555IO',
                year: 2020,
                seats: 38,

            },
    ]
    },
    getters: {
        getBussesList: (state) => state.bussesList,

        getBusById: (state)  => (busId) => state.bussesList.find((bus) => bus.id ==busId)
        
    },
    mutations: {
       removeBus(state, busId) {
        state.bussesList = state.bussesList.filter((bus) => bus.id !== busId)
       },

       addBus(state, bus) {        
            state.bussesList.push(bus)     
       },

       updateBus(state, busObj) {
        const busIndex = state.bussesList.findIndex((bus) => busObj.id === bus.id )
        state.bussesList[busIndex] = busObj
       }

    },
    actions: {
        removeBus({ commit, dispatch }, busId) {
            commit('removeBus', busId)
            dispatch('distributions/deleteDistributionByBusId', busId, { root:true })
        },

        addBus({ commit }, bus) {
            commit('addBus', {               
                id: new Date().getTime(),
                ...bus,                
            })
        },
        
        updateBus({ commit }, bus) {
            commit('updateBus', bus)
        }
    },
    modules: {},
  }