<template>
  <div class="w-full py-10 md:px-0 px-3">
    <Swiper :centeredSlides="true" :slides-per-view="auto" :space-between="33" @swiper="onSwiper" @slideChange="onSlideChange">
      <SwiperSlide class="rounded-xl group aspect-video overflow-hidden max-w-xl w-full" v-for="car in data" :key="car.id">
        <div class="relative w-full h-full">
          <img class="w-full group-hover:scale-105 transition-all duration-500 object-cover h-full" :src="car.url" alt="car" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
const props = defineProps(["data"]);
</script>
