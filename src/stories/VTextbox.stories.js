import VTextbox from "../components/VTextbox.vue";

export default {
  title: "VTextbox",
  component: VTextbox,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password", "email", "number"],
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
