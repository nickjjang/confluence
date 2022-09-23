<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss">
.container {
  margin: auto;
  padding: 0 10px;
  max-width: 100%;
  width: #{map-get($containers, "xl")}px;
  @each $name, $width in $breakpoints {
    @media screen and (max-width: #{$width}px) {
      width: #{map-get($containers, $name)}px;
    }
  }
}
</style>
