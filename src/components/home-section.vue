<template>
  <div id="home" class="">
    <nav-bar />
    <Video></Video>
    <div class="grid grid-cols-1 w-full max-w-6xl mx-auto lg:grid-cols-3 gap-5 p-5">
      <card v-for="info in cardInfo" :key="info.id" :info="info" />
    </div>
  </div>
</template>

<script setup>
import navBar from "../components/nav-bar.vue";
import Video from "../components/video.vue";
import card from "../components/card.vue";
import { ref } from "vue";

const cardInfo = ref([
  {
    id: 1,
    title: "Choose a car",
    content: "View our range of cars, find your perfect car for the coming days.",
  },
  {
    id: 2,
    title: "come in contact",
    content: "Our advisor team is ready to help you with the booking process.",
  },
  {
    id: 3,
    title: "enjoy driving",
    content: "Receive the key and enjoy you car. We treat all our cars with respect.",
  },
]);
</script>
