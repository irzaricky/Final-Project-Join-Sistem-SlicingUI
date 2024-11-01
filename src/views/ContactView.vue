<script setup lang="ts">
import ContactForm from '@/components/Contact/ContactForm.vue'
import ContactHeading from '@/components/Contact/ContactHeading.vue'
import ContactSchedule from '@/components/Contact/ContactSchedule.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <ContactHeading></ContactHeading>
    <ContactSchedule></ContactSchedule>
    <ContactForm></ContactForm>
  </MainLayout>
</template>
