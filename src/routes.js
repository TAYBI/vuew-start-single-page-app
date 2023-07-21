import { createRouter, createWebHashHistory } from 'vue-router';
import pageViewerVue from './components/pageViewer.vue';
import CreatePageVue from './components/CreatePage.vue';
import NavBarVue from './components/NavBar.vue';


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        // { path: '/', component: NavBarVue },
        { path: '/clients', component: pageViewerVue },
        { path: '/clients/:id', component: CreatePageVue }
    ]
})

export default router;