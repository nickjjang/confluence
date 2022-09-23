<template>
  <div class="wrapper">
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  min-height: 100vh;
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}
</style>
