<template>
  <div class="app-container">
    <MenuTop />
    <ButtomMenu />
    <img src="../public/ITRAM512.png" alt="ggh" class="logoi">
    <main class="main-content">
      <router-view />
      <Publicidad/>
      
      <InstallButon />
    </main>
  </div>
</template>

<script setup>
import ButtomMenu from './components/ButtomMenu.vue';
import InstallButon from './components/InstallButon.vue';
import MenuTop from './components/MenuTop.vue';
import Publicidad from './components/Publicidad.vue';
</script>

<style>
.logoi{
  width: 10vw;
  height: 5vh;
  position: fixed;
}
.app-container {
  width: 100%;
  margin: auto;
}
.main-content {
  width: 100%;
}

</style>
