<template>
  <div class="bg-[#2C2C2C] min-h-screen">
    <!-- Navigation bar -->
    <NavigationBar />

    <!-- Smooth page transitions -->
    <transition name="page" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script setup>
import NavigationBar from "./views/NavigationBar.vue";
</script>

<style scoped>
/* Fade + slide transition for pages */
.page-enter-active,
.page-leave-active {
  transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.page-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
