<script setup lang="ts">
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  jd: Object,
});

const showRef = ref(false);

const truncateDesc = computed(() => {
  let desc = props?.jd?.description;
  if (!showRef.value) {
    desc = desc.substring(0, 90) + "...";
  }
  return desc;
});
</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ jd?.type }}</div>
        <h3 class="text-xl font-bold">{{ jd?.title }}</h3>
      </div>

      <div class="mb-5">
        {{ truncateDesc }}
        <button class="text-green-500" @click="showRef = !showRef">
          {{ showRef ? "Less" : "More" }}
        </button>
      </div>

      <h3 class="text-green-500 mb-2">{{ jd?.salary }} / Year</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <i class="pi pi-map-marker"></i>
          {{ jd?.location }}
        </div>
        <RouterLink
          :to="`/jobs/${props?.jd?.id}`"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm">
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>
