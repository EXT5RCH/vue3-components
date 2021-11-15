<script setup lang="ts">
interface Props {
  msg: string;
  disabled?: boolean;
}

interface Emits {
  (e: "click"): void;
}

withDefaults(defineProps<Props>(), {
  disabled: false,
});

const emit = defineEmits<Emits>();

const handleClick = () => {
  emit("click");
};
</script>

<template>
  <button @click="handleClick" :disabled="disabled">
    <slot>Submit</slot>
  </button>
</template>
