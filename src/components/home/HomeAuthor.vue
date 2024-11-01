<script setup lang="ts">
import ListSocial from '../ListSocial.vue'

// Data penulis
const authors = [
  {
    name: 'Floyd Miles',
    title: 'Content Writer @Company',
    imgSrc: './assets/images/Author/author-1.png',
  },
  {
    name: 'Dianne Russel',
    title: 'Content Writer @Company',
    imgSrc: './assets/images/Author/author-2.png',
  },
  {
    name: 'Jenny Wilson',
    title: 'Content Writer @Company',
    imgSrc: './assets/images/Author/author-3.png',
  },
  {
    name: 'Leslie Alexander',
    title: 'Content Writer @Company',
    imgSrc: './assets/images/Author/author-4.png',
  },
]
</script>

<template>
  <!-- Bagian title -->
  <div class="w-full flex flex-col py-16">
    <a class="text-x-black text-4xl font-bold self-center"> List of Authors </a>
  </div>
  <div class="flex flex-wrap justify-center gap-4 my-8">
    <div
      v-for="(author, index) in authors"
      :key="index"
      class="relative w-[296px] h-[324px] bg-x-lightgrey flex flex-col items-center pt-10 hover:bg-x-lightyellow transition duration-150 ease-in-out group"
    >
      <!-- Foto Author -->
      <img class="w-32 h-32 rounded-full mb-4" :src="author.imgSrc" />

      <!-- Informasi Author -->
      <div class="text-center">
        <div class="text-x-black text-[28px] font-bold leading-10">
          {{ author.name }}
        </div>
        <div class="text-x-mediumgrey text-sm font-normal leading-tight">
          {{ author.title }}
        </div>
      </div>

      <!-- ListSocial Component -->
      <div class="mt-4">
        <ListSocial></ListSocial>
      </div>
    </div>
  </div>
</template>
