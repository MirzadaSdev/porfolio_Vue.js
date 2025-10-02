<template>
  <section class="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-8">
      <h2
        class="text-white font-semibold lg:text-3xl md:text-2xl sm:text-xl text-lg font-custom tracking-wide"
      >
        My <span class="text-orange-500">Projects</span>
      </h2>
      <p class="text-[#C4C4C4] mt-2 md:text-base sm:text-sm text-xs">
        A curated selection of my best work across different domains
      </p>
    </div>

    <!-- Category Filter -->
    <div class="flex justify-center mb-12">
      <div class="inline-flex rounded-lg bg-[#363636] gap-1 p-1">
        <button
          v-for="category in categories"
          :key="category"
          @click="changeCategory(category)"
          class="sm:py-2 rounded-md font-medium transition-all duration-300 text-[10px] p-1 sm:text-sm sm:px-4"
          :class="{
            'bg-orange-500 text-white shadow-lg': selectedCategory === category,
            'text-gray-300 hover:text-white hover:bg-[#464646]':
              selectedCategory !== category,
          }"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <!-- Projects Grid -->
    <div
      class="grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center"
    >
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-[#363636] to-[#2b2b2b] border border-gray-700 shadow-lg hover:shadow-xl hover:border-orange-500 transition-all duration-500"
      >
        <!-- Project Image -->
        <div class="relative h-56 overflow-hidden cursor-pointer">
          <img
            :src="project.image"
            :alt="project.name"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"
          ></div>
          <div class="absolute bottom-4 left-4">
            <span
              class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-500 text-white shadow-md"
            >
              {{ project.category }}
            </span>
          </div>
        </div>

        <!-- Project Content -->
        <div class="p-6 flex flex-col flex-grow">
          <h3 class="font-bold text-white mb-2 text-md sm:text-lg md:text-xl">
            {{ project.name }}
          </h3>
          <p class="text-gray-300 text-sm mb-4 leading-relaxed flex-grow">
            {{ project.description }}
          </p>

          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tech in project.techStack.split(', ')"
              :key="tech"
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#2f2f2f] text-gray-200 border border-gray-600"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Accordion -->
          <div class="mb-4">
            <button
              @click="toggleAccordion(project.id)"
              class="flex items-center justify-between w-full text-left text-sm font-medium text-gray-400 hover:text-orange-400 focus:outline-none"
            >
              <span>Key Challenges & Solutions</span>
              <FontAwesomeIcon
                icon="chevron-down"
                class="w-4 h-4 transition-transform duration-300"
                :class="{ 'rotate-180': openAccordion === project.id }"
              />
            </button>
            <transition name="accordion">
              <div
                v-if="openAccordion === project.id"
                class="mt-2 text-sm text-gray-400 leading-relaxed"
              >
                {{ project.challenges }}
              </div>
            </transition>
          </div>

          <!-- Action Buttons -->
          <div class="flex space-x-3 mt-auto">
            <button
              @click="handleClick(project.liveDemo)"
              class="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 shadow transition-all duration-300"
            >
              <FontAwesomeIcon icon="eye" class="mr-2" />
              Live Demo
            </button>
            <button
              @click="handleClick(project.github)"
              class="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-[#464646] border border-gray-600 hover:border-orange-500 transition-all duration-300"
            >
              <FontAwesomeIcon :icon="['fab', 'github']" class="mr-2" />
              View Code
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Secure Policy Dialog -->
    <transition name="fade">
      <div
        v-if="showDialog"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      >
        <div
          class="bg-[#2f2f2f] rounded-xl shadow-xl max-w-md w-full p-6 text-center border border-gray-700"
        >
          <h3 class="text-lg font-semibold text-white mb-4">
            Restricted Access
          </h3>
          <p class="text-gray-300 text-sm mb-6">
            This source code is <span class="text-orange-400">secure</span> and
            related to governmental policy. It cannot be publicly accessed.
          </p>
          <button
            @click="showDialog = false"
            class="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-md shadow-md transition"
          >
            Close
          </button>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Category Filter
const categories = ref([
  "All",
  "Web Development",
  "Mobile App",
  "UI/UX Design",
]);
const selectedCategory = ref("All");
const openAccordion = ref(null);
const showDialog = ref(false);

// Project List
const projects = ref([
  {
    id: 1,
    name: "Lectures Authority Management System",
    category: "Web Development",
    description:
      "A comprehensive system for managing lecture authorities at Kabul University with advanced database capabilities.",
    techStack: "Laravel, Vue.js, Tailwind CSS, MySQL",
    liveDemo: "#",
    github: "#",
    challenges:
      "Implemented complex role-based access control, offline database synchronization, and multilingual support.",
    image: "AMS.png",
  },
  {
    id: 2,
    name: "Portfolio Website",
    category: "Web Development",
    description:
      "Modern portfolio showcasing my skills and projects with elegant animations.",
    techStack: "Vue 3, Tailwind CSS, GSAP",
    liveDemo: "https://porfolio-vue-js-82nb.vercel.app",
    github: "https://github.com/MirzadaSdev/porfolio_Vue.js.git",
    challenges:
      "Created smooth page transitions and animations while maintaining excellent performance scores.",
    image: "portfolio.png",
  },
  {
    id: 3,
    name: "Dice Roller App",
    category: "Mobile App",
    description:
      "Feature-rich dice rolling application with custom dice sets and history tracking.",
    techStack: "Flutter, Dart, Firebase",
    liveDemo: "#",
    github: "#",
    challenges:
      "Developed realistic 3D dice physics simulation and offline functionality with local storage.",
    image: "dice-app.png",
  },
  {
    id: 4,
    name: "Data Collection App",
    category: "Mobile App",
    description:
      "Secure form application for sensitive data collection with email submission.",
    techStack: "Flutter, Dart, Node.js",
    liveDemo: "#",
    github: "#",
    challenges:
      "Built robust validation, encryption, and PDF generation for form submissions.",
    image: "data-collection.png",
  },
  {
    id: 5,
    name: "Creative UI Dashboard",
    category: "UI/UX Design",
    description:
      "An interactive dashboard UI kit with charts, animations, and responsive design.",
    techStack: "Figma, Adobe XD",
    liveDemo: "#",
    github: null,
    challenges:
      "Designed modular components for rapid prototyping and cross-device consistency.",
    image: "dashboard.png",
  },
  {
    id: 6,
    name: "E-commerce Website Design",
    category: "UI/UX Design",
    description:
      "A sleek, user-friendly e-commerce interface designed for optimal conversion rates.",
    techStack: "Figma",
    liveDemo:
      "https://www.figma.com/board/XvlJwLuNgLY9CjG8AieK3z/Untitled?node-id=0-1&t=zvKfOhkzlqg8DLjS-1",
    github: null,
    challenges:
      "Created a design system with reusable components for faster iteration.",
    image: "e-commerce.png",
  },
  {
    id: 7,
    name: "Movie Discovery App",
    category: "Web Development",
    description:
      "High-quality, well-designed modern web app for finding every kind of movie.",
    techStack: "React.js",
    liveDemo: "#",
    github: null,
    challenges: "",
    image: "movie-discovery-app.png",
  },
  {
    id: 8,
    name: "Healthcare Management Dashboard",
    category: "UI/UX Design",
    description: "Comprehensive UI design for hospital and patient management.",
    techStack: "Figma",
    liveDemo: "#",
    github: null,
    challenges:
      "Balanced dense information layout with clear hierarchy for ease of use.",
    image: "database1.png",
  },
]);

// Computed filtered projects
const filteredProjects = computed(() => {
  if (selectedCategory.value === "All") {
    return projects.value.map(enhanceProjectImage);
  }
  return projects.value
    .filter((p) => p.category === selectedCategory.value)
    .map(enhanceProjectImage);
});

// Helper: resolve image path
function enhanceProjectImage(project) {
  return {
    ...project,
    image: new URL(`../assets/${project.image}`, import.meta.url).href,
  };
}

// Category change
const changeCategory = (category) => {
  selectedCategory.value = category;
};

// Accordion toggle
const toggleAccordion = (id) => {
  openAccordion.value = openAccordion.value === id ? null : id;
};

// Handle link click
const handleClick = (link) => {
  if (!link || link === "#") {
    showDialog.value = true;
  } else {
    window.open(link, "_blank");
  }
};
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}
.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 300px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
