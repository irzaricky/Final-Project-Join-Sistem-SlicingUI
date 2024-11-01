<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import homeHero from '@/components/home/HomeHero.vue'
import homeFeatured from '@/components/home/HomeFeatured.vue'
import HomeAbout from '@/components/home/HomeAbout.vue'
import HomeCategory from '@/components/home/HomeCategory.vue'
import HomeSpecialPost from '@/components/home/HomeSpecialPost.vue'
import HomeAuthor from '@/components/home/HomeAuthor.vue'
import HomeLogoComponent from '@/components/home/HomeLogoComponent.vue'
import HomeTestimonials from '@/components/home/HomeTestimonials.vue'
import JoinOurTeam from '@/components/JoinOurTeam.vue'
</script>

<template>
  <MainLayout>
    <homeHero></homeHero>
    <homeFeatured></homeFeatured>
    <HomeAbout></HomeAbout>
    <HomeCategory></HomeCategory>
    <HomeSpecialPost></HomeSpecialPost>
    <HomeAuthor></HomeAuthor>
    <HomeLogoComponent></HomeLogoComponent>
    <HomeTestimonials></HomeTestimonials>
    <JoinOurTeam></JoinOurTeam>
  </MainLayout>
</template>
