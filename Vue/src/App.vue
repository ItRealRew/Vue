<script setup lang="ts">
import SelectCast from './components/Header/Select.vue';

const city = [
  { name: 'Vladimir', select: true, code: 2 },
  { name: 'Syzdal', select: false, code: 2 },
  { name: 'Moscow', select: false, code: 3 }]

</script>

<template>
  <header>
    <SelectCast :options="city" class="select"
      @input="console.log(1)" />
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
}
</style>
