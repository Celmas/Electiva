<template>
    <div class="flex">
        <v-card
        >
            <v-row align="center" justify="center">
                <v-col cols="8">
                    <v-card-title>
                        {{ electiva.title }}
                    </v-card-title>
                    <v-card-subtitle>
                        <v-rating
                                :value=electiva.rating
                                dense
                                small
                                half-increments
                        ></v-rating>
                    </v-card-subtitle>

                    <v-card-text>
                        {{ electiva.text }}
                    </v-card-text>
                </v-col>
                <v-col cols="4" align="right">
                    <v-img
                            class="white--text mr-4"
                            max-width="150px"
                            max-height="150px"
                            :src='electiva.img'
                    >
                    </v-img>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "ElectivaItem",
        props: {
            electiva: {
                type: Object,
                required: true
            },
            index: Number
        }
    }
</script>

<style scoped>

</style>