import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import StoryDecorator from '../decorator/StoryDecorator';
import DatepickerExample from './DatepickerExample';

export default {
    title: 'Datepicker',
    component: DatepickerExample,
    decorators: [
        (Story) => (
            <StoryDecorator>
                <Story />
            </StoryDecorator>
        ),
    ],
} as ComponentMeta<typeof DatepickerExample>;

const Template: ComponentStory<typeof DatepickerExample> = () => <DatepickerExample />;

export const Default = Template.bind({});
