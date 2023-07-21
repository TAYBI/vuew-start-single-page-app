<template>
    <nav-bar :pages="pages" :active-page="activePage" :nav-link-click="(index) => activePage = index"></nav-bar>

    <router-view v-if="clients.length > 0" :clients="clients" :page-created="pageCreated"></router-view>
    <!-- <page-viewer v-if="clients.length > 0" :clients="clients"></page-viewer> -->
    <!-- <create-page :page-created="pageCreated">
    </create-page> -->
</template>

<script>
// import { onMounted } from 'vue';
import navBar from './components/NavBar.vue';
import ClientDetails from './components/ClientDetails.vue';
import ClientsList from './components/ClientsList.vue';
import { lienAPI } from './utils/globals';


export default {
    components: {
        navBar,
        ClientsList,
        ClientDetails,
    },
    data() {
        return {
            clients: [],
            activePage: 0,
            pages: [
                {
                    link: { text: 'Home', url: 'index.html' },
                    pageTitle: 'Home page',
                    content: 'this is the Home content'
                },
                {
                    link: { text: 'About', url: 'About.html' },
                    pageTitle: 'About page',
                    content: 'this is the About content'
                },
                {
                    link: { text: 'Content', url: 'Content.html' },
                    pageTitle: 'Content page',
                    content: 'this is the Content content'
                },
            ]
        }
    },
    created() {
        this.getClients();
        console.log();
    },
    methods: {
        async getClients() {
            try {
                const response = await fetch(lienAPI);
                this.clients = await response.json();
            } catch (error) {
                console.log(error);
            }
        },
        pageCreated(pageObj) {
            console.log(pageObj);
        }
    }
}
</script>
