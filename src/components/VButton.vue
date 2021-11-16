<script setup lang="ts">
interface Props {
  title?: string;
  disabled?: boolean;
}

interface Emits {
  (e: "click"): void;
}

withDefaults(defineProps<Props>(), {
  title: "",
  disabled: false,
});

const emit = defineEmits<Emits>();

const handleClick = () => {
  emit("click");
};
</script>

<template>
  <button @click="handleClick" :title="title" :disabled="disabled">
    <slot>Submit</slot>
  </button>
</template>
