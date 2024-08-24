<template>
  <div
    class="bg-white relative ransition-all duration-500 cursor-pointer -translate-y-28 overflow-hidden rounded-xl p-5 h-64 flex flex-col group gap-3 justify-center hover:bg-zinc-900 hover:-translate-y-32"
  >
    <h2 class="w-full text-3xl font-bold transition-all duration-500 group-hover:text-white capitalize">{{ info.title }}</h2>
    <p class="w-2/3 text-black/70 font-medium transition-all duration-500 group-hover:text-gray-500">{{ info.content }}</p>
    <span class="absolute text-[300px] -bottom-32 -right-10 font-extrabold text-orange-500 -z-10">{{ info.id }}</span>
  </div>
</template>

<script setup>
const props = defineProps(["info"]);
</script>
