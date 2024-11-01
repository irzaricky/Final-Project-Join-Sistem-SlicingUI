<script setup lang="ts">
const articles = [
  {
    author: 'John Doe',
    date: 'Aug 23, 2021',
    title: '8 Figma design systems that you can download for free today.',
  },
  {
    author: 'John Elden',
    date: 'Aug 23, 2021',
    title: '10 Figma design systems that you can download for free today.',
  },
  {
    author: 'John Soul',
    date: 'Aug 23, 2021',
    title: '12 Figma design systems that you can download for free today.',
  },
  {
    author: 'John Borne',
    date: 'Aug 23, 2021',
    title: '14 Figma design systems that you can download for free today.',
  },
]
</script>

<template>
  <!-- featured Section-->
  <div class="w-full flex flex-col py-24 px-16">
    <div
      class="min-[1272px]:flex-nowrap flex flex-wrap justify-center flex-grow gap-x-8 gap-y-8"
    >
      <div class="flex flex-col gap-y-8 items-start">
        <a class="text-x-black font-bold text-4xl"> Featured Post </a>
        <div
          class="[max-width:733px] flex relative z-0 justify-center flex-grow self-stretch flex-col gap-y-4 items-start p-8"
        >
          <div
            class="items-start flex absolute z-0 inset-0 border-x-mediumgrey flex-shrink-0 h-full w-full -scale-x-100 border border-opacity-20"
          ></div>
          <img
            class="z-[2] h-[352px] w-[669px] flex-shrink-0 object-center object-cover"
            src="@/assets/images/misc/featured-img.jpg"
          />
          <div class="z-[3] flex pt-4 items-end">
            <div class="font-medium text-sm">
              <span
                ><a class="text-x-verydarkgrey">By </a>
                <a
                  class="text-x-yellow hover:text-x-blue transition duration-150 ease-in-out"
                  href="#"
                >
                  John Doe
                </a>
                <a class="text-x-verydarkgrey">l May 23, 2022</a></span
              >
            </div>
          </div>
          <div
            class="text-x-verydarkgrey text-[28px] z-[4] font-bold flex self-stretch"
          >
            <a>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </a>
          </div>
          <div class="text-x-darkgrey w-[551px] flex">
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
          <!-- read more -->
          <div class="z-[6] flex pt-4 items-end">
            <a
              href="/blog"
              class="bg-x-blue text-center font-bold text-lg py-4 px-12 text-white hover:bg-x-yellow transition duration-150 ease-in-out"
            >
              Read More >
            </a>
          </div>
        </div>
      </div>

      <!-- All post -->
      <div class="flex flex-col">
        <div class="gap-y-[15px] flex pr-0.5 items-center mb-7 justify-between">
          <div class="font-bold text-4xl">All Posts</div>
          <div class="">
            <a
              href="/blog"
              class="text-x-yellow hover:text-x-blue transition duration-150 ease-in-out"
              >View All</a
            >
          </div>
        </div>
        <div
          v-for="(item, index) in articles"
          :key="index"
          class="flex hover:bg-x-lightyellow justify-center flex-grow self-stretch flex-col items-start pl-6 pr-20"
        >
          <div class="text-gray-600 text-xs mb-1">
            <span class="text-x-yellow font-medium">{{ item.author }}</span>
            <span> | </span>
            <span>{{ item.date }}</span>
          </div>
          <a class="text-2xl font-bold text-gray-900">
            {{ item.title }}
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- featured Section end-->
</template>
