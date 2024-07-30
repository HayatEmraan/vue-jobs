<script setup lang="ts">
import Jobs from "@/db/jobs.json";
import SingleJob from "@/components/SingleJob.vue";

defineProps({
  limit: Number,
});
</script>

<template>
  <SingleJob
    v-for="job in Jobs.jobs.slice(0, limit || Jobs.jobs.length)"
    :key="job.id"
    :jd="job" />
</template>
