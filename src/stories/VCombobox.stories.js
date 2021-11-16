import { ref } from "@vue/reactivity";
import VCombobox from "../components/VCombobox.vue";

export default {
  title: "VCombobox",
  component: VCombobox,
  argTypes: {
    disabled: {
      description: "コンボボックスの使用不可を設定します。",
    },
    items: {
      description: "各コンボボックスの情報を設定します。",
    },
  },
};

const Template = (args) => ({
  components: { VCombobox },
  setup() {
    const modelValue = ref("red");
    return { args, modelValue };
  },
  template:
    '<v-combobox v-bind="args" v-model="modelValue" @update:modelValue="handleChange" />',
  methods: {
    handleChange: (e) => {
      console.log(e);
    },
  },
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: "赤", value: "red" },
    { label: "青", value: "blue" },
    { label: "黄色", value: "yellow" },
  ],
  disabled: false,
};
