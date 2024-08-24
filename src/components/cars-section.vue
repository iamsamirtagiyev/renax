<template>
  <section
    id="cars"
    class="w-full min-h-72 !bg-center !bg-fixed flex items-center px-10 justify-center !bg-cover !bg-no-repeat"
    style="background: url(/images/9-1.jpg)"
  ></section>
  <slider :data="carDetails" />
</template>

<script setup>
import { ref } from "vue";
import Slider from "./slider.vue";

const carDetails = ref([
  {
    id: 1,
    model: "Lamborghini Urus",
    price: 750,
    url: "/images/7.jpg",
  },
  {
    id: 2,
    model: "Bently",
    price: 500,
    url: "/images/8-1.jpg",
  },
  {
    id: 3,
    model: "Rols Royce Cullinan",
    price: 900,
    url: "/images/12.jpg",
  },
  {
    id: 4,
    model: "Bently Bentayga",
    price: 600,
    url: "/images/11.jpg",
  },
  {
    id: 5,
    model: "Bugatti",
    price: 800,
    url: "/images/9-1.jpg",
  },
]);
</script>
