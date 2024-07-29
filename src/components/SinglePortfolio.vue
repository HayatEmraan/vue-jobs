<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
  title: String,
  desc: String,
  btnColor: {
    type: String,
    default: "bg-black hover:bg-gray-700",
  },
  bgColor: {
    type: String,
    default: "bg-gray-100",
  },
  btnTitle: {
    type: String,
    default: "Browse Jobs",
  },
});
</script>

<template>
  <div class="p-6 rounded-lg shadow-md" :class="bgColor">
    <h2 class="text-2xl font-bold">{{ title }}</h2>
    <p class="mt-2 mb-4">
      {{ desc }}
    </p>
    <a
      href="jobs.html"
      class="inline-block text-white rounded-lg px-4 py-2"
      :class="btnColor">
      {{ btnTitle }}
    </a>
  </div>
</template>
