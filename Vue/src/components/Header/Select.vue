<script lang="ts">
import { defineComponent } from 'vue';

interface City {
  name: string;
  select: boolean;
  code: number;
}

export default defineComponent({
  props: {
    options: {
      type: Array as () => City[],
      required: true,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.options.find(option => option.select)?.name || null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
  methods: {
    handleClick(res: City) {
      this.selected = res.name; this.open = false; this.$emit('input', res);
    }
  }
});
</script>

<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div v-for="(option, i) of options" :key="i" @click="handleClick(option)">
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.custom-select {
  position: relative;
  width: 300px;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}

.custom-select .selected {
  background-color: transparent;
  border-radius: 6px;
  border: 1px solid #666666;
  color: #000000;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: 1px solid #000000;
  border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.custom-select .items {
  color: #000000;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  position: absolute;
  background-color: transparent;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: #000000;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #000000;
  color: #fff;
}

.selectHide {
  display: none;
}
</style>
