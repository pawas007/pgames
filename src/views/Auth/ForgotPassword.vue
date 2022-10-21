<template>
  <div class="sign section--full-bg" :style="`background-image: url('${require('@/assets/img/authbg.jpg')}');`" style="background-size:cover ">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <validation-observer #default="{ handleSubmit }" ref="forgot" class="sign__content">
            <form class="sign__form" @submit.stop.prevent="handleSubmit(submit)">
              <a href="index.html" class="sign__logo">
                <img src="@/assets/img/logo.svg" alt="">
              </a>
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
              <span class="sign__text">We will send a password to your Email</span>
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
    ...mapActions(['FORGOT_PASSWORD']),
    submit() {
      this.FORGOT_PASSWORD({email:this.email}).then(() => {
        this.$toast.success("We will send a password to your Email", {
          timeout: 5000
        });
        this.email = null
        this.$refs.forgot.reset()
      }).catch(errors => {
        if (errors.response.status === 422) {
          this.$refs.forgot.setErrors(errors.response.data.errors)
        }
      })
    }
  }
}
</script>