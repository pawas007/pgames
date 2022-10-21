<template>
  <div class="section section--last">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="partners ">
            <vueper-slides
                :autoplay=true
                :arrows="false"
                :bullets="false"
                :visible-slides="6"
                fixed-height="60px"
                :duration="2000"
                :infinite="true"
                :gap="3"
                :slide-ratio="1 / 4"
                class="no-shadow"
                :dragging-distance="200"
                :breakpoints="{ 960: { visibleSlides: 2, slideMultiple: 2 },660: { visibleSlides: 1, slideMultiple: 1 } }"
            >
              <vueper-slide v-for="(slide, i) in slides" :key="i" class="partners__img">
                <template #content>

                  <img :src="slide.image" style="width: 100%; user-drag: none;">
                </template>
              </vueper-slide>
            </vueper-slides>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import {VueperSlides, VueperSlide} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: "PartnersCarousel",
  components: {VueperSlides, VueperSlide},
  data: () => ({
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
  })


}
</script>

<style scoped>

</style>