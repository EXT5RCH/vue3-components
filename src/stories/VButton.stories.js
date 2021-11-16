import VButton from "../components/VButton.vue";

export default {
  title: "VButton",
  component: VButton,
  argTypes: {
    onClick: {
      description: "クリック時に発火するイベントです。",
    },
    disabled: {
      description: "ボタンの使用不可を設定します。",
    },
    title: {
      description: "ツールチップが表示されます。",
    },
    default: {
      description: "デフォルトのslotです。",
    },
  },
};

const DefaultTemplate = (args) => ({
  components: { VButton },
  setup() {
    return { args };
  },
  template: '<v-button v-bind="args"></v-button>',
});

export const Default = DefaultTemplate.bind({});
Default.args = {
  disabled: false,
  title: "押すと送信されます。",
};

const TextChangedTemplate = (args) => ({
  components: { VButton },
  setup() {
    return { args };
  },
  template: '<v-button v-bind="args"><i>Button</i></v-button>',
});

export const TextChanged = TextChangedTemplate.bind({});
TextChanged.args = {
  disabled: false,
  title: "Buttonを押してください。",
};
