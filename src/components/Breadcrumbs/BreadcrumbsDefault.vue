<template>
  <section class="section section_breadcrumbs  section--last section--head"  :style="`background-image: url('${require('@/assets/img/bg.jpg')}');`">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section__wrap">
            <h2 class="section__title text-capitalize">{{ pageTitle }}</h2>
            <ul class="breadcrumb">
              <li v-for="(breadcrumb, idx) in breadcrumbList"
                  :key="idx"
                  class="breadcrumb__item "
                  breadcrumb__item--active
                  :class="{ 'breadcrumb__item--active': !breadcrumb.link }">
                <router-link :disabled="!breadcrumb.link" :to="{name:breadcrumb.link}"> {{
                    breadcrumb.name
                  }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
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
  }, computed: {
    pageTitle() {


      return  this.$route.name.split('-').join(' ');

    }

  }
}
</script>

<style scoped>

</style>