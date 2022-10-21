<template>
  <ul class="breadcrumb">
    <li
        v-for="(breadcrumb, idx) in breadcrumbList"
        :key="idx"
        class="breadcrumb__item "
        breadcrumb__item--active
        :class="{ 'breadcrumb__item--active': !breadcrumb.link }">
      <router-link :disabled="!breadcrumb.link"  :to="{name:breadcrumb.link}">  {{ breadcrumb.name }} </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: "BreadcrumbsDefault",

  data() {
    return {
      breadcrumbList: [],
    };
  },
  mounted() {
    this.updateList();
  },
  watch: {
    $route() {
      this.updateList();
    },
  },
  methods: {
    updateList() {
      this.breadcrumbList = this.$route.meta.breadcrumb;
    },
  },


}
</script>

<style scoped>

</style>