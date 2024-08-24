<template>
  <div class="w-full h-screen flex items-center justify-center relative">
    <video
      class="absolute inset-0 w-full h-full object-cover"
      src="https://duruthemes.com/demo/html/renax/video.mp4"
      playsinline
      autoplay
      loop
      muted
    ></video>
    <div class="z-10 text-center">
      <p class="text-2xl tracking-widest text-orange-500">• Premium</p>
      <h1 class="capitalize text-5xl sm:text-7xl lg:text-8xl font-bold text-white">Rental Car</h1>
      <div class="flex justify-center items-center gap-3 mt-5">
        <span class="sm:text-xl text-lg font-medium text-white capitalize">Bugatti Mistral W16</span>
        <span class="sm:text-lg text-md font-medium text-white capitalize"
          ><p class="text-orange-500 text-xl sm:text-2xl inline-block font-bold">$800</p>
          /Day</span
        >
      </div>
      <div class="flex sm:flex-row flex-col items-center gap-3 mt-10 justify-center">
        <button
          class="relative capitalize w-full text-lg h-16 py-1 hover:bg-white hover:-translate-y-[5px] px-5 bg-orange-500 rounded-full transition-all duration-500"
        >
          view details
        </button>
        <button
          class="relative capitalize w-full text-lg h-16 py-1 text-white border border-white hover:-translate-y-[5px] px-5 hover:bg-orange-500 rounded-full transition-all duration-500"
        >
          rent now
        </button>
      </div>
    </div>
  </div>
</template>
