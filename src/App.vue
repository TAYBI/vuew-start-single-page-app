<template>
    <nav-bar :pages="pages" :active-page="activePage" :nav-link-click="(index) => activePage = index"></nav-bar>
    <!-- <page-viewer v-if="clients.length > 0" :clients="clients"></page-viewer> -->
    <create-page :page-created="pageCreated">

    </create-page>
</template>

<script>
// import { onMounted } from 'vue';
import createPage from './components/CreatePage.vue';
import navBar from './components/NavBar.vue';
import pageViewer from './components/pageViewer.vue';


export default {
    components: {
        pageViewer,
        navBar,
        createPage,
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
        // this.getClients();
        console.log();
    },
    methods: {
        async getClients() {
            try {
                const response = await fetch("http://178.238.238.52:8083/api/clients/omag_71_Dev commercial");
                this.clients = await response.json();
                console.log(this.clients);
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


"IDville": 0,
"code_client": "000003",
"nom": "mr EL test",
"tel": "25545454",