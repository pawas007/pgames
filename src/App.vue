<template>
  <div id="app" class="position-relative">
    <full-loader v-if="overlay"/>
    <component :is="layout"/>
  </div>
</template>
<script>
import Default from "@/layouts/default";
import Blank from "@/layouts/blank";
import Account from "@/layouts/account";
import Admin from "@/layouts/admin";
import {mapActions} from "vuex";
import FullLoader from "@/components/Loaders/FullLoader";
import '@/assets/scss/custom.scss'


export default {
  components: {FullLoader, Blank, Default, Admin, Account},
  data: () => {
    return {
      overlay: true
    }
  },
  methods: {
    ...mapActions(['GET_AUTH_USER']),
  },
  mounted() {
    this.GET_AUTH_USER().finally(() => {
      setTimeout(() => {
        this.overlay = false
      }, 1000)

    })
  },
  computed: {
    layout() {
      const layout = this.$route.meta.layout || 'default'
      return () => import(`@/layouts/${layout}.vue`)
    }
  }
}
</script>
