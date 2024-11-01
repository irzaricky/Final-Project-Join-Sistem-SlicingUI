<script setup lang="ts"></script>

<template>
  <div class="relative max-w-[1440px] mx-16 py-16">
    <!-- Foto -->
    <img src="@/assets/images/misc/home-special.png" class="w-[840px] h-auto" />

    <!-- Div Informasi -->
    <div class="h-[480px] absolute top-52 left-1/2 bg-white p-10">
      <h2 class="text-xl font-semibold mb-2">WHY WE STARTED</h2>
      <h1 class="text-4xl font-bold mb-2">
        It started out as a simple idea and evolved into our passion
      </h1>
      <p class="text-sm font-thin text-x-mediumgrey">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
        repellat eveniet perferendis eligendi laudantium! Excepturi, obcaecati
        repudiandae. Laudantium ratione delectus neque magnam, error, adipisci
        voluptatum rerum, placeat suscipit ipsum numquam?
      </p>
      <div
        class="bg-x-blue w-[275px] h-[56px] flex justify-center items-center hover:bg-x-yellow transition duration-150 ease-in-out mt-8"
      >
        <Button class="my-8 font-bold text-lg text-white"
          >Discover Our Story &gt;</Button
        >
      </div>
    </div>
  </div>
</template>
