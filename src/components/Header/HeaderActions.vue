<template>
  <div class="header__actions">
    <router-link :to="{name:'login'}" class="header__login" v-if="!AUTH_USER">
      <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
        <path
            d='M192,176V136a40,40,0,0,1,40-40H392a40,40,0,0,1,40,40V376a40,40,0,0,1-40,40H240c-22.09,0-48-17.91-48-40V336'
            style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/>
        <polyline points='288 336 368 256 288 176'
                  style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/>
        <line x1='80' y1='256' x2='352' y2='256'
              style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/>
      </svg>
      <span>Sign in</span>
    </router-link>
    <b-dropdown right :text="AUTH_USER.name" class="login_header_btn" v-else>
      <b-dropdown-item @click="$router.push({name:'account-dashboard'})">Account</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item @click="LOGOUT">Logout</b-dropdown-item>
    </b-dropdown>

  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import {BDropdown, BDropdownItem} from 'bootstrap-vue'

export default {
  name: "HeaderActions",
  comments: {BDropdown, BDropdownItem},
  methods:{
    ...mapActions(['LOGOUT'])
  },
  computed: {
    ...mapGetters(['AUTH_USER'])
  }
}
</script>

<style scoped>

</style>