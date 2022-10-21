<template>
  <div id="app">
    <main-header/>
    <router-view/>
    <main-footer/>
  </div>
</template>

<script>
import MainHeader from "@/components/Header/Main-header";
import MainFooter from "@/components/Footer/Main-footer";
export default {
name: "default",
  components: { MainFooter, MainHeader},
}
</script>

<style scoped>

</style>