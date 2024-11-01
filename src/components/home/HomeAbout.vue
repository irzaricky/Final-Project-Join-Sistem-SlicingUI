<script setup lang="ts"></script>

<template>
  <div class="w-full h-[523px] my-24 px-16">
    <div class="h-[23px] flex">
      <div class="bg-white w-1/6"></div>
      <div class="bg-x-yellow w-3/6"></div>
      <div class="bg-x-blue w-2/6"></div>
    </div>
    <div
      class="bg-x-lavender flex justify-center pr-28 pl-20 flex-col gap-y-4 items-start py-24"
    >
      <div
        class="min-[1270px]:flex-nowrap flex flex-wrap justify-center self-stretch gap-x-16 gap-y-16 items-start"
      >
        <div class="w-[515px] flex-shrink-0 flex flex-col gap-y-4 items-start">
          <div class="text-x-black uppercase font-semibold">ABOUT US</div>
          <div class="[max-width:515px] flex pt-2 pr-5 self-stretch items-end">
            <div
              class="text-x-black font-bold text-4xl items-end flex flex-grow"
            >
              <p>
                We are a community of content writers who share their learnings
              </p>
            </div>
          </div>
          <div class="text-x-mediumgrey items-start flex self-stretch">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div class="flex pt-0.5 flex-col items-center">
          <div class="w-[516px] flex flex-col gap-y-4 items-start">
            <div class="text-x-black uppercase font-semibold">Our mision</div>
            <div
              class="[max-width:516px] flex pt-2 pr-9 self-stretch items-end"
            >
              <div
                class="text-x-black text-[28px] font-bold items-end flex flex-grow"
              >
                <p>
                  Creating valuable content for creatives all around the world
                </p>
              </div>
            </div>
            <div class="text-x-mediumgrey items-start flex self-stretch">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <a
        href="/about"
        class="text-x-yellow font-bold text-lg hover:text-x-blue transition duration-150 ease-in-out"
      >
        Read More &gt;
      </a>
    </div>
  </div>
</template>
