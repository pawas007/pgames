<template>
  <div class="sign section--full-bg" :style="`background-image: url('${require('@/assets/img/authbg.jpg')}');`"
       style="background-size:cover ">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <validation-observer #default="{ handleSubmit }" ref="login" class="sign__content">
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
                       v-model="user.email"
                       class="sign__input"
                       placeholder="Email"
                       :class="{'invalid_input':errors.length > 0}">
                <span v-if="errors.length" class="invalid_message"
                      :state="errors.length > 0 ? false : null">{{ errors[0] }}</span>
              </validation-provider>
              <validation-provider
                  vid="password"
                  tag="div"
                  class="sign__group"
                  v-slot="{ errors }"
                  name="Password"
                  rules="required">
                <input type="password"
                       v-model="user.password"
                       class="sign__input"
                       placeholder="Password"
                       :class="{'invalid_input':errors.length > 0}">
                <span v-if="errors.length" class="invalid_message"
                      :state="errors.length > 0 ? false : null">{{ errors[0] }}</span>
              </validation-provider>
              <div class="sign__group sign__group--checkbox">
                <input id="remember" type="checkbox" v-model="user.remember">
                <label for="remember">Remember me</label>
              </div>
              <button class="sign__btn" type="submit">Sign in</button>
              <span class="sign__delimiter">or</span>

              <span class="sign__text">Don't have an account? <router-link
                  :to="{name:'register'}">Sign up!</router-link></span>
              <span class="sign__text"><router-link :to="{name:'forgot-password'}">Forgot password?</router-link></span>
              <span class="sign__text"><router-link :to="{name:'email-resend'}">Verify email</router-link></span>
              <LoginSocial/>
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
import LoginSocial from "@/views/Auth/LoginSocial";

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  });
});

export default {
  name: "Login",
  components: {
    LoginSocial,
    BreadcrumbsDefault,
    ValidationObserver,
    ValidationProvider,
  }, data() {
    return {
      user: {
        email: null,
        password: null,
        remember: null
      },

    }
  },
  methods: {
    ...mapActions(['LOGIN','GET_AUTH_USER']),
    submit() {
      this.LOGIN(this.user).then(() => {
        this.GET_AUTH_USER()
        this.$router.push({name: 'home'})
      }).catch(errors => {
        if (errors.response.data.status === 404) {
          this.$refs.login.setErrors(
              {password: errors.response.data.message}
          )
        }
      })
    }
  }
}
</script>