<script setup lang="ts">
const msg = ref('Whatever')

const { data } = await useFetch('/api/joke/random')
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <h1>{{ msg }}</h1>
    {{ data?.joke }}
  </div>
</template>
