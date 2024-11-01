<script setup lang="ts"></script>

<template>
  <!-- Background Image -->
  <div class="w-full h-[464px] relative my-16">
    <div class="w-full h-[464px] left-0 top-0 absolute bg-[#faf6ea]"></div>
    <div
      class="w-[310px] h-[0px] left-[541px] top-[80px] absolute origin-top-left rotate-90 opacity-40 border border-x-mediumgrey"
    ></div>
    <div class="w-[62px] h-[62px] left-[1107px] top-[322px] absolute">
      <div class="relative">
        <!-- Lingkaran Putih dengan Arrow Kiri -->
        <div
          class="w-[62px] h-[62px] left-0 top-0 absolute bg-white rounded-full flex items-center justify-center overflow-hidden"
        >
          <img
            src="@/assets/images/home-testimonial/Arrow-kiri.png"
            class="w-5 h-3"
          />
          <!-- Atur ukuran gambar di sini -->
        </div>

        <!-- Lingkaran Hitam dengan Arrow Kanan -->
        <div
          class="w-[62px] h-[62px] left-16 top-0 absolute bg-black rounded-full flex items-center justify-center overflow-hidden"
        >
          <img
            src="@/assets/images/home-testimonial/Arrow-kanan.png"
            class="w-5 h-3"
          />
          <!-- Atur ukuran gambar di sini -->
        </div>
      </div>
    </div>
    <div
      class="origin-top-left -rotate-180 w-12 h-12 left-[1083px] top-[377px] absolute"
    ></div>
    <div class="w-[257px] h-[60px] left-[637px] top-[329px] absolute">
      <a
        class="left-[64px] top-0 absolute text-x-black text-2xl font-bold leading-loose"
      >
        Jonathan Vallem
      </a>
      <a
        class="left-[64px] top-[32px] absolute text-x-mediumgrey text-base font-normal leading-7"
      >
        New york, USA
      </a>
      <img
        class="w-12 h-12 left-0 top-0 absolute rounded-full"
        src="@/assets/images/misc/home-testimonial.png"
      />
    </div>
    <a
      class="w-[469px] left-[637px] top-[80px] absolute text-x-black text-2xl font-bold leading-loose"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </a>
    <div class="w-[349px] h-[200px] left-[112px] top-[92px] absolute">
      <a
        class="w-[345px] left-0 top-[32px] absolute text-x-black text-4xl font-bold leading-[48px]"
      >
        What people say about our blog
      </a>
      <a
        class="w-[349px] left-0 top-[144px] absolute text-x-black text-base font-normal leading-7"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </a>
      <a
        class="left-0 top-0 absolute text-x-black text-base font-semibold uppercase leading-tight tracking-[3px]"
      >
        TESTIMONIALs
      </a>
    </div>
  </div>
</template>
