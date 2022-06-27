import { FormFieldProps } from '@navikt/ds-react/esm/form/useFormField';
import React, { ChangeEvent, FocusEvent, HTMLAttributes, useEffect, useState } from 'react';
import classNames from 'classnames';
import { InputDateString, ISODateString } from './types';
import {
    InputDateStringToISODateString,
    INVALID_DATE_VALUE,
    ISODateStringToInputDateString,
} from './utils/dateFormatUtils';
import { omit } from '@navikt/ds-react';

export interface DatepickerInputProps extends FormFieldProps, HTMLAttributes<HTMLInputElement> {
    name: string;
    value?: ISODateString;
    onDateChange: (date: ISODateString | string | undefined) => void;
}

const getInitialValue = (dateValue: string): string => {
    const inputDateString = ISODateStringToInputDateString(dateValue);
    return inputDateString === INVALID_DATE_VALUE ? dateValue : inputDateString;
};

const isInputFormattedDateString = (value: any) => {
    if (value && typeof value === 'string') {
        const reg = /^\d{2}.\d{2}.\d{4}$/;
        const match: RegExpMatchArray | null = value.match(reg);
        return match !== null;
    } else {
        return false;
    }
};
const DateInput = React.forwardRef(function DateInput(
    { id, value = '', size, onDateChange, name, ...rest }: DatepickerInputProps,
    ref: React.Ref<HTMLInputElement>
) {
    const [inputValue, setInputValue] = useState<InputDateString>(getInitialValue(value));

    const triggerValueChange = (value = '') => {
        const isoDateString = InputDateStringToISODateString(value.trim());
        if (isoDateString !== INVALID_DATE_VALUE) {
            if (!isInputFormattedDateString(value) && value !== '') {
                setInputValue(ISODateStringToInputDateString(value));
            }
            onDateChange(isoDateString);
        } else {
            onDateChange(value);
        }
    };

    const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setInputValue(evt.target.value);
    };

    const onBlur = (evt: FocusEvent<HTMLInputElement>) => {
        triggerValueChange(evt.target.value);
    };

    const onKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
        if (evt.key === 'Enter') {
            evt.preventDefault();
            triggerValueChange((evt.target as HTMLInputElement).value);
        }
    };

    useEffect(() => {
        const inputDateString = ISODateStringToInputDateString(value);
        if (inputDateString !== INVALID_DATE_VALUE) {
            setInputValue(value === undefined || value === '' ? '' : inputDateString);
        } else {
            setInputValue(value);
        }
    }, [value]);

    return (
        <input
            id={id}
            name={name}
            ref={ref}
            type="text"
            inputMode="text"
            className={classNames('navds-text-field__input', 'navds-body-short', `navds-body-${size ?? 'medium'}`)}
            value={inputValue}
            maxLength={10}
            onChange={onChange}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            autoComplete="off"
            autoCorrect="off"
            {...omit(rest, ['errorId', 'error'])}
        />
    );
});
export default DateInput;
