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
              <a href="index.html" class="header__logo">
                <img src="@/assets/img/logo.svg" alt="">
              </a>
              <ul class="header__nav" :class="{'header__nav--active':navActive}">
                <li v-for="item in menu" class="header__nav-item">
                  <router-link class="header__nav-link" :to="{name:item.name,params:item.params}">{{ item.title }}
                    <svg v-if="item.hasOwnProperty('children') && item.children.length"
                         xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                      <path fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='48'
                            d='M112 184l144 144 144-144'/>
                    </svg>
                  </router-link>
                  <drop-down-menu
                      v-if="item.hasOwnProperty('children') && item.children.length"
                      :items="item.children"/>
                </li>
                <extra-item/>
              </ul>
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
import DropDownMenu from "@/components/Header/DropDownMenu";
import ExtraItem from "@/components/Header/ExtraItem";
import HeaderActions from "@/components/Header/HeaderActions";
import ActionBar from "@/components/Header/ActionsBar";


export default {
  name: "Main-header",
  components: {ActionBar, HeaderActions, ExtraItem, DropDownMenu},
  data() {
    return {
      menu: [
        {
          title: 'Home',
          name: 'home',

        },
        {
          title: 'Privacy policy',
          name: 'privacy-policy',
          params:{id:34}
        },
        {
          title: 'Category',
          name: 'home',
          children: [
            {
              title: 'Home',
              name: 'home',

              children: [
                {
                  title: 'Some page 1',
                  name: 'home'
                },
                {
                  title: 'Some page 1 ',
                  name: 'home',
                  children: [
                    {
                      title: 'Some page 1',
                      name: 'home'
                    },
                  ]
                }
              ]
            },
          ]
        },
        {
          title: 'Register',
          name: 'register'
        },
        {
          title: 'Login',
          name: 'login'
        }
      ],
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

<style scoped>

</style>