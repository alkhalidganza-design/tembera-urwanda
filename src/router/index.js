 import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
 import homeviews from '../views/homeviews.vue'

 const routes = [
    {
        path:"/",
        name:"home",
        Component: HomeView,
    }
];

 const router = createRouter({
     history: createWebHashHistory(),
     routes,
 });
 export default router;