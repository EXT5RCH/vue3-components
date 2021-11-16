<script setup lang="ts">
import { computed } from "@vue/reactivity";

type CheckboxItemType = {
  label: string;
  value: string;
};

interface Props {
  modelValue: string[];
  items: CheckboxItemType[];
  disabled?: boolean;
}

interface Emits {
  (e: "update:modelValue", value: string[]): void;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => [],
  items: () => [],
  disabled: false,
});

const emit = defineEmits<Emits>();

const vmCheckedList = computed({
  get() {
    return props.modelValue;
  },
  set(newValue: string[]) {
    emit("update:modelValue", newValue);
  },
});
</script>

<template>
  <label v-for="i in items" :key="i.value">
    <input
      type="checkbox"
      v-model="vmCheckedList"
      :value="i.value"
      :disabled="disabled"
    />
    {{ i.label }}
  </label>
</template>
