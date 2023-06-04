<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <div class="layout">
        <div class="Tabbar">
        我是首页
        
        </div>
        <RouterView />
    </div>
    
</template>

<style scoped>
.layout{
    /* height: 100%; */
}
.Tabbar {
    /* height: 100%; */
    /* width: 70px;
    background-color: #bfc; */
}
</style>