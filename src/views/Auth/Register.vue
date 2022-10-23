<template>
  <div class="sign section--full-bg" :style="`background-image: url('${require('@/assets/img/authbg.jpg')}');`"
       style="background-size:cover ">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <validation-observer #default="{ handleSubmit }" ref="register" class="sign__content">
            <form class="sign__form" @submit.stop.prevent="handleSubmit(submit)">
              <router-link :to="{name:'home'}" class="sign__logo">
                <img src="@/assets/img/logo.svg" alt="">
              </router-link>
              <validation-provider
                  vid="name"
                  tag="div"
                  class="sign__group"
                  v-slot="{ errors }"
                  name="Name"
                  rules="required">
                <input type="text"
                       v-model="user.name"
                       class="sign__input"
                       placeholder="Name"
                       :class="{'invalid_input':errors.length > 0}">
                <span v-if="errors.length" class="invalid_message"
                      :state="errors.length > 0 ? false : null">{{ errors[0] }}</span>
              </validation-provider>
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
                  rules="required|min:8">
                <input type="password"
                       v-model="user.password"
                       class="sign__input"
                       placeholder="Password"
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
                       v-model="user.password_confirmation"
                       class="sign__input"
                       placeholder="Password"
                       :class="{'invalid_input':errors.length > 0}">
                <span v-if="errors.length" class="invalid_message"
                      :state="errors.length > 0 ? false : null">{{ errors[0] }}</span>
              </validation-provider>
              <validation-provider
                  class="sign__group sign__group--checkbox"
                  tag="div"
                  style="width: 100%"
                  v-slot="{ errors }"
                  name="Privacy Policy"
                  :rules="{ required: { allowFalse: false }}">
                <input id="policy" type="checkbox" v-model="policy">
                <label for="policy">I agree to the
                  <router-link :to="{name:'privacy-policy'}">Privacy Policy</router-link>
                </label>
                <br>
                <span v-if="errors.length" class="invalid_message"
                      :state="errors.length > 0 ? false : null">{{ errors[0] }}</span>
              </validation-provider>
              <button class="sign__btn" type="submit">Sign up</button>
              <span class="sign__delimiter">or</span>
              <login-social/>
              <span class="sign__text">Already have an account?
                <router-link :to="{name:'login'}">Sign in!</router-link></span>
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
  name: "Register",
  components: {
    LoginSocial,
    BreadcrumbsDefault,
    ValidationObserver,
    ValidationProvider,
  }, data() {
    return {
      user: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null
      },
      policy: null
    }
  },
  methods: {
    ...mapActions(['REGISTER']),
    submit() {
      this.REGISTER(this.user).then(() => {
        this.$toast.success("Registration success", {
          timeout: 2000
        });
        this.$router.push({name: 'login'})
      }).catch(errors => {
        if (errors.response.status === 422) {
          this.$refs.register.setErrors(errors.response.data.errors)
        }
      })
    }
  }
}
</script>
