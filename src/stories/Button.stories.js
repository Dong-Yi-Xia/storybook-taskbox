import MyButton from './Button.vue';


//Default metadata control Storybook, how it list the stories
//The component
export default {
  title: 'Example/Button',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      description: 'Change the sizing',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      }
    },
    onClick: {},
    food: {control: {type: 'radio', options: ['pizza', 'hotdog']}},
    drink: 'pop',
  },

  // parameters: {
  //   backgrounds: {
  //     values: [
  //       { name: 'red', value: '#f00' },
  //       { name: 'green', value: '#0f0' },
  //       { name: 'blue', value: '#00f' },
  //     ],
  //   },
  // },

  //wrap a component in arbitrary markup when rendering a story
  // decorators: [() => ({ template: '<div style="border: 2px solid;"><story /></div>' })],

  args: {
    primary: false,
  }

};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-button v-bind="args" />',
});


// named exports are Stories
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Click Mee',
};
// Able to rename story
Primary.storyName = 'I am the pri2mary';

Primary.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'blue', value: '#00f' },
    ],
  },
};




export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};
// Add a wrapper
Secondary.decorators =  [() => ({ template: '<div style="border: 2px solid;"><story /></div>' })]

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
