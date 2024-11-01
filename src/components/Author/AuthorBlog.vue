<script setup lang="ts"></script>

<template>
  <main class="mt-16 mb-24 mx-auto max-w-full w-[1147px] max-md:mt-10">
    <span class="leading-[64px] text-x-black font-bold text-3xl">My posts</span>
    <section class="flex flex-col gap-5 max-md:flex-col">
      <div class="flex flex-col w-full max-md:ml-0 max-md:w-full">
        <a
          href="/blog/post"
          class="flex max-md:flex-col hover:bg-x-lightyellow duration-150 ease-in-out"
          ><img
            src="@/assets/images/Author/Author-mypost-2.png"
            class="object-contain w-[412px] h-[320px]"
          />
          <div
            class="flex flex-col ml-5 w-full max-md:ml-0 max-md:max-w-full justify-center gap-y-2"
          >
            <span
              class="self-start text-base font-semibold leading-none text-x-yellow"
              >BUSINESS</span
            >
            <h2
              class="mt-5 mr-6 text-3xl font-bold tracking-tighter leading-10 text-x-black max-md:mr-2.5 max-md:max-w-full"
            >
              Font sizes in UI design: The complete guide to follow
            </h2>
            <p class="mt-4 leading-7 text-x-black max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div></a
        ><a
          href="/blog/post"
          class="flex mt-16 max-md:flex-col hover:bg-x-lightyellow duration-150 ease-in-out"
          ><img
            src="@/assets/images/Author/Author-mypost-1.png"
            class="object-contain w-[412px] h-[320px]"
          />
          <div
            class="flex flex-col ml-5 w-full max-md:ml-0 max-md:max-w-full justify-center gap-y-2"
          >
            <span
              class="self-start uppercase text-base font-semibold leading-none text-x-yellow"
              >ECONOMY</span
            >
            <h2
              class="mt-5 mr-6 text-3xl font-bold tracking-tighter leading-10 text-x-black max-md:mr-2.5 max-md:max-w-full"
            >
              How to build rapport with your web design clients
            </h2>
            <p class="mt-4 leading-7 text-x-black max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div></a
        >
      </div>
    </section>
  </main>
</template>
