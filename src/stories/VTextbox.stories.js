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
      defaultValue: false,
    },
    label: {
      description: "キャプションを設定します。",
      defaultValue: "",
    },
    placeholder: {
      description: "プレースホルダーを設定します。",
      defaultValue: "",
    },
  },
};

const Template = (args) => ({
  components: { VTextbox },
  setup() {
    return { args };
  },
  template: '<v-textbox v-bind="args" v-model="value" />',
});

export const Default = Template.bind({});
Default.args = {
  label: "名前",
  type: "text",
  placeholder: "入力してください。",
  disabled: false,
};
