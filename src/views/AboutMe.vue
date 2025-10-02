<template>
  <div
    class="max-w-5xl mx-auto pt-10 flex flex-col sm:flex-row justify-around pb-10"
  >
    <!-- Image Section -->
    <div
      class="w-full sm:w-2/5 flex justify-center relative lg:mt-14 md:mt-10 sm:mt-7"
    >
      <!-- Glowing Background -->
      <div
        class="absolute lg:h-80 md:h-72 sm:h-64 lg:w-72 md:w-64 sm:w-52 h-56 w-48 rounded-t-full glow-animation"
      ></div>

      <!-- Image with Hover Effect -->
      <div
        class="relative lg:h-96 sm:w-56 md:w-fit w-48 md:h-80 sm:h-72 -top-8 sm:-top-6 md:-top-6 lg:-top-12 lg:p-4 md:p-2 sm:p-2 h-64 hover:blur-[1px] blur-0 overflow-hidden transition-transform duration-500"
      >
        <img
          src="../assets/me.png"
          alt="My photo"
          class="object-cover h-full w-full rounded-t-lg cursor-pointer"
        />
      </div>
    </div>

    <!-- Content Section -->
    <div
      class="w-full sm:w-3/5 flex flex-col lg:gap-3 md:gap-2 sm:justify-start justify-center sm:items-start items-center sm:py-0 sm:px-0 px-10"
    >
      <div>
        <h2
          class="text-white font-semibold lg:text-3xl md:text-2xl sm:text-xl text-lg font-custom tracking-wide"
        >
          About <span class="text-orange-500">Me</span>
        </h2>
      </div>
      <div class="sm:w-4/5 w-full mt-2">
        <p
          class="text-[#909090] text-justify tracking-wide lg:text-base md:text-sm text-xs font-sans leading-relaxed"
        >
          I am a software engineer with a Bachelor's degree in Computer Science
          and 3+ years of experience in web development. I specialize in
          building modern, responsive web applications using Vue.js, Laravel,
          and Tailwind CSS. My development philosophy is to write clean,
          maintainable code while prioritizing usability and performance. I
          enjoy turning complex problems into simple, elegant solutions. My
          journey into web development started in university when I built my
          first website as a personal project. Since then, I have been
          passionate about learning new technologies and creating digital
          solutions that make a difference.
        </p>
      </div>

      <a
        href="/cv.pdf"
        download="CV.pdf"
        class="text-white sm:w-fit w-full bg-primaryOrange mt-4 text-sm lg:text-base md:text-sm sm:text-xs md:py-1 md:px-3 sm:py-1 sm:px-2 py-1 px-2 md:tracking-wider sm:tracking-wider rounded hover:bg-orange-500 hover:text-gray-200 transition-all duration-700 text-center"
      >
        <i class="fa-regular fa-circle-down"></i> Download CV
      </a>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* Glowing neon background animation */
@keyframes pulseGlow {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 15px rgba(255, 165, 0, 0.5), 0 0 10px rgba(255, 165, 0, 0.3),
      0 0 10px rgba(255, 165, 0, 0.2);
  }
  50% {
    transform: scale(1.03);
    box-shadow: 0 0 25px rgba(0, 255, 85, 0.7), 0 0 10px rgba(255, 165, 0, 0.5),
      0 0 25px rgba(255, 165, 0, 0.3);
  }
}

.glow-animation {
  background-color: #303030;
  animation: pulseGlow 3s ease-in-out infinite;
}
</style>
