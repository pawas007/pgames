<template>
  <div class="sign section--full-bg" :style="`background-image: url('${require('@/assets/img/authbg.jpg')}');`"
       style="background-size:cover ">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <validation-observer #default="{ handleSubmit }" ref="reset" class="sign__content">
            <form class="sign__form" @submit.stop.prevent="handleSubmit(submit)">
              <a href="index.html" class="sign__logo">
                <img src="@/assets/img/logo.svg" alt="">
              </a>
              <validation-provider
                  vid="password"
                  tag="div"
                  class="sign__group"
                  v-slot="{ errors }"
                  name="Password"
                  rules="required|min:8">
                <input type="password"
                       v-model="password"
                       class="sign__input"
                       placeholder="New password"
                       :class="{'invalid_input':errors.length > 0}">
                <span v-if="errors.length" class="invalid_message"
                      :state="errors.length > 0 ? false : null">{{ errors[0] }}</span>
              </validation-provider>
              <validation-provider
                  vid="password_confirmation"
                  tag="div"
                  class="sign__group"
                  v-slot="{ errors }"
                  name="Password confirmation"
                  rules="required|min:8|confirmed:password">
                <input type="password"
                       v-model="password_confirmation"
                       class="sign__input"
                       placeholder="Password"
                       :class="{'invalid_input':errors.length > 0}">
                <span v-if="errors.length" class="invalid_message"
                      :state="errors.length > 0 ? false : null">{{ errors[0] }}</span>
              </validation-provider>
              <button class="sign__btn" type="submit">Reset</button>

              <span class="sign__text"><router-link :to="{name:'forgot-password'}" >Forgot password?</router-link></span>
            </form>
          </validation-observer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {ValidationObserver, ValidationProvider} from "vee-validate";
import axios from "@/libs/axios";
import {extend} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import {messages} from 'vee-validate/dist/locale/en.json';


Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  });
});

export default {
  name: "ResetPassword",
  components: {
    ValidationObserver,
    ValidationProvider,
  }, data() {
    return {
      userToken: this.$route.query.token,
      userEmail: this.$route.query.email,
      password: null,
      password_confirmation: null
    }
  },
  methods: {
    submit() {

      axios.post('password/reset',
          {
            token: this.userToken,
            email: this.userEmail,
            password: this.password,
            password_confirmation: this.password_confirmation
          }
      ).then(() => {
            this.$toast.success("Reset password success", {
              timeout: 2000
            });
            this.$router.push({name: 'login'})
          }
      ).catch((error) => {
        this.$refs.reset.setErrors({password:error.response.data.message})
      })
    }
  }
}
</script>
