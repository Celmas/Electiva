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
                        <v-img class="mr-4"
                               :src="electiva.img"
                        ></v-img>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="8">
                        <v-card-text>
                            <v-list three-line>
                                <v-card-text>
                                    Reviews
                                </v-card-text>
                                <template v-for="(review) in electiva.reviews">
                                    <v-list-item
                                            :key="review.id"

                                    >
                                        <v-list-item-avatar>
                                            <v-img :src="review.avatar"></v-img>
                                        </v-list-item-avatar>

                                        <v-list-item-content>
                                            <v-list-item-title v-html="review.author"></v-list-item-title>
                                            <v-list-item-subtitle v-html="review.text"></v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>

                                </template>
                            </v-list>
                        </v-card-text>
                    </v-col>
                    <v-col cols="4">
                        <v-card-text
                                align="center"
                                class="font-weight-bold"
                        >
                            Местоположение
                        </v-card-text>
                        <v-img
                                class="mr-4"
                                src="https://www.google.com/maps/d/thumbnail?mid=1N6j-_SrRjZO7t2lL7hmchg3na68&hl=ru"
                        ></v-img>
                    </v-col>
                </v-row>
                <v-row align-content="center" justify="center">
                    <v-col cols="9">
                        <v-textarea
                                v-model="review"
                                auto-grow
                                clearable
                                outlined
                                rows="3"
                                label="Отзыв"
                                hint="Напиши честный отзыв"
                                class="pl-5 pr-5"
                        ></v-textarea>
                    </v-col>
                    <v-col cols="3" align="center">
                        <v-rating
                                class="mb-2"
                                dense
                                small
                                v-model="rating"
                        ></v-rating>
                        <v-btn
                                class="mt-1 white--text"
                                large
                                color="blue darken-4"
                                @click="saveReview"
                        >
                            Отправить
                        </v-btn>
                    </v-col>

                </v-row>
                <v-row>

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
                rating: 0,
                review: ''
            }
        },
        components: {Footer, NavDrawer, AppBar},
        mounted() {
            this.electiva = this.$store.getters.getCurrentElectiva
        },
        methods: {
            saveReview() {
                if (this.review.length < 30) {
                    alert("Отзыв должен быть больше 30 символов")
                    return
                } else if (this.rating === 0) {
                    alert("Поставьте оценку")
                    return;
                }

                const review = {
                    id: this.electiva.reviews.length,
                    author: "Ильнур",
                    text: this.review,
                    rate: this.rating,
                    avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg"
                };
                this.electiva.reviews.push(review);
                this.$store.commit("updateElectiva", this.electiva);
                const feed = {
                    img: this.electiva.img,
                    text: 'Оставлен отзыв в '
                        .concat(new Date().getHours().toString())
                        .concat(':')
                        .concat(new Date().getMinutes().toString()),
                    title: this.electiva.title,
                    electiva_id: this.electiva.id
                }
                this.$store.commit("updateFeed", feed);
                this.rating = 0;
                this.review = "";
            }
        }
    }
</script>

<style scoped>

</style>