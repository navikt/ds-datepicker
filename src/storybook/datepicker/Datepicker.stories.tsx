import { Meta, StoryFn } from '@storybook/react';
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
} as Meta<typeof DatepickerExample>;

const Template: StoryFn<typeof DatepickerExample> = () => <DatepickerExample />;

export const Default = Template.bind({});
