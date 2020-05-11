<template>
    <div>
        <v-app-bar
                :clipped-left="$vuetify.breakpoint.lgAndUp"
                app
                color="blue darken-3"
                dark
        >
            <v-app-bar-nav-icon @click.stop=changeDrawer()></v-app-bar-nav-icon>
            <v-toolbar-title
                    style="width: 300px"
                    class="ml-0 pl-4"
            >
                <span class="hidden-sm-and-down">Electiva</span>
            </v-toolbar-title>
            <v-text-field
                    flat
                    solo-inverted
                    hide-details
                    prepend-inner-icon="mdi-magnify"
                    label="Search"
                    class="hidden-sm-and-down"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-bell</v-icon>
            </v-btn>
            <v-btn
                    icon
                    large
            >
                <v-avatar
                        size="32px"
                        item
                >
                    <v-img
                            src="https://img.icons8.com/dusk/64/000000/knowledge-sharing.png"
                            alt="Vuetify"
                    ></v-img></v-avatar>
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: "AppBar",
        data: () => ({
            drawer: null
        }),
        methods: {
            changeDrawer() {
                console.log("before " + this.drawer);
                this.drawer = !this.drawer;
                console.log("after " + this.drawer);
                this.$store.commit("setDrawer", this.drawer)
            }
        },
        mounted() {
            this.drawer = this.$store.getters.getDrawer
        }
    }
</script>

<style scoped>

</style>