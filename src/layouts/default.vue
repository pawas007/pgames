<template>
  <div class="default_layout">
    <main-header/>
    <router-view/>
    <main-footer/>
  </div>
</template>

<script>
import MainHeader from "@/components/Header/HeaderMain";
import MainFooter from "@/components/Footer/Main-footer";
export default {
  name: "default",
  components: {MainFooter, MainHeader},
}
</script>



