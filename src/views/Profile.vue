<template>
    <v-container>
        <AppBar/>
        <NavDrawer/>
        <v-content>
            <v-card>
                <v-row align-content="center" justify="center">
                    <v-card-title>
                        Профиль
                    </v-card-title>
                </v-row>
                <v-list>
                    <v-list-item>
                        <v-text-field
                                label="Фамилия"
                                filled
                                rounded
                                v-model="surname"
                        ></v-text-field>
                    </v-list-item>
                    <v-list-item>
                        <v-text-field
                                label="Имя"
                                filled
                                rounded
                                v-model="name"
                        ></v-text-field>
                    </v-list-item>
                    <v-list-item>
                        <v-text-field
                                label="Отчество"
                                filled
                                rounded
                                v-model="lastname"
                        ></v-text-field>
                    </v-list-item>

                </v-list>
                <v-card-title>
                    Активность
                </v-card-title>
                <Feed :feed='getFeed()'/>
            </v-card>
        </v-content>
        <Footer/>
    </v-container>
</template>

<script>
    import AppBar from "../components/AppBar";
    import NavDrawer from "../components/NavDrawer";
    import Footer from "../components/Footer";
    import Feed from "../components/Feed";

    export default {
        name: "Profile",
        components: {
            AppBar, NavDrawer, Footer, Feed
        },
        data: () => {
            return {
                name: 'Ильнур',
                surname: 'Сагитов',
                lastname: 'Маратович',
            }
        },
        methods: {
            getFeed() {
                return this.$store.getters.getFeed
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>