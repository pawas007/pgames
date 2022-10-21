<template>
  <div class="sign section--full-bg" :style="`background-image: url('${require('@/assets/img/authbg.jpg')}');`" style="background-size:cover ">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <validation-observer #default="{ handleSubmit }" ref="register" class="sign__content">
            <form class="sign__form" @submit.stop.prevent="handleSubmit(submit)">
              <a href="index.html" class="sign__logo">
                <img src="@/assets/img/logo.svg" alt="">
              </a>
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
                <label for="policy">I agree to the <router-link :to="{name:'privacy-policy'}">Privacy Policy</router-link></label>
                <br>
                <span v-if="errors.length" class="invalid_message"
                      :state="errors.length > 0 ? false : null">{{ errors[0] }}</span>
              </validation-provider>
              <button class="sign__btn" type="submit">Sign up</button>
              <span class="sign__delimiter">or</span>
              <div class="sign__social">
                <a class="fb" href="#">
                  <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
                    <path
                        d='M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z'/>
                  </svg>
                </a>
                <a class="gl" href="#">
                  <svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'>
                    <path
                        d='M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z'/>
                  </svg>
                </a>
              </div>
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

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  });
});

export default {
  name: "Register",
  components: {
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
