<template>
  <div class="button">
    <a class="link" v-link="{path:'/en'}">English</a>
    <a class="link" v-link="{path:'/zh-cn'}">中文</a>
  </div>
</template>

<style lang="css" scoped>
  .link {
    color: #26a2ff;
    padding: 0 10px;
    transition: all .2s;
    border-right: 1px solid #26a2ff;
  }

  .link:last-child {
    border-right: 0;
    padding-right: 30px;
  }

  .link:hover {
    opacity: .6;
  }
</style>
