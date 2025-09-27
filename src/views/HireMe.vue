<template>
  <div
    class="max-w-5xl mx-auto bg-[#2c2c2c] text-shadowGray p-8 rounded-lg shadow-lg flex flex-col gap-4"
  >
    <h2
      class="text-white font-semibold lg:text-3xl md:text-2xl sm:text-xl text-lg font-custom tracking-wide text-center"
    >
      Hire <span class="text-orange-500">Me</span>
    </h2>
    <p class="text-[#C4C4C4] mt-2 md:text-base sm:text-sm text-xs text-center">
      Let's collaborate! Fill out the form below and I'll get back to you as
      soon as possible.
    </p>

    <form @submit.prevent="sendToWhatsApp" class="space-y-6" v-if="!submitted">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-semibold mb-1">Full Name</label>
          <input
            type="text"
            v-model="form.name"
            placeholder="Enter your name"
            class="w-full py-1 px-4 border border-shadowGray bg-transparent rounded-md focus:ring-2 focus:ring-shadowGray focus:outline-none"
            @blur="validateField('name')"
          />
          <span v-if="errors.name" class="text-red-500 text-xs mt-1 block">
            {{ errors.name }}
          </span>
        </div>
        <div>
          <label class="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            v-model="form.email"
            placeholder="Enter your email"
            class="w-full py-1 px-4 border border-shadowGray bg-transparent rounded-md focus:ring-2 focus:ring-shadowGray focus:outline-none"
            @blur="validateField('email')"
          />
          <span v-if="errors.email" class="text-red-500 text-xs mt-1 block">
            {{ errors.email }}
          </span>
        </div>
      </div>
      <div>
        <label class="block text-sm font-semibold mb-1">Subject</label>
        <input
          type="text"
          v-model="form.subject"
          placeholder="Enter subject"
          class="w-full py-1 px-4 border border-shadowGray bg-transparent rounded-md focus:ring-2 focus:ring-shadowGray focus:outline-none"
          @blur="validateField('subject')"
        />
        <span v-if="errors.subject" class="text-red-500 text-xs mt-1 block">
          {{ errors.subject }}
        </span>
      </div>
      <div>
        <label class="block text-sm font-semibold mb-1">Message</label>
        <textarea
          v-model="form.message"
          rows="5"
          placeholder="Write your message here..."
          class="w-full py-1 px-4 border border-shadowGray bg-transparent rounded-md focus:ring-2 focus:ring-shadowGray focus:outline-none"
          @blur="validateField('message')"
        ></textarea>
        <span v-if="errors.message" class="text-red-500 text-xs mt-1 block">
          {{ errors.message }}
        </span>
      </div>
      <div class="text-center">
        <button
          type="submit"
          class="w-full md:w-auto px-6 py-3 bg-primaryOrange hover:bg-orange-500 text-white font-semibold rounded-md transition duration-300 ease-in-out"
        >
          Send Message
        </button>
      </div>
    </form>

    <div
      v-if="submitted"
      class="flex flex-col items-center justify-center mt-8"
    >
      <svg
        class="w-24 h-24 text-green-500 animate-bounce"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 13l4 4L19 7"
        ></path>
      </svg>
      <p class="text-3xl text-green-500 font-semibold mt-4">
        Redirecting to WhatsApp...
      </p>
    </div>

    <!-- Custom Required Field Dialog -->
    <div
      v-if="showDialog"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div class="bg-[#2f2f2f] rounded-lg shadow-lg p-6 w-80 text-center">
        <p class="text-emerald-600 font-semibold mb-4">
          <span v-for="(field, idx) in missingFields" :key="field">
            The input for <b>{{ fieldLabels[field] }}</b> is required.<br
              v-if="idx !== missingFields.length - 1"
            />
          </span>
        </p>
        <button
          @click="showDialog = false"
          class="px-4 py-2 bg-primaryOrange text-white rounded hover:bg-orange-500"
        >
          OK
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const errors = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const submitted = ref(false);
const showDialog = ref(false);
const missingFields = ref([]);

const fieldLabels = {
  name: "🧑🏻 Full Name",
  email: "📧 Email",
  subject: "🛄 Subject",
  message: " Message",
};

// Your WhatsApp number (with country code, no +, no spaces)
const whatsappNumber = "93776538794"; // Example: "93770000000" (Afghanistan)

function validateField(field) {
  if (!form.value[field]) {
    errors.value[field] = `The input for ${fieldLabels[field]} is required`;
  } else {
    errors.value[field] = "";
  }
}

function validateForm() {
  let valid = true;
  missingFields.value = [];
  Object.keys(form.value).forEach((field) => {
    validateField(field);
    if (!form.value[field]) {
      valid = false;
      missingFields.value.push(field);
    }
  });
  return valid;
}

const sendToWhatsApp = () => {
  if (!validateForm()) {
    showDialog.value = true;
    return;
  }

  const text = `Hello! 👋 I would like to hire you.%0A
*Name:* ${form.value.name}%0A
*Email:* ${form.value.email}%0A
*Subject:* ${form.value.subject}%0A
*Message:* ${form.value.message}`;

  const url = `https://wa.me/${whatsappNumber}?text=${text}`;

  submitted.value = true;
  setTimeout(() => {
    window.open(url, "_blank");
    submitted.value = false;
    form.value = { name: "", email: "", subject: "", message: "" };
    errors.value = { name: "", email: "", subject: "", message: "" };
  }, 1500);
};
</script>
