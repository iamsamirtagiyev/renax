<template>
  <section id="services" class="w-full max-w-6xl px-3 mx-auto py-10">
    <h1 class="text-center text-6xl capitalize font-bold">our <span class="text-orange-500">services</span></h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 w-full my-10">
      <div v-for="service in services" :key="service.url" class="relative rounded-2xl overflow-hidden group">
        <img class="asoect-square w-full transition-all duration-500 group-hover:scale-105" :src="service.url" alt="service" />
        <div class="absolute w-full h-1/2 bg-gradient-to-t from-black to-transparent bottom-0 left-0"></div>
        <h3 class="absolute bottom-3 left-3 text-white font-bold text-xl capitalize">{{ service.title }}</h3>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const services = ref([
  {
    title: "corporate car rental",
    url: "/images/1 (1).jpg",
  },
  {
    title: "car rental with driver",
    url: "/images/2.jpg",
  },
  {
    title: "airport transfer",
    url: "/images/3 (1).jpg",
  },
]);
</script>
