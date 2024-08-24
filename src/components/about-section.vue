<template>
  <section id="about" class="w-full max-w-6xl px-3 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 py-10">
    <div class="flex flex-1 flex-col gap-5">
      <p class="tracking-widest text-orange-500">rentax</p>
      <h1 class="text-4xl font-bold">
        We Are More <br />
        <p class="text-orange-500">Than A Car Rental Company</p>
      </h1>
      <p class="text-gray-600">
        Car repair quisque sodales dui ut varius vestibulum drana tortor turpis porttiton tellus eu euismod nisl massa nutodio in the miss volume
        place urna lacinia eros nunta urna mauris vehicula rutrum in the miss on volume interdum.
      </p>
      <ul class="flex flex-col gap-2">
        <li class="flex items-center gap-2">
          <i class="bx bx-check w-10 h-10 bg-black/10 flex items-center justify-center text-2xl rounded-full"></i>
          <span>Sports and Luxury Cars</span>
        </li>
        <li class="flex items-center gap-2">
          <i class="bx bx-check w-10 h-10 bg-black/10 flex items-center justify-center text-2xl rounded-full"></i>
          <span>Economy Cars</span>
        </li>
      </ul>
      <button
        class="relative capitalize w-full max-w-44 text-lg h-16 py-1 hover:bg-white hover:-translate-y-[5px] px-5 bg-orange-500 rounded-full transition-all duration-500"
      >
        Read more
      </button>
    </div>
    <div class="flex-1">
      <div class="w-full relative rounded-2xl overflow-hidden">
        <img class="acpect-square transition-all duration-500 hover:scale-110 rounded-2xl w-full" src="/images/about.jpg" alt="about" />
      </div>
    </div>
  </section>
</template>
