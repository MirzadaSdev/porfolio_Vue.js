<template>
  <section
    id="contact"
    class="bg-[#2C2C2C] text-[#aaaaaa] px-4 sm:px-6 lg:px-8 py-10 max-w-6xl mx-auto"
  >
    <!-- Heading -->
    <div class="text-center mb-8">
      <h2
        class="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl font-custom tracking-wide"
      >
        Contact <span class="text-orange-500">Me</span>
      </h2>
      <p class="text-gray-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
        Interested in working together or have a question? Let's get in touch.
      </p>
    </div>

    <!-- Contact Links -->
    <div
      class="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-10"
    >
      <a
        :href="`mailto:${emailAddress}`"
        class="flex items-center justify-center gap-3 bg-[#373737] px-5 sm:px-6 py-3 rounded-lg w-full sm:w-auto hover:bg-primaryOrange hover:text-white transition-all duration-300"
      >
        <font-awesome-icon :icon="['fas', 'envelope']" class="text-lg" />
        Email
      </a>

      <a
        href="https://www.linkedin.com/in/your-linkedin"
        target="_blank"
        class="flex items-center justify-center gap-3 bg-[#373737] px-5 sm:px-6 py-3 rounded-lg w-full sm:w-auto hover:bg-primaryOrange hover:text-white transition-all duration-300"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" class="text-lg" />
        LinkedIn
      </a>

      <a
        href="https://github.com/MirzadaSdev"
        target="_blank"
        class="flex items-center justify-center gap-3 bg-[#373737] px-5 sm:px-6 py-3 rounded-lg w-full sm:w-auto hover:bg-primaryOrange hover:text-white transition-all duration-300"
      >
        <font-awesome-icon :icon="['fab', 'github']" class="text-lg" />
        GitHub
      </a>
    </div>

    <!-- Contact Form -->
    <form
      action="https://formspree.io/f/your-form-id"
      method="POST"
      class="max-w-3xl mx-auto bg-[#373737] p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg space-y-6 mb-10 flex flex-col items-end w-full"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          class="bg-[#3f3f3f] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryOrange w-full text-sm sm:text-base"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          class="bg-[#3f3f3f] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryOrange w-full text-sm sm:text-base"
        />
      </div>
      <textarea
        name="message"
        rows="5"
        placeholder="Your Message..."
        required
        class="bg-[#3f3f3f] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryOrange w-full text-sm sm:text-base"
      ></textarea>
      <button
        type="submit"
        class="bg-primaryOrange text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-500 transition-all duration-300 w-full sm:w-auto"
      >
        Send Message
      </button>
    </form>
  </section>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const emailAddress = "yasirsedev580@gmail.com";
</script>

<style scoped>
#contact {
  scroll-margin-top: 80px;
}
</style>
