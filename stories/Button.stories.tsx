import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, Props } from '../src/Components/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'Hello',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Primary = Template.bind({});

Default.args = {
  variant: 'primary',
  children: 'Hello World',
  checked: false,
  onClick: action('something'),
};

Primary.args = {};
