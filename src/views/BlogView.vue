<script setup lang="ts">
import AllBlog from '@/components/Blog/AllBlog.vue'
import AllCategory from '@/components/Blog/AllCategory.vue'
import BlogHeader from '@/components/Blog/BlogHeader.vue'
import JoinOurTeam from '@/components/JoinOurTeam.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <BlogHeader></BlogHeader>
    <AllBlog></AllBlog>
    <AllCategory></AllCategory>
    <JoinOurTeam></JoinOurTeam>
  </MainLayout>
</template>
