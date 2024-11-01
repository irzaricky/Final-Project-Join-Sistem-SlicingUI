<script setup lang="ts">
import ListSocial from '../ListSocial.vue'
</script>

<template>
  <div
    class="bg-x-lavender flex relative justify-center h-[550px] items-center"
  >
    <div class="h-[294px] text-black w-2/3 flex">
      <div class="">
        <img
          src="@/assets/images/Author/author-Andrew.png"
          alt="Design tips article featured image"
          class="object-contain h-full max-md:max-w-full"
        />
      </div>
      <div class="flex flex-col justify-between pl-16 py-6 w-[669px]">
        <div class="text-4xl font-bold">
          Hey there, I’m Andrew Jonhson and welcome to my Blog
        </div>
        <div class="text-x-mediumgrey text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus.
        </div>
        <div class="my-4"><ListSocial></ListSocial></div>
      </div>
    </div>
    <div class="h-[23px] bg-x-yellow w-2/3 absolute bottom-0"></div>
  </div>
</template>
