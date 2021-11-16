<script setup lang="ts">
import { computed } from "@vue/reactivity";

type RadioType = {
  label: string;
  value: string;
  title?: string;
};

interface Props {
  modelValue: string;
  items: RadioType[];
  disabled?: boolean;
}

interface Emits {
  (e: "update:modelValue", value: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  items: () => [],
  disabled: false,
});

const emit = defineEmits<Emits>();

const vmSelected = computed({
  get() {
    return props.modelValue;
  },
  set(newValue: string) {
    emit("update:modelValue", newValue);
  },
});
</script>

<template>
  <label v-for="i in props.items" :title="i.title">
    <input
      type="radio"
      v-model="vmSelected"
      :value="i.value"
      :disabled="disabled"
    />
    {{ i.label }}
  </label>
</template>
