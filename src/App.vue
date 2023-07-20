<template>
    <nav-bar :pages="pages" :active-page="activePage" :nav-link-click="(index) => activePage = index"></nav-bar>
    <page-viewer :page="pages[activePage]"></page-viewer>
</template>

<script>
import navBar from './components/NavBar.vue';
import pageViewer from './components/pageViewer.vue';

export default {
    components: {
        pageViewer,
        navBar
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
    }
}
</script>