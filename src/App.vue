<template>
    <nav-bar :pages="pages" :active-page="activePage" :nav-link-click="(index) => activePage = index"></nav-bar>
    <router-view :page-created="pageCreated">
    </router-view>
    <!-- <clients-list v-if="clients.length > 0" :clients="clients"></clients-list> -->
    <!-- <client-details :page-created="pageCreated"></client-details> -->
</template>

<script>
// import { onMounted } from 'vue';
import navBar from './components/NavBar.vue';
import ClientDetails from './components/ClientDetails.vue';
import ClientsList from './components/ClientsList.vue';


export default {
    components: {
        navBar,
        ClientsList,
        ClientDetails,
    },
    data() {
        return {
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
    methods: {
        pageCreated(pageObj) {
            console.log(pageObj);
        }
    }
}
</script>
