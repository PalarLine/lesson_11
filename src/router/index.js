import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OurContacts from "../views/OurContacts.vue";
import OurDrivers from "../views/OurDrivers.vue";
import BussesPark from "../views/BussesPark.vue";
import DriversDistribution from "../views/DriversDistribution.vue";
import DriverEditor from "../components/DriversManager/DriverEditor.vue"
import BusEditor from "../components/BussesManager/BusEditor.vue"

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: OurContacts,
    },
    {
        path: '/drivers',
        name: 'drivers',
        component: OurDrivers,
    },
    {
        path: '/driver/:driverId?',
        name: 'driver',
        component: DriverEditor,
    },
    {
        path: '/busses',
        name: 'busses',
        component: BussesPark,
    },
    {
        path: '/bus/:busId?',
        name: 'bus',
        component: BusEditor,
    },
    {
        path: '/distribution',
        name: 'distribution',
        component: DriversDistribution,
    },
]

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes,
})

export default router;
