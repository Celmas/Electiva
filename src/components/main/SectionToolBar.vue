<template>
    <v-app-bar
            app
            hide-on-scroll
            absolute
            color="blue darken-3"
            dark
    >
        <v-app-bar-nav-icon><img src="https://img.icons8.com/dusk/64/000000/e.png" alt=""/></v-app-bar-nav-icon>
        <v-toolbar-title
                style="width: 300px"
                class="ml-0 pl-4"
        >
            <span class="hidden-sm-and-down">Electiva</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
    export default {
        name: "SectionToolBar"
    }
</script>

<style scoped>

</style>