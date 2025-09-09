<template>
  <header class="bg-[#2C2C2C] sticky top-0 z-50">
    <nav class="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <div class="flex justify-between items-center py-3">
        <!-- Logo -->
        <router-link to="/">
          <img
            src="@/assets/my-logo.png"
            alt="Company Logo"
            class="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 cursor-pointer transition-transform hover:scale-105"
          />
        </router-link>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex space-x-8 font-custom mt-4">
          <li v-for="link in navLinks" :key="link.path" class="group relative">
            <router-link :to="link.path" :class="linkClasses(link.path)">
              <span class="text-lg">{{ link.label }}</span>
              <!-- Animated underline -->
              <span
                class="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-primaryOrange transition-all duration-700 group-hover:w-full"
              ></span>
            </router-link>
          </li>
        </ul>

        <!-- Desktop Hire Me -->
        <router-link
          to="/hire-me"
          class="hidden md:inline-block bg-primaryOrange text-white px-5 py-2 rounded-full shadow hover:bg-orange-500 hover:shadow-lg transition-all duration-700 font-semibold text-sm"
        >
          Hire Me
        </router-link>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="md:hidden text-gray-300 hover:text-primaryOrange transition-colors duration-300 focus:outline-none"
        >
          <span v-if="!isMenuOpen" class="material-icons text-3xl">menu</span>
          <span v-else class="material-icons text-3xl">close</span>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <transition name="slide-down">
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-[#1F1F1F] border-t border-gray-700 shadow-lg"
      >
        <ul class="flex flex-col px-6 py-4 space-y-4">
          <li v-for="link in navLinks" :key="link.path" class="group relative">
            <router-link
              :to="link.path"
              @click="closeMenu"
              :class="[linkClasses(link.path), 'block pb-1']"
              class="w-fit"
            >
              {{ link.label }}
              <span
                class="absolute left-0 bottom-0 h-[2px] w-0 bg-primaryOrange transition-all duration-300 group-hover:w-full"
              ></span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/hire-me"
              @click="closeMenu"
              class="block bg-primaryOrange text-white px-4 py-2 rounded-full text-center font-semibold hover:bg-orange-500 transition-all duration-300"
            >
              Hire Me
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      navLinks: [
        { path: "/", label: "Home" },
        { path: "/about", label: "About Me" },
        { path: "/skills", label: "Skills" },
        { path: "/projects", label: "Projects" },
        { path: "/contact", label: "Contact Me" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    linkClasses(path) {
      return [
        "relative text-sm md:text-base font-medium tracking-wide transition-colors duration-300",
        this.$route.path === path
          ? "text-primaryOrange font-bold"
          : "text-gray-300 hover:text-primaryOrange",
      ];
    },
  },
};
</script>

<style>
/* Mobile menu animation */
.slide-down-enter-active {
  animation: slideDown 0.3s ease-out;
}
.slide-down-leave-active {
  animation: slideUp 0.3s ease-in forwards;
}

@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slideUp {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-15px);
  }
}
</style>
