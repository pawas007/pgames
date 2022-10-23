<template>
  <div class="section section--last">
    <div class="container">
      <div class="row">
        <agile :options="settings">
          <div v-for="(slide, i) in slides" :key="i" class="partners__img">
            <img :src="slide.image" style="width: 80%;padding-left: 5px; user-drag: none;">
          </div>
        </agile>
      </div>
    </div>
  </div>
</template>
<script>
import {VueAgile} from 'vue-agile'

export default {
  components: {
    agile: VueAgile
  },
  data: () => {
    return {
      settings: {
        speed: 500,
        navButtons: false,
        slidesToShow: 6,
        infinite: true,
        responsive: [
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 2,
            }
          },

          {
            breakpoint: 900,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 1360,
            settings: {
              slidesToShow: 6,
            }
          }
        ]
      },
      slides: [
        {image: require('@/assets/img/partners/themeforest-light-background.png')},
        {image: require('@/assets/img/partners/audiojungle-light-background.png')},
        {image: require('@/assets/img/partners/themeforest-light-background.png')},
        {image: require('@/assets/img/partners/audiojungle-light-background.png')},
        {image: require('@/assets/img/partners/themeforest-light-background.png')},
        {image: require('@/assets/img/partners/audiojungle-light-background.png')},
        {image: require('@/assets/img/partners/themeforest-light-background.png')},
        {image: require('@/assets/img/partners/audiojungle-light-background.png')},
        {image: require('@/assets/img/partners/themeforest-light-background.png')},
        {image: require('@/assets/img/partners/audiojungle-light-background.png')},
        {image: require('@/assets/img/partners/themeforest-light-background.png')},
        {image: require('@/assets/img/partners/audiojungle-light-background.png')},
        {image: require('@/assets/img/partners/themeforest-light-background.png')},
        {image: require('@/assets/img/partners/audiojungle-light-background.png')},
        {image: require('@/assets/img/partners/themeforest-light-background.png')},
      ]
    }

  },


}
</script>

<style scoped>

</style>