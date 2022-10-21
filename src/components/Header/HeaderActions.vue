<template>
  <div class="header__actions">
    <div class="header__lang">
      <a class="header__lang-btn" href="#" role="button" id="dropdownMenuLang" data-toggle="dropdown"
         aria-haspopup="true" aria-expanded="false">
        <img src="@/assets/img/flags/uk.svg" alt="">
        <span>EN</span>
        <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
          <path
              d='M98,190.06,237.78,353.18a24,24,0,0,0,36.44,0L414,190.06c13.34-15.57,2.28-39.62-18.22-39.62H116.18C95.68,150.44,84.62,174.49,98,190.06Z'/>
        </svg>
      </a>

      <ul class="dropdown-menu header__lang-menu" aria-labelledby="dropdownMenuLang">
        <li><a href="#"><img src="@/assets/img/flags/spain.svg" alt=""><span>SP</span></a></li>
        <li><a href="#"><img src="@/assets/img/flags/russia.svg" alt=""><span>RU</span></a></li>
        <li><a href="#"><img src="@/assets/img/flags/china.svg" alt=""><span>CH</span></a></li>
      </ul>
    </div>

    <a href="signin.html" class="header__login">
      <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
        <path
            d='M192,176V136a40,40,0,0,1,40-40H392a40,40,0,0,1,40,40V376a40,40,0,0,1-40,40H240c-22.09,0-48-17.91-48-40V336'
            style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/>
        <polyline points='288 336 368 256 288 176'
                  style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/>
        <line x1='80' y1='256' x2='352' y2='256'
              style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/>
      </svg>
      <span>Sign in</span>
    </a>
  </div>
</template>

<script>
export default {
name: "HeaderActions"
}
</script>

<style scoped>

</style>