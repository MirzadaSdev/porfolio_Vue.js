<template>
  <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
    <!-- Title Section -->
    <div class="text-center mb-12">
      <h2
        class="text-white font-semibold lg:text-3xl md:text-2xl sm:text-xl text-lg font-custom tracking-wide"
      >
        My <span class="text-orange-500">Skills</span>
      </h2>
      <p class="text-[#C4C4C4] mt-2 md:text-base sm:text-sm text-xs">
        I am a full-stack developer with expertise in web, mobile, and UI/UX
        design.
      </p>
    </div>

    <!-- Cards Grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <div
        v-for="skill in skills"
        :key="skill.title"
        class="flex flex-col items-center text-center p-6 rounded-2xl shadow-lg bg-[#2E2E2E] text-[#949090] transition-transform duration-300 hover:scale-105"
      >
        <font-awesome-icon
          :icon="skill.icon"
          class="text-4xl text-primaryOrange cursor-pointer"
        />
        <p class="field-name font-semibold text-lg mt-3 font-custom text-white">
          {{ skill.title }}
        </p>
        <p class="main-text mt-2">{{ skill.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCode,
  faServer,
  faDatabase,
  faTools,
  faMobileAlt,
  faPalette,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

const skills = [
  {
    title: "Frontend",
    description: "Vue.js, JavaScript (ES6+), TailwindCSS, HTML5, CSS3",
    icon: faCode,
  },
  {
    title: "Backend",
    description: "PHP, Laravel",
    icon: faServer,
  },
  {
    title: "Database",
    description: "MySQL, SQLite",
    icon: faDatabase,
  },
  {
    title: "Tools",
    description: "Git, GitHub, Docker, Postman, VS Code",
    icon: faTools,
  },
  {
    title: "Mobile Development",
    description: "Building responsive Android & iOS apps using Flutter",
    icon: faMobileAlt,
  },
  {
    title: "UI/UX Design",
    description: "Designing appealing interfaces and user experiences",
    icon: faPalette,
  },
  {
    title: "Other Skills",
    description: "REST APIs, authentication, testing, project management",
    icon: faCogs,
  },
];
</script>

<script>
export default {
  components: {
    FontAwesomeIcon,
  },
};
</script>
