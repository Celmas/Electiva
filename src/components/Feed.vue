<template>
    <div>
        <v-list two-line>
            <v-list-item
                    v-for="(feed, i) of feed"
                    v-bind:key="i"
                    @click="goToElectiva(feed)"
            >
                <v-list-item-content>
                    <v-col cols="2">
                        <v-img
                                class="white--text mr-4"
                                max-width="150px"
                                max-height="150px"
                                :src='feed.img'
                        >
                        </v-img>
                    </v-col>
                    <v-col>
                        <v-list-item-title>
                            {{ feed.title }}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            {{ feed.text }}
                        </v-list-item-subtitle>

                    </v-col>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
    export default {
        name: "Feed",
        props: ['feed'],
        methods: {
            goToElectiva(feed) {
                this.$store.commit('setCurrentElectiva', feed.electiva_id)
                this.$router.push('/electiva')
            }
        }
    }
</script>

<style scoped>

</style>