<script setup lang="ts">
import SingleJob from "@/components/SingleJob.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
defineProps({
  limit: Number,
});

const jobs = ref([]);
onMounted(async () => {
  try {
    const { data } = await axios("/api" + "/jobs/");
    jobs.value = data;
  } catch (error) {
    console.error("Error fetching job", error);
  }
});
</script>

<template>
  <SingleJob
    v-for="job in jobs.slice(0, limit || jobs.length)"
    :key="job.id"
    :jd="job" />
</template>
