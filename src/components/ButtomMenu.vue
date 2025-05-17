<template>
    <footer class="bottom-menu">
      <router-link to="/" class="menu-item" exact>
        <font-awesome-icon :icon="['fas', 'home']" style="color: #007BFF; font-size: 18px; margin-right: 5px;" />

        <span class="label">Inicio</span>
      </router-link>
      <router-link to="/buses" class="menu-item">
        <font-awesome-icon :icon="['fas', 'bus']" style="color: #007BFF; font-size: 18px; margin-right: 5px;" />

        <span class="label">Buses</span>
      </router-link>
      <router-link to="/taxis" class="menu-item">
        <font-awesome-icon :icon="['fas', 'taxi']" style="color: #007BFF; font-size: 18px; margin-right: 5px;" />
        <span class="label">Taxis</span>
      </router-link>
      <router-link to="/mandados" class="menu-item">
        <font-awesome-icon :icon="['fas', 'motorcycle']" style="color: #007BFF; font-size: 18px; margin-right: 5px;" />
        <span class="label">Mandados</span>
      </router-link>
    </footer>
  </template>
  
  <style scoped>
  .icono{
    font-size: 25px;
  }
  .bottom-menu {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    width: 100%;
    background-color: white;
    border-top: 1px solid #ddd;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.05);
    z-index: 1000;
  }
  
  .menu-item {
    text-decoration: none;
    color: #555;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    transition: color 0.2s ease;
  }
  
  .menu-item .icon {
    font-size: 20px;
  }
  
  .menu-item.router-link-exact-active,
  .menu-item.router-link-active {
    color: #1a73e8;
  }
  
  @media (min-width: 769px) {
    .bottom-menu {
      display: none;
    }
  }
  </style>
  