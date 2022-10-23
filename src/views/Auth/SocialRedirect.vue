<template>
  <full-loader :overlay="overlay"/>
</template>
<script>
import {mapActions} from "vuex";
import FullLoader from "@/components/Loaders/FullLoader";

export default {
  name: "SocialRedirect",
  components: {FullLoader},
  data: () => {
    return {
      overlay: true
    }
  },
  mounted() {
    this.socialAuth()
  },
  methods: {
    ...mapActions(['LOGIN_SOCIAL_CALLBACK', 'GET_AUTH_USER']),
    socialAuth() {
      const payload = {
        code: this.$route.query.code,
        provider: this.$route.path.split('/')[2]
      }
      this.LOGIN_SOCIAL_CALLBACK(payload).then(() => {
        this.GET_AUTH_USER()
        this.$router.push({name: 'home'})
      }).catch(() => {
        this.$toast.error("Auth error", {
          timeout: 2000
        });

      })
    }
  }
}
</script>
