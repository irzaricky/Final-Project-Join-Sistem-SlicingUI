<script setup lang="ts"></script>

<template>
  <div class="w-full h-[519px] flex flex-col">
    <!-- background warna -->
    <div
      class="pr-[736px] bg-x-lavender flex relative justify-center pl-20 flex-grow flex-col gap-y-4 items-start py-24"
    >
      <!-- gambar -->
      <img
        class="w-[515px] absolute right-20 object-center object-cover inset-y-20"
        src="@/assets/images/Blog/HeaderImg.jpg"
      />
      <!-- bagian featured post -->
      <span class="text-x-black font-medium leading-5">
        FEATURED POST
      </span>
      <div class="[max-width:624px] pt-1 self-stretch">
        <span
          class="leading-[48px] text-x-black font-bold text-4xl items-center flex"
        >
          <p>Step-by-step guide to choosing great font pairs</p>
        </span>
      </div>
      <div class="font-medium leading-5 text-sm">
        <span class="text-x-darkgrey">By </span>
        <span class="text-x-yellow">John Doe </span>
        <span class="text-x-darkgrey">l May 23, 2022</span>
      </div>
      <div class="text-x-mediumgrey leading-7 items-start flex self-stretch">
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
      </div>
      <!-- read more -->
      <div class="flex pt-4 items-end">
        <a
          href="/blog/post"
          class="bg-x-blue text-center font-bold text-lg py-4 px-12 text-white hover:bg-x-yellow transition duration-150 ease-in-out"
        >
          Read More >
        </a>
      </div>
    </div>
  </div>
</template>
