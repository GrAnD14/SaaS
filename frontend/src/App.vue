<script setup lang="ts">

const tasks = ['Design', 'Development', 'Testing']
</script>

<template>
  <ul>
    <li v-for="task in tasks" :key="task">
      {{ task }} 
    </li>
  </ul>
</template>

<style scoped></style>
