import { ref } from "@vue/reactivity";
import VCheckbox from "../components/VCheckbox.vue";

export default {
  title: "VCheckbox",
  component: VCheckbox,
  argTypes: {
    disabled: {
      description: "チェックボックスの使用不可を設定します。",
    },
    items: {
      description: "各チェックボックスの情報を設定します。",
    },
  },
};

const Template = (args) => ({
  components: { VCheckbox },
  setup() {
    const modelValue = ref([]);
    return { args, modelValue };
  },
  template:
    '<v-checkbox v-bind="args" v-model="modelValue" @update:modelValue="handleChange" />',
  methods: {
    handleChange: (e) => {
      console.log(e);
    },
  },
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: "赤", value: "red", title: "赤" },
    { label: "青", value: "blue", title: "青" },
    { label: "黄色", value: "yellow", title: "黄色" },
  ],
  disabled: false,
};
