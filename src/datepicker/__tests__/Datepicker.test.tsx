import React from 'react';
import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import Datepicker from '../Datepicker';

const defaultMonth = new Date(2020, 5, 1);

jest.mock('@navikt/ds-react/esm/form/useFormField', () => ({
    useFormField: () => ({
        showErrorMsg: true,
        hasError: true,
        errorId: '123',
        inputDescriptionId: undefined,
        size: 'medium',
        inputProps: {
            id: 'theInput',
            'aria-invalid': false,
        },
    }),
}));

describe('Datepicker', () => {
    const testId = 'theInput';
    const onDateChangeMock = jest.fn();

    const setup = (value?: string, errorMsg?: string) => {
        const utils = render(
            <div>
                <Datepicker
                    id={'inputId'}
                    label="Oppgi dato for abc"
                    value={value}
                    inputName="dsf"
                    onChange={onDateChangeMock}
                    inputProps={{ ['data-testid']: testId }}
                    dayPickerProps={{ defaultMonth }}
                    error={errorMsg}
                />
            </div>
        );
        const button = utils.getByText('Kalender').parentElement as HTMLInputElement;
        const input = utils.getByTestId(testId) as HTMLInputElement;
        const error = errorMsg ? (utils.getByText(errorMsg) as HTMLInputElement) : undefined;
        return {
            button,
            input,
            error,
            ...utils,
        };
    };

    it('Should render DateInput and CalendarButton', () => {
        const { button, input } = setup();
        expect(button).toBeDefined();
        expect(input).toBeDefined();
    });

    it('Should show calendar when CalendarButton clicked', async () => {
        const { button } = setup();
        fireEvent.click(button);
        await waitFor(() => expect(screen.findAllByRole('dialog')).toBeDefined());
    });

    it('Should set new date when typed into DateInput ', () => {
        const { input } = setup();
        fireEvent.change(input, { target: { name: 'abc', value: '12.10.2000' } });
        fireEvent.blur(input);
        expect(onDateChangeMock.mock.calls.length).toBe(1);
        expect(onDateChangeMock.mock.calls[0][0]).toEqual('2000-10-12');
        expect(input.value).toEqual('12.10.2000');
    });

    it('Should keep invalid date string in input when invalid formatted date is typed into DateInput ', () => {
        const { input } = setup();
        fireEvent.change(input, { target: { name: 'abc', value: '1210.2000' } });
        fireEvent.blur(input);
        expect(input.value).toEqual('1210.2000');
    });

    it('Should trigger onChange with "" when empty string typed into DateInput ', () => {
        const { input } = setup('12.10.2000');
        fireEvent.change(input, { target: { name: 'abc', value: '' } });
        fireEvent.blur(input);
        expect(input.value).toEqual('');
    });

    it('Should set correct date when date chosen from calendar', async () => {
        const { button } = setup();
        fireEvent.click(button);
        await waitFor(() => {
            expect(screen.queryAllByRole('dialog').length).toBe(1);
        });
        const day = screen.getByText('16') as HTMLElement;
        fireEvent.click(day);
        expect(onDateChangeMock.mock.calls.length).toBe(1);
        expect(onDateChangeMock.mock.calls[0][0]).toEqual('2020-06-16');
    });

    it('Should render error message if set', () => {
        const { error } = setup('abc', 'Date is invalid');
        expect(error).toBeDefined();
    });
});
