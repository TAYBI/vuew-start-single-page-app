import { createRouter, createWebHashHistory } from 'vue-router';
import ClientsList from './components/ClientsList.vue';
import ClientDetails from './components/ClientDetails.vue';
import NavBarVue from './components/NavBar.vue';


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: ClientsList },
        // { path: '/clients', component: pageViewerVue },
        { path: '/clients/:id', component: ClientDetails }
    ]
})

export default router;