<script setup lang="ts"></script>

<template>
  <div class="w-full h-[720px] relative mb-16">
    <!-- Background Image -->
    <img
      class="w-full h-full absolute"
      src="@/assets/images/misc/cover.png"
      alt="Background image"
    />

    <!-- Overlay -->
    <div class="w-full h-full absolute top-0 bg-black opacity-60"></div>

    <!-- Content Container -->
    <div class="absolute top-32 left-20 w-[804px] h-[400px] text-white">
      <!-- Tag -->
      <div class="uppercase text-base font-medium tracking-widest">
        Posted on <span class="font-black">Startup</span>
      </div>

      <!-- Title -->
      <div class="mt-4 text-[56px] font-bold">
        Step-by-step guide to choosing great font pairs
      </div>

      <!-- Author and Date -->
      <div class="mt-4">
        <span>By </span
        ><a
          href="#"
          class="text-x-blue hover:text-x-yellow transition duration-150 ease-in-out"
          >James West</a
        ><span> | May 23, 2022</span>
      </div>

      <!-- Description -->
      <div class="mt-4 w-[599px] text-base">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident.
      </div>

      <!-- Read More Button -->
      <div
        class="mt-6 px-12 py-4 bg-x-blue inline-flex items-center text-lg font-bold hover:bg-x-yellow transition duration-150 ease-in-out"
      >
        <a href="/blog/post" class="text-white"> Read More > </a>
      </div>
    </div>
  </div>
</template>
