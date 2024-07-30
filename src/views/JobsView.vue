<script setup lang="ts">
import JobCard from "@/components/JobCard.vue";
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobCard />
      </div>
    </div>
  </section>
</template>
