<script setup lang="ts">
import AboutListAuthor from '@/components/About/AboutListAuthor.vue'
import KnowOurTeam from '@/components/About/KnowOurTeam.vue'
import OverviewAboutUs from '@/components/About/OverviewAboutUs.vue'
import WhyWeStart from '@/components/About/WhyWeStart.vue'
import JoinOurTeam from '@/components/JoinOurTeam.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <OverviewAboutUs></OverviewAboutUs>
    <KnowOurTeam></KnowOurTeam>
    <WhyWeStart></WhyWeStart>
    <AboutListAuthor></AboutListAuthor>
    <JoinOurTeam></JoinOurTeam>
  </MainLayout>
</template>
