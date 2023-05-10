import { fireEvent, render, waitFor } from '@testing-library/react';
import DateInput from '../DateInput';

describe('DateInput', () => {
    const testId = 'theInput';
    const onDateChangeMock = jest.fn();

    const setup = (value?: string) => {
        const utils = render(
            <DateInput value={value} data-testid={testId} name="input" onDateChange={onDateChangeMock} />
        );
        const input = utils.getByTestId(testId) as HTMLInputElement;
        return {
            input,
            ...utils,
        };
    };

    it('Should be defined', () => {
        const { input } = setup();
        expect(input).toBeDefined();
    });

    it('Should be blank initially', () => {
        const { input } = setup();
        input.blur();
        expect(input.value).toEqual('');
    });

    it('onDateChange should return ISO formatted value string', async () => {
        const { input } = setup();
        fireEvent.change(input, { target: { value: '01.01.2019' } });
        fireEvent.blur(input);
        await waitFor(() => expect(onDateChangeMock).toHaveBeenCalledWith('2019-01-01'));
    });

    it('ISO formatted value prop should render in DD.MM.YYYY format', () => {
        const { input } = setup('01.01.2019');
        expect(input.value).toEqual('01.01.2019');
    });

    it('selected date should not render in DD-MM-YYYY format', () => {
        const { input } = setup('2019-01-01');
        expect(input.value).toEqual('01.01.2019');
    });

    it('Should render invalid date string', () => {
        const { input } = setup('40-30-2019');
        expect(input.value).toEqual('40-30-2019');
    });

    it('Should return invalid date string if selected date does not exist', async () => {
        const { input } = setup();
        fireEvent.change(input, { target: { value: '40.02.2019' } });
        fireEvent.blur(input);
        await waitFor(() => expect(onDateChangeMock).toHaveBeenCalledWith('40.02.2019'));
    });
});
