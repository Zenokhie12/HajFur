<script setup>
import { ref } from 'vue'

import Categories from './components/Categories.vue';
import Home from './components/Home.vue';

const currentTab = ref('Home');
</script>

<template>
  <div class="navbar">
    <a href="App.vue" class="logo">
      <img src="/src/assets/HajFur_Logo.png" alt="Hajar Furniture Logo" style="height: 50px; width: auto;">
    </a>
    <button @click="currentTab='Home'">Home</button>
    <button @click="currentTab='Categories'">Categories</button>
    <button @click="currentTab='Products'">Products</button>
  </div>
  <div class="app-container">
    <main>
      <Home v-if="currentTab === 'Home'" />
      <Categories v-else-if="currentTab === 'Categories'" />
    </main>
  </div>
</template>

<style scoped>

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--primary-color);
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0 20px;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: #ffeaea;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #c7c7c7
}

button {
  margin: 0 10px;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  background-color: transparent;
}

button:hover {
  background-color: var(--primary-color);
  color: #fff;
}

button:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--primary-color);
}

@media (max-width: 426px) {
  .navbar {
      padding: 10px 0;
  }

  button {
      margin: 0 3px;
      padding: 8px 15px;
  }
  .logo {
      font-size: 2rem;
  }
}

@media (max-width: 321px) {
  .navbar {
      padding: 10px 0;
  }

  button {
      margin: 2px;
      padding: 8px 10px;
  }
  .logo {
      font-size: 2rem;
      margin: 0 10px;
  }
}
</style>