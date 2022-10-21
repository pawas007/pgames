<template>
  <ul class="dropdown-menu header__nav-menu" v-if="items.length">
    <li v-for="item in items" class="header__nav-item">
      <router-link class="header__nav-link" :to="{name:item.name}">
        {{ item.title }}
      </router-link>
      <drop-down-menu
          v-if="item.hasOwnProperty('children') && item.children.length"
          :items="item.children"/>
    </li>
  </ul>
</template>

<script>
export default {
  name: "DropDownMenu",
  props: ['items']
}
</script>

<style scoped>

</style>