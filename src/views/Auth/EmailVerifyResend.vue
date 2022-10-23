<template>
  <div class="sign section--full-bg" :style="`background-image: url('${require('@/assets/img/authbg.jpg')}');`"
       style="background-size:cover ">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <validation-observer #default="{ handleSubmit }" ref="resendEmail" class="sign__content">
            <form class="sign__form" @submit.stop.prevent="handleSubmit(submit)">
              <router-link :to="{name:'home'}" class="sign__logo">
                <img src="@/assets/img/logo.svg" alt="">
              </router-link>
              <validation-provider
                  vid="email"
                  tag="div"
                  class="sign__group"
                  v-slot="{ errors }"
                  name="Email"
                  rules="required|email">
                <input type="text"
                       vid="email"
                       v-model="email"
                       class="sign__input"
                       placeholder="Email"
                       :class="{'invalid_input':errors.length > 0}">
                <span v-if="errors.length" class="invalid_message"
                      :state="errors.length > 0 ? false : null">{{ errors[0] }}</span>
              </validation-provider>
              <button class="sign__btn" type="submit">Send</button>
              <span class="sign__text">We will send a verification to Email</span>
            </form>
          </validation-observer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ValidationObserver, ValidationProvider} from "vee-validate";
import {mapActions} from 'vuex'
import {extend} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import {messages} from 'vee-validate/dist/locale/en.json';
import BreadcrumbsDefault from "@/components/Breadcrumbs/BreadcrumbsDefault";

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  });
});

export default {
  name: "Login",
  components: {
    BreadcrumbsDefault,
    ValidationObserver,
    ValidationProvider,
  }, data() {
    return {
      email: null,
    }
  },
  methods: {
    ...mapActions(['RESEND_EMAIL']),
    submit() {
      this.RESEND_EMAIL({email: this.email}).then(() => {
        this.$toast.success("We will send a verify Email", {
          timeout: 5000
        });
        this.email = null
        this.$refs.resendEmail.reset()
      }).catch(errors => {
        if (errors.response.status === 422) {
          this.$refs.resendEmail.setErrors({email: errors.response.data.message})
        }
      })
    }
  }
}
</script>