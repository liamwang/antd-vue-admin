<template>
  <span class="nav-item">
    <slot />
  </span>
</template>

<style lang="less">
.nav-item {
  display: inline-block;
  align-items: center;
  padding: 0 15px;
  line-height: 50px;
  &:hover {
    cursor: pointer;
    background: #f5f7f9;
  }
  .anticon {
    font-size: 16px;
  }
}
</style>
