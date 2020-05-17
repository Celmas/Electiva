<template>
    <v-footer
            padless
    >
        <v-card
                flat
                tile
                width="100%"
                class="blue lighten-1 text-center"
        >
            <v-img src="https://static.tildacdn.com/tild6433-6564-4637-a664-633236363765/blob.png" height="300px" gradient="to top right, rgba(0, 0, 0,.5), rgba(0,0,72,.7)">
                <v-card-text>
                    <div class="font-weight-bold white--text fa-3x pa-7">
                        Позаботьтесь о будущем ребенка
                    </div>
                </v-card-text>
                <v-card-text>
                    <div class="font-weight-bold white--text fa-2x">
                        Карантин - это не навсегда!
                    </div>
                </v-card-text>
                <v-card-text>
                    <v-btn @click="scrollToTop()">
                        Вверх
                    </v-btn>
                </v-card-text>
            </v-img>

            <v-divider></v-divider>
            <v-card-text>
                <v-btn
                        v-for="icon in icons"
                        :key="icon"
                        class="mx-4"
                        icon
                >
                    <v-icon color="white" size="24px">{{ icon }}</v-icon>
                </v-btn>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>Electiva</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        name: "SectionFooter",
        data: () => ({
            icons: [
                'mdi-home',
                'mdi-email',
                'mdi-calendar',
                'mdi-delete',
            ]
        }),
        methods: {
            scrollToTop() {
                window.scrollTo(0, 0);
            }
        }
    }
</script>

<style scoped>

</style>