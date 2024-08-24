<template>
  <nav
    :class="[
      'absolute top-0 left-0 z-50 transition-all duartion-500 w-full lg:bg-transparent bg-zinc-900 h-20 flex items-center justify-between px-10 lg:px-20',
      { '!bg-white !fixed shadow-lg': active },
    ]"
  >
    <router-link to="/">
      <img class="w-32" :src="`/images/logo-${active ? 'dark' : 'light'}.png`" alt="logo" />
    </router-link>
    <div
      :class="[
        'lg:flex items-center lg:pointer-events-auto pointer-events-none gap-5 transition-all duration-500 lg:bg-transparent bg-zinc-900 opacity-0 lg:w-auto lg:opacity-100 lg:static fixed w-1/2 h-full -right-10 top-20',
        { '!opacity-100 !right-0 !pointer-events-auto': open },
      ]"
    >
      <ul :class="['flex w-full lg:flex-row p-5 lg:p-0 flex-col items-center gap-6 h-full', { 'bg-white': active }]">
        <li
          :class="[
            'text-md w-full whitespace-nowrap capitalize text-white transition-all duration-500 hover:text-orange-500',
            { '!text-black': active },
          ]"
          v-for="item in menuItems"
          :key="item.name"
        >
          <a :href="item.path">{{ item.name }}</a>
        </li>
      </ul>
      <div class="lg:flex w-full items-center gap-2 hidden">
        <a
          href="#"
          :class="[
            'text-white border border-orange-500 transition-all w-12 h-12 rounded-full flex items-center justify-center text-2xl duration-500 hover:bg-orange-500 hover:text-black',
            { '!text-black': active },
          ]"
        >
          <i class="bx bx-phone-call"></i>
        </a>
        <div :class="['flex flex-col text-white', { '!text-black': active }]">
          <span class="text-sm">Need Help?</span>
          <a class="text-sm font-medium transition-all duration-500 hover:text-orange-500" href="#">855 100 444</a>
        </div>
      </div>
    </div>
    <button @click="open = !open" class="lg:hidden text-4xl text-orange-500">
      <i class="bx bx-menu-alt-right"></i>
    </button>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const open = ref(false);
const active = ref(false);
console.log(open);

window.onscroll = () => {
  if (scrollY > 100) {
    active.value = true;
  } else {
    active.value = false;
  }
};

const menuItems = ref([
  {
    name: "home",
    path: "#home",
  },
  {
    name: "about",
    path: "#about",
  },
  {
    name: "services",
    path: "#services",
  },
  {
    name: "cars",
    path: "#cars",
  },
]);
</script>
