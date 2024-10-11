<script setup lang="ts">
  import logo from '@/assets/logo.png'
</script>

<template>
  <v-container>
    <v-row>
      <v-img
        class="mb-4"
        height="700px"
        :src="logo"
      />
    </v-row>
    <v-row class="text-center justify-center ga-5">
      <v-btn class="button-styles" size="x-large" to="/login">Demo Login</v-btn>
      <v-btn class="button-styles" size="x-large" to="/profile">Demo Profile</v-btn>
      <v-btn class="button-styles" size="x-large" to="/proposal">Our Proposal</v-btn>
    </v-row>
  </v-container>
</template>

<style scoped>
  .button-styles {
    transition: all 0.3s ease;
  }

  .button-styles:hover {
    border: 2px solid transparent;
    border-image: linear-gradient(to right, hwb(198 2% 10%), hwb(228 7% 20%)) 1;
  }
</style>
