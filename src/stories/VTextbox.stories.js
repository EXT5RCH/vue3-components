import { ref } from "@vue/reactivity";
import VTextbox from "../components/VTextbox.vue";

export default {
  title: "VTextbox",
  component: VTextbox,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password", "email", "number"],
      description: "inputタイプを設定します",
    },
    disabled: {
      description: "テキストボックスの使用不可を設定します。",
    },
    label: {
      description: "キャプションを設定します。",
    },
    placeholder: {
      description: "プレースホルダーを設定します。",
    },
  },
};

const Template = (args) => ({
  components: { VTextbox },
  setup() {
    const value = ref("");
    return { args, value };
  },
  template: '<v-textbox v-bind="args" v-model="value" />',
});

export const Default = Template.bind({});
Default.args = {
  label: "名前",
  type: "text",
  placeholder: "入力してください。",
  title: "名前",
  disabled: false,
};
