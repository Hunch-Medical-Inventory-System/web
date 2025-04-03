<script setup lang="ts">
import logo from '@/assets/logo.gif';
</script>

<template>
  <v-container class="lander-container">
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center">
        <v-img 
          class="logo" 
          height="500px" 
          contain
          :src="logo" 
        />
      </v-col>
    </v-row>

    <v-row class="text-center justify-center ga-5">
      <v-btn 
        class="button-styles" 
        href="https://hunch-medical-inventory-system.github.io/" 
        size="x-large" 
        elevation="5"
      >
        🚀 Demo
      </v-btn>

      <v-btn 
        class="button-styles secondary" 
        size="x-large" 
        to="/proposal"
        elevation="5"
      >
        📜 Our Proposal
      </v-btn>
    </v-row>
  </v-container>
</template>

<style scoped>
.lander-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #1e1e1e, #2c3e50);
  padding: 2rem;
}

.logo {
  filter: drop-shadow(0px 10px 20px rgba(255, 255, 255, 0.2));
  animation: fadeIn 1.2s ease-in-out;
}

.button-styles {
  font-size: 1.2rem;
  padding: 12px 30px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  background: linear-gradient(to right, #c19117, #f0c24b);
  color: #fff;
  text-transform: uppercase;
}

.button-styles:hover {
  transform: scale(1.1);
  box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.3);
}

.secondary {
  background: linear-gradient(to right, #3a3d98, #676ff7);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
