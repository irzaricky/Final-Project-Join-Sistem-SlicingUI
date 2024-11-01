<script setup lang="ts"></script>

<template>
  <form class="w-full flex flex-col gap-y-3 items-center px-60 pb-24">
    <div class="flex justify-end pt-5 self-stretch flex-col">
      <div
        class="border-x-mediumgrey flex items-center border border-solid p-6 rounded-sm"
      >
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Full Name"
          class="ml-4 flex-grow text-x-black leading-7 bg-transparent outline-none placeholder-black"
        />
      </div>
    </div>
    <div class="flex justify-end pt-1 self-stretch flex-col">
      <div
        class="border-x-mediumgrey flex items-center border border-solid p-6 rounded-sm"
      >
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          class="ml-4 flex-grow text-x-black leading-7 bg-transparent outline-none placeholder-black"
        />
      </div>
    </div>
    <div
      class="w-full text-x-black leading-7 flex flex-wrap pt-0.5 gap-x-4 gap-y-4"
    >
      <div
        class="border-x-mediumgrey py-[22px] flex items-center border border-solid flex-grow px-6"
      >
        <select
          id="province"
          name="province"
          class="text-x-black leading-7 bg-transparent outline-none flex-grow placeholder-black"
          aria-placeholder="Province"
        >
          <option selected value="">Province</option>
          <option value="Jawa Tengah">Jawa Tengah</option>
          <option value="Jawa Tengah">Jawa Barat</option>
          <option value="Jawa Tengah">Jawa Timur</option></select
        ><vector class="h-[6.8px] w-[11px] flex-shrink-0 ml-4"></vector>
      </div>
      <div
        class="border-x-mediumgrey py-[22px] flex items-center border border-solid flex-grow px-6"
      >
        <select
          id="city"
          name="city"
          class="text-x-black leading-7 bg-transparent outline-none flex-grow placeholder-black"
          aria-placeholder="City"
        >
          <option selected value="">City</option>
          <option value="Klaten">Klaten</option>
          <option value="Klaten">Surakarta</option></select
        ><vector class="h-[6.8px] w-[11px] flex-shrink-0 ml-4"></vector>
      </div>
    </div>
    <div class="flex justify-end pt-1.5 self-stretch flex-col">
      <div
        class="pb-[91px] border-x-mediumgrey flex pt-6 items-start border border-solid px-6 rounded-sm"
      >
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          class="ml-4 flex-grow text-x-black leading-7 bg-transparent outline-none resize-none placeholder-black"
        ></textarea>
      </div>
    </div>
    <div class="flex justify-end pt-1 self-stretch flex-col">
      <button
        type="submit"
        class="pr-[17px] flex justify-center pl-4 bg-x-yellow hover:bg-x-blue items-center py-4 transition duration-150 ease-in-out"
      >
        <div class="text-x-black font-bold leading-8 text-2xl text-center">
          Send Message
        </div>
      </button>
    </div>
  </form>
</template>
