import { ref } from "@vue/reactivity";
import VRadio from "../components/VRadio.vue";

export default {
  title: "VRadio",
  component: VRadio,
  argTypes: {
    disabled: {
      description: "ラジオボタンの使用不可を設定します。",
    },
    items: {
      description: "各ラジオボタンの情報を設定します。",
    },
  },
};

const Template = (args) => ({
  components: { VRadio },
  setup() {
    const modelValue = ref("red");
    return { args, modelValue };
  },
  template:
    '<v-radio v-bind="args" v-model="modelValue" @update:modelValue="handleChange" />',
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
