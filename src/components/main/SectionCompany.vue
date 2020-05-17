<template>
    <v-container>
        <v-spacer/>
        <v-row align="center"
               justify="center">
            <v-col cols="5">
                <div class="font-weight-bold black--text fa-2x pb-5">
                    О нашей компании
                </div>
                <div class="text-justify">
                    Мы команда студентов, которые хотят облегчить поиск кружков, секций и репетиторов для детей. Мы
                    надеемся, что наше решение будет полезно как родителям, так и компаниям, предоставляющим
                    образовательные услуги.
                </div>
            </v-col>
            <v-col cols="3">
                <div class="col">
                    <v-img
                            :src="`https://static.tildacdn.com/lib/unsplash/ce707dc7-c296-82ea-17e2-a19c271f8a90/photo.jpg`"
                            height="220px"
                            class="grey lighten-2"
                    ></v-img>
                </div>
                <div class="col">
                    <v-img
                            :src="`https://static.tildacdn.com/lib/unsplash/1667a31f-23b5-fd38-46c6-da018a799a2f/photo.jpg`"
                            height="220px"
                            class="grey lighten-2"
                    ></v-img>
                </div>
            </v-col>
            <v-col cols="3">
                <div class="col">
                    <v-img
                            :src="`https://static.tildacdn.com/lib/unsplash/9468621f-b1e6-8763-f900-88afbded9534/photo.jpg`"
                            height="220px"
                            class="grey lighten-2"
                    ></v-img>
                </div>
                <div class="col">
                    <v-img
                            :src="`https://static.tildacdn.com/tild3035-6566-4230-b862-383166656531/k218chim00039.jpg`"
                            height="220px"
                            class="grey lighten-2"
                    ></v-img>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "SectionCompany"
    }
</script>

<style scoped>

</style>