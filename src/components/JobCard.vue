<script setup lang="ts">
import Jobs from "@/db/jobs.json";
import SingleJob from "@/components/SingleJob.vue";
</script>

<template>
  <SingleJob v-for="job in Jobs.jobs.slice(0, 3)" :key="job.id" :jd="job" />
</template>
