<template>
    <nav class="navbar d-flex flex-row" :class="navBarClasses">
        <div class="container container-fluid">
            <span class="navbar-brand mb-0 h1">Navbar</span>
            <div class="navbar-nav d-flex flex-row justify-content-sm-between">
                <a v-for="(page, index) in pages" class="p-2 nav-link" :class="{ active: activePage == index }"
                    :href="page.link.url" :key="index" @click.prevent="navLinkClick(index)">
                    {{ page.link.text }}
                </a>
                <button class="btn btn-primary ml-2" type="submit" @click="useDarkMode = !useDarkMode">
                    Mode</button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['pages', 'activePage', 'navLinkClick'],
    computed: {
        navBarClasses() {
            return {
                'navbar-dark bg-dark': this.useDarkMode,
                'navbar-light bg-light': !this.useDarkMode
            }
        }
    },

    data() {
        return {
            useDarkMode: true,
        }
    }
}
</script>