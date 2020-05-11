<template>
    <v-footer
            absolute
            height="auto"
            color="blue darken-4"
            app
    >
            <v-container>
                <v-row align-content="center" justify="center">
                    <v-col align-self="center" cols="auto">
                        <v-btn
                                v-for="icon in icons"
                                :key="icon"
                                class="white--text"
                                icon
                        >
                            <v-icon size="24px">{{ icon }}</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col align-self="center" cols="auto">
                        <v-btn
                                v-for="link in links"
                                :key="link"
                                color="white"
                                text
                                rounded
                        >
                            {{ link }}
                        </v-btn>
                    </v-col>
                    <v-col align-self="center" cols="auto">
                        <div class="white--text">&copy; 2020 — <strong>Крутые бобры</strong></div>
                    </v-col>
                </v-row>
            </v-container>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer",
        data: () => ({
            icons: [
                'fab fa-facebook',
                'fab fa-twitter',
                'fab fa-google-plus',
                'fab fa-instagram'
            ],
            links: [
                'Home',
                'About Us',
                'Team',
                'Contact Us'
            ]
        })
    }
</script>

<style scoped>

</style>