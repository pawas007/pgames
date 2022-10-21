<template>
   <component :is="layout"/>
</template>
<script>
import Default from "@/layouts/default";
import Blank from "@/layouts/blank";


export default {
  components: {Blank, Default},
  computed: {
    layout() {
      const layout = this.$route.meta.layout || 'default'
      return () => import(`@/layouts/${layout}.vue`)
    }
  }
}
</script>
<style lang="scss">
@import "assets/css/bootstrap-reboot.min.css";
@import "assets/css/bootstrap-grid.min.css";
@import "assets/css/owl.carousel.min.css";
@import "assets/css/magnific-popup.css";
@import "assets/css/nouislider.min.css";
@import "assets/css/jquery.mCustomScrollbar.min.css";
@import "assets/css/paymentfont.min.css";
@import "assets/css/main.css";
@import "assets/scss/custom.scss";
</style>