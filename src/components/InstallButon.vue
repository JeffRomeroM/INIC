<template>
    <button
      v-if="showInstallButton"
      class="install-button"
      @click="instalarApp"
    >
      📲 Instalar App
    </button>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const deferredPrompt = ref(null)
  const showInstallButton = ref(false)
  
  onMounted(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      deferredPrompt.value = e
      showInstallButton.value = true
    })
  
    window.addEventListener('appinstalled', () => {
      showInstallButton.value = false
      deferredPrompt.value = null
    })
  })
  
  const instalarApp = async () => {
    if (deferredPrompt.value) {
      deferredPrompt.value.prompt()
      const result = await deferredPrompt.value.userChoice
      if (result.outcome === 'accepted') {
        console.log('App instalada')
      }
      showInstallButton.value = false
      deferredPrompt.value = null
    }
  }
  </script>
  
  <style scoped>
  .install-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #cc9a11;
    color: white;
    border: none;
    padding: 12px 16px;
    font-size: 16px;
    border-radius: 50px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    z-index: 999;
    transition: background-color 0.3s ease;
  }
  .install-button:hover {
    background-color: #a77c0e;
  }
  </style>
  