<script setup lang="ts">
import ListSocial from './ListSocial.vue'
</script>

<template>
  <footer>
    <div
      class="w-full h-[560px] px-20 pt-[59px] pb-14 bg-x-black justify-center items-center inline-flex"
    >
      <!-- container -->
      <div class="w-[1280px] h-[445px] relative">
        <!-- Finsweet -->
        <a
          class="w-[140px] h-[28.35px] relative text-white text-3xl font-bold leading-[48px]"
          >{Finsweet</a
        >
        <!-- navigasi -->
        <div class="w-[436px] h-[28.65px] left-[846px] top-0 absolute">
          <div
            class="left-[329px] top-0 absolute text-white text-base font-normal leading-7"
          >
            <a
              href="/privacy"
              class="text-white hover:text-x-yellow transition duration-150 ease-in-out"
            >
              Privacy Policy</a
            >
          </div>
          <div
            class="left-[222px] top-0 absolute text-white text-base font-normal leading-7"
          >
            <a
              href="/contact"
              class="text-white hover:text-x-yellow transition duration-150 ease-in-out"
            >
              Contact Us</a
            >
          </div>
          <div
            class="w-[71px] h-[27.65px] left-[127px] top-[1px] absolute text-white text-base font-normal leading-7"
          >
            <a
              href="/about"
              class="text-white hover:text-x-yellow transition duration-150 ease-in-out"
            >
              About Us</a
            >
          </div>
          <div
            class="left-[69px] top-0 absolute text-white text-base font-normal leading-7"
          >
            <a
              href="/blog"
              class="text-white hover:text-x-yellow transition duration-150 ease-in-out"
            >
              Blog</a
            >
          </div>
          <div
            class="left-0 top-0 absolute text-white text-base font-normal leading-7"
          >
            <a
              href="/"
              class="text-white hover:text-x-yellow transition duration-150 ease-in-out"
            >
              Home</a
            >
          </div>
        </div>

        <!-- Contents -->
        <div class="w-[1280px] h-64 left-0 top-[85px] absolute">
          <div
            class="w-[1280px] h-64 left-0 top-0 absolute opacity-5 bg-white"
          ></div>
          <div
            class="h-14 px-12 py-4 left-[1037px] top-[84px] absolute bg-x-blue justify-start items-start gap-3 inline-flex hover:bg-x-yellow transition duration-150 ease-in-out"
          >
            <a href="#" class="text-white text-lg font-bold leading-normal">
              Subscribe
            </a>
          </div>
          <div
            class="w-[323px] h-14 left-[690px] top-[84px] absolute border border-x-darkgrey flex items-center"
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              class="w-[135px] h-[28px] text-x-mediumgrey text-base font-normal leading-7 bg-transparent border-none outline-none pl-2"
            />
          </div>
          <a
            class="w-[562px] left-[64px] top-[80px] absolute text-white text-4xl font-bold leading-[48px]"
          >
            Subscribe to our news letter to get latest updates and news
          </a>
        </div>

        <!-- Alamat -->
        <div class="w-[361px] h-28 left-0 top-[389px] absolute">
          <div
            class="w-full opacity-70 text-white text-base font-normal leading-7"
          >
            Finstreet 118 2561 Fintown
          </div>
          <div
            class="w-full mt-2 opacity-70 text-white text-base font-normal leading-7"
          >
            Hello@finsweet.com | 020 7993 2905
          </div>
        </div>

        <div
          class="w-[144px] h-[16px] right-0 top-[389px] absolute flex justify-end"
        >
          <ListSocial></ListSocial>
        </div>
      </div>
    </div>
  </footer>
</template>
