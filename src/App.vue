<template>
  <div id="app">
    <nav>
      <router-link :to="{name:'home'}">Home</router-link> |
      <router-link :to="{name:'register'}">Register</router-link> |
      <router-link :to="{name:'login'}">Login</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
</style>
