<template>
  <div
    class="container bg-[#2C2C2C] max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center pt-24 px-6"
  >
    <!-- Image for Smaller Screens -->
    <div class="w-full flex justify-center relative md:hidden">
      <div
        class="group relative size-40 sm:size-56 md:size-64 grid place-items-center"
      >
        <!-- Dashed rotating border -->
        <span class="dash-ring" aria-hidden="true"></span>

        <!-- Image on gray background -->
        <div
          class="relative size-full rounded-full overflow-hidden bg-[#3a3a3a] p-1 shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
          title="Profile"
        >
          <img
            src="../assets/me.png"
            alt="My photo in smaller screens"
            class="w-full h-full rounded-full object-contain cursor-pointer"
            loading="eager"
          />
        </div>
      </div>
    </div>

    <!-- Left Content (unchanged) -->
    <div
      class="content w-full md:w-1/2 flex flex-col justify-start gap-6 sm:gap-10 text-center md:text-left mt-5"
    >
      <div class="flex flex-col gap-2 font-custom tracking-wider">
        <p class="text-gray-300 lg:text-base sm:text-sm">Hi, I am</p>
        <p
          class="text-[#fcefa4] text-xl sm:text-2xl md:text-2xl lg:text-3xl font-medium tracking-wider"
        >
          Mohammad Yasir Mirzada
        </p>
        <p class="text-gray-300 sm:text-lg md:text-xl lg:text-2xl">
          A professional
          <span id="typing" class="text-[#E6581B] relative"></span>
        </p>
      </div>

      <!-- Buttons -->
      <div
        class="flex justify-center md:justify-start gap-4 sm:gap-8 mt-4 sm:mt-5"
      >
        <router-link
          :to="{ name: 'hire-me' }"
          class="md:tracking-wide md:text-base sm:text-sm tracking-wide md:py-1 sm:py-1 sm:px-2 md:px-3 lg:px-4 text-xs py-1 px-2 bg-[#E6581B] text-white rounded-md hover:bg-orange-500 transition-all duration-700 ease-in-out"
        >
          Hire Me
        </router-link>
        <a
          href="/cv.pdf"
          download="CV.pdf"
          class="md:tracking-wide md:text-base sm:text-sm text-[#E6581B] md:py-1 sm:py-0 sm:px-1 md:px-2 lg:px-3 border-2 text-xs py-1 px-2 border-[#E6581B] hover:text-orange-500 transition-all duration-700 ease-in-out hover:border-orange-500 rounded-lg"
        >
          Download CV
        </a>
      </div>

      <!-- Skills Progress Bars (unchanged) -->
      <div
        class="bg-[#2E2E2E] p-4 rounded-lg w-full max-w-lg mx-auto space-y-3"
      >
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="flex items-center space-x-3"
        >
          <span class="text-[#949090] text-sm w-20">{{ skill.name }}</span>
          <div
            class="flex-1 bg-[#3D3D3D] h-2 rounded-full overflow-hidden shadow-inner"
          >
            <div
              class="h-full rounded-full bg-gradient-to-r from-[#E6581B] to-orange-400 transition-all duration-1000 ease-out"
              :style="{ width: mounted ? skill.percentage + '%' : '0%' }"
            ></div>
          </div>
          <span class="text-[#E6581B] text-xs w-8 text-right font-semibold">
            {{ skill.percentage }}%
          </span>
        </div>
      </div>
    </div>

    <!-- Right Image Section (md+ screens) -->
    <div
      class="lg:w-2/5 md:w-2/5 justify-center relative hidden md:flex -top-14"
    >
      <div class="group relative lg:size-72 md:size-56 grid place-items-center">
        <!-- Dashed rotating border -->
        <span class="dash-ring" aria-hidden="true"></span>

        <!-- Image on gray background -->
        <div
          class="relative size-full rounded-full overflow-hidden bg-[#3a3a3a] p-1 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
          title="Profile"
        >
          <img
            src="../assets/me.png"
            alt="My image"
            class="w-full h-full rounded-full object-contain cursor-pointer"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mounted: false,
      skills: [
        { name: "PHP", percentage: 60 },
        { name: "Laravel", percentage: 80 },
        { name: "JavaScript", percentage: 70 },
        { name: "Vue.js", percentage: 85 },
        { name: "React.js", percentage: 70 },
      ],
    };
  },
  mounted() {
    this.mounted = true;

    // Typing animation
    const roles = [
      "FullStack Web Developer",
      "Figma Designer",
      "Mobile App Developer",
    ];
    const typingElement = document.getElementById("typing");
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentRole = roles[roleIndex];

      if (!isDeleting) {
        typingElement.textContent = currentRole.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentRole.length) {
          isDeleting = true;
          setTimeout(type, 1000);
        } else setTimeout(type, 75);
      } else {
        typingElement.textContent = currentRole.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(type, 500);
        } else setTimeout(type, 50);
      }
    };
    type();
  },
};
</script>

<style>
/* caret blink for the typing text (unchanged) */
@keyframes blink-caret {
  from,
  to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
#typing::after {
  content: "";
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: #e6581b;
  margin-left: 2px;
  vertical-align: bottom;
  animation: blink-caret 0.75s step-end infinite;
  margin-bottom: -2px;
}
#typing {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  color: #e6581b;
  vertical-align: baseline;
  margin-bottom: -8px;
}

/* smooth slow spin (clockwise) */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Reusable dashed circular ring using a pseudo-element.
   - Small cut lines created with repeating-conic-gradient
   - Rotates slowly to the right
   - Glows and brightens on hover */
.dash-ring {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  pointer-events: none;
}
.dash-ring::before {
  content: "";
  position: absolute;
  inset: -6px; /* thickness outside the image wrapper */
  border-radius: 9999px;
  /* dashed look */
  background: repeating-conic-gradient(
    #e6581b 0deg 8deg,
    transparent 8deg 14deg
  );
  /* make it a ring instead of a pie */
  -webkit-mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 6px),
    #000 0
  );
  mask: radial-gradient(farthest-side, transparent calc(100% - 6px), #000 0);
  animation: spin-slow 12s linear infinite;
  opacity: 0.9;
  transition: filter 200ms ease, opacity 200ms ease;
}
.group:hover .dash-ring::before {
  filter: drop-shadow(0 0 8px #e6581b) drop-shadow(0 0 16px #e6581b);
  opacity: 1;
}

/* Respect users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  .dash-ring::before {
    animation: none;
  }
}
</style>
