<script setup lang="ts"></script>

<template>
  <!-- bagian tulisan all post -->
  <div class="w-full flex flex-col gap-y-8 items-start py-16 px-20">
    <div class="leading-[64px] text-x-black font-bold text-5xl">All posts</div>
    <div
      class="flex-shrink-0 h-px self-stretch border-2 border-x-mediumgrey opacity-30 w-full"
    ></div>
  </div>

  <!-- All post -->
  <div class="flex flex-col gap-12 mb-16">
    <!-- Startup -->
    <div
      class="min-[1136px]:flex-nowrap flex flex-wrap justify-center flex-grow gap-x-8 gap-y-8 items-center"
    >
      <img
        class="w-[490px] flex-shrink-0 h-80 object-center object-cover"
        src="@/assets/images/Blog/blog-1.png"
      />
      <div class="w-[624px] flex-shrink-0 flex flex-col gap-y-4">
        <snap class="text-x-yellow font-semibold leading-5 w-44">
          STARTUP
        </snap>
        <div class="[max-width:624px] flex pt-1 pr-5 items-end">
          <div
            class="leading-[48px] text-x-black font-bold text-4xl items-end flex flex-grow"
          >
            <p>Design tips for designers that cover everything you need</p>
          </div>
        </div>
        <div class="text-x-mediumgrey leading-7 items-start flex">
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>
      </div>
    </div>
    <!-- Business -->
    <div
      class="min-[1136px]:flex-nowrap flex flex-wrap justify-center flex-grow gap-x-8 gap-y-8 items-center"
    >
      <img
        class="w-[490px] flex-shrink-0 h-80 object-center object-cover"
        src="@/assets/images/Blog/blog-2.png"
      />
      <div class="w-[624px] flex-shrink-0 flex flex-col gap-y-4">
        <snap class="text-x-yellow font-semibold leading-5 w-44">
          BUSINESS
        </snap>
        <div class="[max-width:624px] flex pt-1 pr-5 items-end">
          <div
            class="leading-[48px] text-x-black font-bold text-4xl items-end flex flex-grow"
          >
            <p>How to build rapport with your web design clients</p>
          </div>
        </div>
        <div class="text-x-mediumgrey leading-7 items-start flex">
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>
      </div>
    </div>
    <!-- Start Up -->
    <div
      class="min-[1136px]:flex-nowrap flex flex-wrap justify-center flex-grow gap-x-8 gap-y-8 items-center"
    >
      <img
        class="w-[490px] flex-shrink-0 h-80 object-center object-cover"
        src="@/assets/images/Blog/blog-3.png"
      />
      <div class="w-[624px] flex-shrink-0 flex flex-col gap-y-4">
        <snap class="text-x-yellow font-semibold leading-5 w-44">
          STARTUP
        </snap>
        <div class="[max-width:624px] flex pt-1 pr-5 items-end">
          <div
            class="leading-[48px] text-x-black font-bold text-4xl items-end flex flex-grow"
          >
            <p>Logo design trends to avoid in 2022</p>
          </div>
        </div>
        <div class="text-x-mediumgrey leading-7 items-start flex">
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>
      </div>
    </div>
    <!-- Technology -->
    <div
      class="min-[1136px]:flex-nowrap flex flex-wrap justify-center flex-grow gap-x-8 gap-y-8 items-center"
    >
      <img
        class="w-[490px] flex-shrink-0 h-80 object-center object-cover"
        src="@/assets/images/Blog/blog-4.png"
      />
      <div class="w-[624px] flex-shrink-0 flex flex-col gap-y-4">
        <snap class="text-x-yellow font-semibold leading-5 w-44">
          TECHNOLOGY
        </snap>
        <div class="[max-width:624px] flex pt-1 pr-5 items-end">
          <div
            class="leading-[48px] text-x-black font-bold text-4xl items-end flex flex-grow"
          >
            <p>8 Figma design systems you can download for free today</p>
          </div>
        </div>
        <div class="text-x-mediumgrey leading-7 items-start flex">
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>
      </div>
    </div>
    <!-- Economy -->
    <div
      class="min-[1136px]:flex-nowrap flex flex-wrap justify-center flex-grow gap-x-8 gap-y-8 items-center"
    >
      <img
        class="w-[490px] flex-shrink-0 h-80 object-center object-cover"
        src="@/assets/images/Blog/blog-1.png"
      />
      <div class="w-[624px] flex-shrink-0 flex flex-col gap-y-4">
        <snap class="text-x-yellow font-semibold leading-5 w-44">
          ECONOMY
        </snap>
        <div class="[max-width:624px] flex pt-1 pr-5 items-end">
          <div
            class="leading-[48px] text-x-black font-bold text-4xl items-end flex flex-grow"
          >
            <p>Font sizes in UI design: The complete guide to follow</p>
          </div>
        </div>
        <div class="text-x-mediumgrey leading-7 items-start flex">
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- tombol page -->
  <div class="gap-x-[16px] font-bold w-full flex items-center justify-center">
    <div class="flex self-stretch flex-col items-center">
      <a
        href="#"
        class="text-x-mediumgrey text-2xl hover:text-x-black hover:text-[28px] hover:leading-10"
      >
        &lt; Prev
      </a>
    </div>
    <a
      href="#"
      class="text-x-mediumgrey text-2xl hover:text-x-black hover:text-[28px] hover:leading-10"
    >
      Next &gt;
    </a>
  </div>
</template>
