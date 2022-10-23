<template>
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
  </ul>
</template>

<script>
import DropDownMenu from "@/components/Header/DropDownMenu";
export default {
  name: "HeaderNav",
  props:{

    navActive: {
      type: Boolean,
      required: true
    },

  },
  components: { DropDownMenu},
  data() {
    return {
      menu: [
        {
          title: 'Admin',
          name: 'admin-dashboard',

        },
        {
          title: 'Home',
          name: 'home',

        },
        {
          title: 'Privacy policy',
          name: 'privacy-policy',

        },
        {
          title: 'About',
          name: 'about',
        },
        {
          title: 'Contact us',
          name: 'contact-us',
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
      ],
    }
  },
}
</script>

<style scoped>

</style>