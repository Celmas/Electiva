<template>
    <div>
        <v-list>
            <v-list-item-group
                    v-for="(electiva, i) of electivas"
                    v-bind:key="i"
            >
                <v-list-item @click="goToElectiva(i)">
                    <electiva-item
                            v-bind:electiva="electiva"
                            v-bind:index="i"
                    ></electiva-item>
                </v-list-item>
            </v-list-item-group>

        </v-list>
    </div>
</template>

<script>
    import ElectivaItem from "./ElectivaItem";

    export default {
        name: "ElectivaList",
        props: ['electivas'],
        components: {ElectivaItem},
        methods: {
            goToElectiva(index) {
                this.$store.commit("setCurrentElectiva", index)
                this.$router.push('/electiva')
            }
        }
    }
</script>

<style scoped>

</style>