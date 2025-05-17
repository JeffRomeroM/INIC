<template>
  <div class="menu">
    
    <router-link to="/" class="logo"><img src="../../public/ITRAM512.png" alt="logo" width="67px"></router-link>
    <nav class="nav-links">
      <router-link to="/buses">Buses</router-link>
      <router-link to="/taxis">Taxis</router-link>
      <router-link to="/mandados">Mandados</router-link>
    </nav>
  </div>
</template>

<style>
.menu {
  display: none;
  background-color: white;
  border-bottom: 1px solid #ddd;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.logo {
  font-size: 28px;
  font-weight: bold;
  color: #333;
}

.nav-links a {
  margin-right: 50px;
  text-decoration: none;
  color: #333;
  font-size: 20px;
  font-weight: 500;
}

.nav-links a.router-link-active {
  color: #007bff;
}

@media (max-width: 600px) {
  .menu {
    display: none;
  }
}
</style>
