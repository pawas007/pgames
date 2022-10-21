<template>
  <div class="sign section--full-bg" :style="`background-image: url('${require('@/assets/img/authbg.jpg')}');`"
       style="background-size:cover ">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="page-404__wrap">
            <div class="page-404__content">
              <h1 class="page-404__title">404</h1>
              <p class="page-404__text">The page you are looking for not available!</p>
              <router-link class="page-404__btn" :to="{name:'home'}">Go Home</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "404",
}
</script>