<script setup lang="ts">
import ListSocial from '../ListSocial.vue'
</script>

<template>
  <div class="px-16 py-16 flex-column justify-evenly gap-x-8">
    <div class="flex justify-center items-center">
      <span class="leading-[48px] text-x-black text-center font-bold text-4xl">
        List of Authors
      </span>
    </div>
    <div
      class="min-[1270px]:flex-nowrap flex flex-wrap justify-between flex-grow gap-x-8 gap-y-8 mt-8"
    >
      <!-- Author 1 -->
      <a
        class="bg-x-lavender hover:bg-x-lightyellow duration-150 ease-in-out text-center flex flex-col items-center p-7 w-64 h-80"
        ><img
          src="@/assets/images/About/author-1.png"
          class="rounded-full h-32 w-32"
        />
        <span class="text-x-black text-[20px] pt-5 leading-10 font-bold">
          Floyd Miles
        </span>
        <span class="text-x-black leading-5 text-sm">
          Content Writer @Company
        </span>
        <div class="m-8"><ListSocial></ListSocial></div>
      </a>
      <!-- Author 2 -->
      <a
        class="bg-x-lavender hover:bg-x-lightyellow duration-150 ease-in-out text-center flex flex-col items-center p-7 w-64 h-80"
        ><img
          src="@/assets/images/About/author-2.png"
          class="rounded-full h-32 w-32"
        />
        <span class="text-x-black text-[20px] pt-5 leading-10 font-bold">
          Dianne Russel
        </span>
        <span class="text-x-black leading-5 text-sm">
          Content Writer @Company
        </span>
        <div class="m-8"><ListSocial></ListSocial></div>
      </a>
      <!-- Author 3 -->
      <a
        class="bg-x-lavender hover:bg-x-lightyellow duration-150 ease-in-out text-center flex flex-col items-center p-7 w-64 h-80"
        ><img
          src="@/assets/images/About/author-3.png"
          class="rounded-full h-32 w-32"
        />
        <span class="text-x-black text-[20px] pt-5 leading-10 font-bold">
          Jenny Wilson
        </span>
        <span class="text-x-black leading-5 text-sm">
          Content Writer @Company
        </span>
        <div class="m-8"><ListSocial></ListSocial></div>
      </a>
      <!-- Author 4 -->
      <a
        class="bg-x-lavender hover:bg-x-lightyellow duration-150 ease-in-out text-center flex flex-col items-center p-7 w-64 h-80"
        ><img
          src="@/assets/images/About/author-4.png"
          class="rounded-full h-32 w-32"
        />
        <span class="text-x-black text-[20px] pt-5 leading-10 font-bold">
          Leslie Alexander
        </span>
        <span class="text-x-black leading-5 text-sm">
          Content Writer @Company
        </span>
        <div class="m-8"><ListSocial></ListSocial></div>
      </a>
    </div>
    <div
      class="min-[1270px]:flex-nowrap flex flex-wrap justify-between flex-grow gap-x-8 gap-y-8 mt-8"
    >
      <!-- Author 5 -->
      <a
        class="bg-x-lavender hover:bg-x-lightyellow duration-150 ease-in-out text-center flex flex-col items-center p-7 w-64 h-80"
        ><img
          src="@/assets/images/About/author-5.png"
          class="rounded-full h-32 w-32"
        />
        <span class="text-x-black text-[20px] pt-5 leading-10 font-bold">
          Guy Hawkins
        </span>
        <span class="text-x-black leading-5 text-sm">
          Content Writer @Company
        </span>
        <div class="m-8"><ListSocial></ListSocial></div>
      </a>
      <!-- Author 6 -->
      <a
        class="bg-x-lavender hover:bg-x-lightyellow duration-150 ease-in-out text-center flex flex-col items-center p-7 w-64 h-80"
        ><img
          src="@/assets/images/About/author-6.png"
          class="rounded-full h-32 w-32"
        />
        <span class="text-x-black text-[20px] pt-5 leading-10 font-bold">
          Eleanor Pena
        </span>
        <span class="text-x-black leading-5 text-sm">
          Content Writer @Company
        </span>
        <div class="m-8"><ListSocial></ListSocial></div>
      </a>
      <!-- Author 7 -->
      <a
        class="bg-x-lavender hover:bg-x-lightyellow duration-150 ease-in-out text-center flex flex-col items-center p-7 w-64 h-80"
        ><img
          src="@/assets/images/About/author-7.png"
          class="rounded-full h-32 w-32"
        />
        <span class="text-x-black text-[20px] pt-5 leading-10 font-bold">
          Robert Fox
        </span>
        <span class="text-x-black leading-5 text-sm">
          Content Writer @Company
        </span>
        <div class="m-8"><ListSocial></ListSocial></div>
      </a>
      <!-- Author 8 -->
      <a
        class="bg-x-lavender hover:bg-x-lightyellow duration-150 ease-in-out text-center flex flex-col items-center p-7 w-64 h-80"
        ><img
          src="@/assets/images/About/author-8.png"
          class="rounded-full h-32 w-32"
        />
        <span class="text-x-black text-[20px] pt-5 leading-10 font-bold">
          Jacob Jones
        </span>
        <span class="text-x-black leading-5 text-sm">
          Content Writer @Company
        </span>
        <div class="m-8"><ListSocial></ListSocial></div>
      </a>
    </div>
  </div>
</template>
