<script setup lang="ts">
import AuthorBlog from '@/components/Author/AuthorBlog.vue'
import AuthorHeader from '@/components/Author/AuthorHeader.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <AuthorHeader></AuthorHeader>
    <AuthorBlog></AuthorBlog>
  </MainLayout>
</template>
