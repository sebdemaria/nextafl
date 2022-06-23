import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "UI/Button",
    component: Button,
    argTypes: {
        background: { control: "color" },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Button",
    size: "md",
};

export const Outline = Template.bind({});
Outline.args = {
    children: "Button",
    size: "md",
    variant: "outline",
};
