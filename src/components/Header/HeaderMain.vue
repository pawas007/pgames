<template>
  <header class="header">
    <div class="header__wrap">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="header__content">
              <button class="header__menu" :class="{'header__menu--active':navActive}" type="button" @click="toggleNav">
                <span></span>
                <span></span>
                <span></span>
              </button>
              <router-link :to="{name:'home'}" class="header__logo">
                <img src="@/assets/img/logo.svg" alt="">
              </router-link>
              <header-nav :navActive="navActive"/>
              <header-actions/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <action-bar/>
  </header>
</template>

<script>
import HeaderActions from "@/components/Header/HeaderActions";
import ActionBar from "@/components/Header/ActionsBar";
import HeaderNav from "@/components/Header/HeaderNav";

export default {
  name: "Main-header",
  components: {HeaderNav, ActionBar, HeaderActions},
  data() {
    return {
      navActive: false
    }
  },
  methods: {
    toggleNav() {
      this.navActive = !this.navActive
    }
  }
}
</script>
