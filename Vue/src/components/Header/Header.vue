<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const menuItems = store.getters['menu/getMenuItems'];
    
    console.log(menuItems);

    return {
      menuItems
    };
  }
});
</script>

<template>
  <div>
    <ul>
      <li v-for="item in menuItems" :key="item.id">
        <a :href="item.link">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss"></style>
