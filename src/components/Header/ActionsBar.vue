<template>
  <div class="header__wrap">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="header__content">
            <form action="#" class="header__form">
              <input type="text" class="header__input" placeholder="I'm searching for...">
              <select class="header__select">
                <option value="0">All Categories</option>
                <option value="1">Action</option>
                <option value="3">Adventure</option>
                <option value="4">Fighting</option>
                <option value="5">Flight simulation</option>
                <option value="6">Platform</option>
                <option value="7">Racing</option>
                <option value="8">RPG</option>
                <option value="9">Sports</option>
                <option value="10">Strategy</option>
                <option value="11">Survival horror</option>
              </select>
              <button class="header__btn" type="button">
                <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
                  <path d='M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z'
                        style='fill:none;stroke-miterlimit:10;stroke-width:32px'/>
                  <line x1='338.29' y1='338.29' x2='448' y2='448'
                        style='fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px'/>
                </svg>
              </button>
            </form>
            <div class="header__actions header__actions--2">
              <a href="favorites.html" class="header__link">
                <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
                  <path
                      d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'
                      style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/>
                </svg>
                <span>Favorites</span>
              </a>
              <a href="checkout.html" class="header__link">
                <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
                  <circle cx='176' cy='416' r='16'
                          style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/>
                  <circle cx='400' cy='416' r='16'
                          style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/>
                  <polyline points='48 80 112 80 160 352 416 352'
                            style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/>
                  <path d='M160,288H409.44a8,8,0,0,0,7.85-6.43l28.8-144a8,8,0,0,0-7.85-9.57H128'
                        style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/>
                </svg>
                <span>$00.00</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "ActionBar"
}
</script>

<style scoped>

</style>