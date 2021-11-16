<script setup lang="ts">
import { computed } from "@vue/reactivity";

type SelectItemType = {
  label: string;
  value: string;
  title?: string;
};

interface Props {
  modelValue: string;
  items: SelectItemType[];
  disabled: boolean;
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
  <select v-model="vmSelected" :disabled="disabled">
    <option v-for="i in items" :key="i.value" :value="i.value" :title="i.title">
      {{ i.label }}
    </option>
  </select>
</template>
