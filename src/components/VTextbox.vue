<script setup lang="ts">
import { computed } from "@vue/reactivity";

interface Props {
  modelValue: string;
  label?: string;
  type: "text" | "password" | "email" | "number";
  placeholder?: string;
  title?: string;
  disabled?: boolean;
}

interface Emits {
  (e: "update:modelValue", value: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
  type: "text",
  placeholder: "",
  disabled: false,
});

const emit = defineEmits<Emits>();

const vmInputText = computed({
  get() {
    return props.modelValue;
  },
  set(newValue: string) {
    emit("update:modelValue", newValue);
  },
});
</script>

<template>
  <label :title="title">
    {{ label }}
    <input
      :type="type"
      v-model="vmInputText"
      :placeholder="placeholder"
      :disabled="disabled"
    />
  </label>
</template>
