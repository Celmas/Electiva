<template>
    <v-container>
        <AppBar />
        <NavDrawer />
        <Footer />
    </v-container>
</template>

<script>
    import AppBar from "../components/AppBar";
    import NavDrawer from "../components/NavDrawer";
    import Footer from "../components/Footer";

    export default {
        name: "home",
        components: {
            NavDrawer,
            AppBar,
            Footer
        }
    }
</script>

<style scoped>

</style>