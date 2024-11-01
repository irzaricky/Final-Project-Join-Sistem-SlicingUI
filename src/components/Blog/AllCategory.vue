<script setup lang="ts"></script>

<template>
  <!-- bagian tulisan all category -->
  <div class="w-full flex flex-col gap-y-8 items-start pt-16 pb-4 px-20">
    <div class="leading-[64px] text-x-black font-bold text-4xl">
      All Categories
    </div>
  </div>

  <!-- All category -->
  <div class="h-[228px] relative mb-8 ml-16">
    <!-- Business -->
    <div
      class="w-[296px] h-[228px] left-0 top-0 absolute hover:bg-x-blue transition duration-150 ease-in-out group"
    >
      <!-- background kotak -->
      <div
        class="w-[296px] h-[228px] left-0 top-0 absolute opacity-30 border border-x-mediumgrey"
      ></div>
      <!-- Icon -->
      <div class="mt-10 ml-8">
        <img
          class="bg-x-lightyellow rounded-lg"
          src="@/assets/images/home-category/tech.png"
        />
      </div>
      <a
        href="/category/business"
        class="left-[32px] top-[96px] absolute text-x-black text-[28px] font-bold leading-10 group-hover:text-white"
      >
        Business
      </a>
      <a
        class="w-[232px] left-[32px] top-[140px] absolute text-x-mediumgrey text-base font-normal leading-7 group-hover:text-white"
      >
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      </a>
    </div>

    <!-- Startup -->
    <div
      class="w-[296px] h-[228px] left-[328px] top-0 absolute hover:bg-x-blue transition duration-150 ease-in-out group"
    >
      <!-- background kotak -->
      <div
        class="w-[296px] h-[228px] left-0 top-0 absolute opacity-30 border border-x-mediumgrey"
      ></div>
      <!-- Icon -->
      <div class="mt-10 ml-8">
        <img
          class="bg-x-lightyellow rounded-lg"
          src="@/assets/images/home-category/shuttle.png"
        />
      </div>
      <a
        href="/category/business"
        class="left-[32px] top-[96px] absolute text-x-black text-[28px] font-bold leading-10 group-hover:text-white"
      >
        Startup
      </a>
      <a
        class="w-[232px] left-[32px] top-[140px] absolute text-x-mediumgrey text-base font-normal leading-7 group-hover:text-white"
      >
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      </a>
    </div>

    <!-- Economy -->
    <div
      class="w-[296px] h-[228px] left-[656px] top-0 absolute hover:bg-x-blue transition duration-150 ease-in-out group"
    >
      <!-- background kotak -->
      <div
        class="w-[296px] h-[228px] left-0 top-0 absolute opacity-30 border border-x-mediumgrey"
      ></div>
      <!-- Icon -->
      <div class="mt-10 ml-8">
        <img
          class="bg-x-lightyellow rounded-lg"
          src="@/assets/images/home-category/economy.png"
        />
      </div>
      <a
        href="/category/business"
        class="left-[32px] top-[96px] absolute text-x-black text-[28px] font-bold leading-10 group-hover:text-white"
      >
        Economy
      </a>
      <a
        class="w-[232px] left-[32px] top-[140px] absolute text-x-mediumgrey text-base font-normal leading-7 group-hover:text-white"
      >
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      </a>
    </div>

    <!-- technology -->
    <div
      class="w-[296px] h-[228px] left-[984px] top-0 absolute hover:bg-x-blue transition duration-150 ease-in-out group"
    >
      <!-- background kotak -->
      <div
        class="w-[296px] h-[228px] left-0 top-0 absolute opacity-30 border border-x-mediumgrey"
      ></div>
      <!-- Icon -->
      <div class="mt-10 ml-8">
        <img
          class="bg-x-lightyellow rounded-lg"
          src="@/assets/images/home-category/cyborg.png"
        />
      </div>
      <a
        href="/category/business"
        class="w-[147px] left-[32px] top-[96px] absolute text-x-black text-[28px] font-bold leading-10 group-hover:text-white"
      >
        Technology
      </a>
      <a
        class="w-[232px] left-[32px] top-[140px] absolute text-x-mediumgrey text-base font-normal leading-7 group-hover:text-white"
      >
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      </a>
    </div>
  </div>
</template>
