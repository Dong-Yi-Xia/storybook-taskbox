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
    onClick: {
      action: 'clicked'
    },
    food: {
      description: 'controlling the food',
      control: {
        type: 'radio',
        options: ['pizza', 'hotdog']
      }
    },
    drink: String,
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
  template: `
    <div>
      <my-button v-bind="args" />
      <my-button v-bind="args" />
      <my-button v-bind="args" />
      <my-button v-bind="args" />
    </div>
  `,
});


// named exports are Stories
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Click Mee',
  onClick: {handles: ['mouseover', 'click .btn'],}
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
  ...Primary.args,
  label: 'Butto546n',
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


export const something = ( args ) => ({
  components: { MyButton },

  template: `<my-button label={ans} />`
})

something.args = {
  label: 'hello'
}
