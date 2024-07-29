<script setup lang="ts">
import SinglePortfolio from "@/components/SinglePortfolio.vue";
</script>

<template>
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <SinglePortfolio
          title="For Developers"
          desc="Browse our Vue jobs and start your career today"
          btnTitle="Browse Jobs" />
        <SinglePortfolio
          title="For Employers"
          desc="List your job to find the perfect developer for the role"
          btnTitle="Add Job"
          btnColor="bg-green-500 hover:bg-green-600"
          bgColor="bg-green-100" />
      </div>
    </div>
  </section>
</template>
