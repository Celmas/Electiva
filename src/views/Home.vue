<template>
    <v-container>
        <AppBar />
        <NavDrawer />
        <v-content>
            <electiva-list v-bind:electivas="electivas"/>
        </v-content>
        <Footer />
    </v-container>
</template>

<script>
    import AppBar from "../components/AppBar";
    import NavDrawer from "../components/NavDrawer";
    import Footer from "../components/Footer";
    import ElectivaList from "../components/ElectivaList";

    export default {
        name: "home",
        data: () => {
            return {
                electivas: []
            }
        },
        components: {
            ElectivaList,
            NavDrawer,
            AppBar,
            Footer
        },
        mounted() {
            this.electivas = this.$store.getters.getAllElectivas;
        }
    }
</script>

<style scoped>

</style>