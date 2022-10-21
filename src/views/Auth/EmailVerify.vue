<template>
  <div class="sign section--full-bg" :style="`background-image: url('${require('@/assets/img/authbg.jpg')}');`"
       style="background-size:cover ">
    <v-overlay :value="overlay">
      <v-progress-circular
          indeterminate
          size="64"
      ></v-progress-circular>
    </v-overlay>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="sign__content">
            <div class="sign__form" v-if="!overlay">
              <a href="index.html" class="sign__logo">
                <img src="@/assets/img/logo.svg" alt="">
              </a>
              <div class="alreadyVerify" v-if="status === 200">
                <span class="sign__text">Already verified</span>
                <router-link :to="{name:'login'}" class="sign__btn" type="button">Login</router-link>
              </div>
              <div class="verifyError" v-else-if="status === 404">
                <span class="sign__text">Invalid/Expired token</span>
                <router-link :to="{name:'email-resend'}" class="sign__btn" type="button">Resend</router-link>
              </div>
              <div class="verifySuccess" v-else-if="status === 201">
                <span class="sign__text">Hello! Your email is verified</span>
                <router-link :to="{name:'login'}" class="sign__btn" type="button">Login</router-link>
              </div>
              <div class="serverErrorVerify" v-else>
                <span class="sign__text">Verification error</span>
                <router-link :to="{name:'email-resend'}" class="sign__btn" type="button">Resend</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EmailVerify",
  data() {
    return {
      status: null,
      overlay: true
    }
  }, methods: {
    userEmailVerify() {
      if (!this.$route.query.verify_url || !this.$route.query.hash || !this.$route.query.hash) {
        this.status = false
      } else {
        let verifyUrl = this.$route.query.verify_url + '&hash=' + this.$route.query.hash + '&signature=' + this.$route.query.signature;
        axios.get(verifyUrl).then(response => {
              this.status = response.status
            }
        ).catch(error => {
          if (error && error.response.status === 404) {
            this.status = error.response.status
          }
        })
      }
      setTimeout(() => {
        this.overlay = false
      }, 2000)
    }
  }, mounted() {
    this.userEmailVerify()
  },
}
</script>