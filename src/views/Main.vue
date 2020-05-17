<template>
    <div>
        <section-tool-bar/>
        <v-content>
            <section-demo/>
            <section-company/>
            <section-beanifits/>
        </v-content>
        <section-footer/>
    </div>
</template>

<script>
    import SectionDemo from "../components/main/SectionDemo";
    import SectionToolBar from "../components/main/SectionToolBar";
    import SectionCompany from "../components/main/SectionCompany";
    import SectionBeanifits from "../components/main/SectionBeanifits";
    import SectionFooter from "../components/main/SectionFooter";

    export default {
        name: "Main",
        components: {SectionFooter, SectionBeanifits, SectionCompany, SectionToolBar, SectionDemo,}
    }
</script>

<style scoped>

</style>