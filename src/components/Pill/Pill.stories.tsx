import { Meta, StoryFn } from "@storybook/react";
import Pill from "./Pill";
import { IPill } from "./types";

const meta = {
  title: "Components/Pill",
  component: Pill,
  parameters: {
    layout: "centered",
    docs: {
      story: {
        inline: false,
        description: "A Pill component",
        iframeHeight: 400,
      },
    },
  },
  argTypes: {
    title: { control: "text" },
  },
  tags: ["autodocs"],
} as Meta;

export default meta;

const Template: StoryFn<IPill> = (args) => <Pill {...args} />;

/**
 * Default story of the Pill
 */

export const Default = Template.bind({});
Default.args = {
  title: "Action",
};
