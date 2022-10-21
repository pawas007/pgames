<template>
  <li class="header__nav-item">
    <a class="header__nav-link header__nav-link--more" href="#" role="button" id="dropdownMenu3"
       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
        <circle cx='256' cy='256' r='32' style='fill:none; stroke-miterlimit:10;stroke-width:32px'/>
        <circle cx='416' cy='256' r='32' style='fill:none;stroke-miterlimit:10;stroke-width:32px'/>
        <circle cx='96' cy='256' r='32' style='fill:none;stroke-miterlimit:10;stroke-width:32px'/>
      </svg>
    </a>
    <ul class="dropdown-menu header__nav-menu header__nav-menu--scroll" aria-labelledby="dropdownMenu3">
      <li><a href="checkout.html">Checkout</a></li>
    </ul>
  </li>
</template>

<script>
export default {
name: "ExtraItem"
}
</script>

<style scoped>

</style>