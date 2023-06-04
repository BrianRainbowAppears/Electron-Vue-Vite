<script setup>

import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  
  <div class="layout">
    <div class="tabbar">
      <RouterLink to="/"><el-icon><House /></el-icon>首页</RouterLink><br>
      <RouterLink to="/my"><el-icon><User /></el-icon>我的</RouterLink><br>
      <RouterLink to="/setting"><el-icon><Setting /></el-icon>设置</RouterLink>
    </div>
    <div class="router"><RouterView /></div>
    
  </div>
</template>

<style scoped>
.layout {
  height: 100%;
  width: 100%;
  display: flex;
}
  .tabbar {
    height: 100%;
    width: 70px;
    background-color: #bfc;
}

.router {
  display: inline-block;
}
</style>
