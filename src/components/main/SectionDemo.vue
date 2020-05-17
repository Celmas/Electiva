<template>
    <div>
        <v-parallax src="https://unsplash.com/photos/ORDz1m1-q0I/download?force=true&w=1920" height="600">
            <v-layout column align-center justify-center class="white--text">
                <h1 class="white--text mb-2 display-1 text-xs-center"
                    style="font-weight: 900; text-shadow: 3px 2px #000000">ELECTIVA</h1>
                <div class="white--text subheading mb-3 text-xs-center"
                     style="font-weight: 900; text-shadow: 2px 2px #000000">Первый агрегатор услуг в сфере дополнительного образования детей и школьников</div>
                <v-btn class="blue darken-1 mt-5" dark large @click="$router.push('/home')">
                    Присоединяйся
                </v-btn>
            </v-layout>
        </v-parallax>
    </div>
</template>

<script>
    export default {
        name: "SectionDemo",
        data: function () {
            return {

            }
        }
    }
</script>

<style>

</style>