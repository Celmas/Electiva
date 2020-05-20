<template>
    <v-container>
        <AppBar/>
        <NavDrawer/>
        <v-content>
            <v-card>
                <v-row align-content="center" justify="center">
                    <v-card-title>
                        {{ electiva.title }}
                    </v-card-title>
                </v-row>
                <v-row align-content="center">
                    <v-col cols="8">
                        <v-card-text>
                            {{ electiva.text }}
                        </v-card-text>
                    </v-col>
                    <v-col cols="4">
                        <v-img
                                :src="electiva.img"
                        ></v-img>
                    </v-col>
                </v-row>
            </v-card>

        </v-content>
        <Footer/>
    </v-container>
</template>

<script>
    import AppBar from "../components/AppBar";
    import NavDrawer from "../components/NavDrawer";
    import Footer from "../components/Footer";

    export default {
        name: "Electiva",
        data: () => {
            return {
                electiva: null,
                reviews: []
            }
        },
        components: {Footer, NavDrawer, AppBar},
        mounted() {
            this.electiva = this.$store.getters.getCurrentElectiva
        }
    }
</script>

<style scoped>

</style>