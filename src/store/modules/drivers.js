
export default {
    
    namespaced: true,

    state: {
        driversList: [
            { 
                id: 1,
                name: 'Іван Іваненко',
                experience: 15,
            },
            { 
                id: 2,
                name: 'Петро Петренко',
                experience: 25,
            },
            { 
                id: 3,
                name: 'Василь Василенко',
                experience: 5,
            },
    ]
    },
    getters: {
        getDriversList: (state) => state.driversList,

        getDriverById: (state) => (driverId) => state.driversList.find((driver) => driver.id == driverId),
    },
    mutations: {
        removeDriver(state, driverID) {
            state.driversList = state.driversList.filter((driver) => driver.id !== driverID)
        },

        addDriver(state, driver) {
            state.driversList.push(driver)
            console.log(driver)
        },

        updateDriver(state, driverObj) {
            const driverIndex = state.driversList.findIndex((driver) => driver.id === driverObj.id)
            state.driversList[driverIndex] = driverObj
        },
    },
    actions: {
        removeDriver({ commit, dispatch }, driverID) {
            commit('removeDriver', driverID)
            dispatch('distributions/deleteDistributionByDriverId', driverID, { root:true })

        },

        addDriver({ commit }, driver) {
            console.log(driver)
            commit('addDriver', {               
                id: new Date().getTime(),
                ...driver,                
            })
        },
        
        updateDriver({ commit }, driver) {
            commit('updateDriver', driver)
        },
    },
    modules: {},
  }