<template>
  <footer class="mx-auto w-full bg-zinc-900 text-white py-10">
    <div class="mx-auto max-w-6xl w-full px-3">
      <div class="flex flex-wrap gap-5 sm:gap-0 border border-gray-500 items-center rounded-xl p-7">
        <div class="flex gap-2 sm:justify-center flex-1 items-center" v-for="i in info" :key="i.id">
          <div class="min-w-14 w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-2xl"><i :class="i.icon"></i></div>
          <div class="flex flex-col">
            <span class="font-medium text-lg capitalize">{{ i.title }}</span>
            <span class="text-sm text-white/80">{{ i.desc }}</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const info = ref([
  {
    id: 1,
    title: "call",
    desc: "+971 52-333-4444",
    icon: "bx bx-phone-call",
  },
  {
    id: 2,
    title: "write to us",
    desc: "info@renax.com",
    icon: "bx bxs-envelope",
  },
  {
    id: 3,
    title: "address",
    desc: "Dubai, water tower, office 123",
    icon: "bx bx-location-plus",
  },
]);
</script>
