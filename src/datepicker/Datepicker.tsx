import { TextFieldProps } from '@navikt/ds-react';
import { FormFieldProps, useFormField } from '@navikt/ds-react/esm/form/useFormField';
import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import { DayPickerProps } from 'react-day-picker';
import { v4 as guid } from 'uuid';
import DomEventContainer from './common/DomEventContainer';
import Calendar from './calendar/Calendar';
import DateInput from './DateInput';
import DsFormFieldWrapper from './DsFormFieldWrapper';
import CalendarButton from './elementer/CalendarButton';
import CalendarPortal from './elementer/CalendarPortal';
import { usePrevious } from './hooks/usePrevious';
import { CalendarPlacement, DatepickerLimitations, DatepickerLocales, ISODateString } from './types';
import { isISODateString } from './types/typeGuards';
import { getDefaultMonth, getInvalidDates, isSameDate } from './utils';

export type DatepickerValue = ISODateString | string;

export type DatepickerChange = (value: DatepickerValue, isValidISODateString: boolean) => void;

export interface DatepickerProps extends FormFieldProps, Pick<TextFieldProps, 'size'> {
    inputRef?: React.Ref<HTMLInputElement>;
    label: string;
    value?: string | undefined;
    inputName: string;
    inputProps?: Omit<HTMLAttributes<HTMLInputElement>, 'name' | 'id' | 'value'> & { ['data-testid']?: string };
    onChange: DatepickerChange;
    limitations?: DatepickerLimitations;
    calendarSettings?: {
        showWeekNumbers?: boolean;
        position?: CalendarPlacement;
    };
    locale?: DatepickerLocales;
    allowInvalidDateSelection?: boolean;
    showYearSelector?: boolean;
    dayPickerProps?: Omit<DayPickerProps, 'disabledDays'>;
    setFocusOnDateWhenOpened?: boolean;
    allowNavigationToDisabledMonths?: boolean;
    calendarDateStringFilter?: (value: string | undefined) => string | undefined;
}

const Datepicker = (props: DatepickerProps) => {
    const {
        label,
        value,
        description,
        limitations,
        disabled,
        size,
        error,
        errorId,
        inputRef,
        inputName,
        inputProps,
        calendarSettings,
        allowInvalidDateSelection,
        locale = 'nb',
        showYearSelector,
        onChange,
        dayPickerProps,
        setFocusOnDateWhenOpened,
        allowNavigationToDisabledMonths = false,
        calendarDateStringFilter,
    } = props;

    const [activeMonth, setActiveMonth] = useState<Date>(getDefaultMonth(value, limitations, dayPickerProps));
    const [calendarIsVisible, setCalendarIsVisible] = useState<boolean>(false);
    const prevValue = usePrevious(value);
    const initialMonthPrevValue = usePrevious(dayPickerProps?.initialMonth);

    const calendarRef = useRef<any>();

    useEffect(() => {
        const initialMonth = dayPickerProps?.initialMonth;
        const dateStringToUse = calendarDateStringFilter ? calendarDateStringFilter(value) : value;
        if (initialMonth !== initialMonthPrevValue && dateStringToUse === prevValue) {
            const defaultMonth = getDefaultMonth(dateStringToUse, limitations, dayPickerProps);
            if (!isSameDate(defaultMonth, activeMonth)) {
                setActiveMonth(defaultMonth);
            }
        }
        if (dateStringToUse !== prevValue) {
            const defaultMonth = getDefaultMonth(dateStringToUse, limitations, dayPickerProps);
            if (!isSameDate(defaultMonth, activeMonth)) {
                setActiveMonth(defaultMonth);
            }
        }
    }, [value, limitations, prevValue, activeMonth, dayPickerProps, initialMonthPrevValue, calendarDateStringFilter]);

    const setDate = (value = '') => {
        setCalendarIsVisible(false);
        onChange(value, isISODateString(value));
    };

    const inputId = props.id || guid();
    const formFieldProps = useFormField(props, 'textField');
    return (
        <DomEventContainer>
            <div className="ds-datepicker">
                <DsFormFieldWrapper
                    label={label}
                    description={description}
                    formFieldProps={formFieldProps}
                    error={error}
                    id={inputId}>
                    <div style={{ position: 'relative' }}>
                        <DateInput
                            ref={inputRef}
                            {...formFieldProps.inputProps}
                            {...inputProps}
                            name={inputName}
                            value={value}
                            size={size}
                            error={error}
                            errorId={errorId}
                            onDateChange={setDate}
                        />
                        <CalendarButton
                            disabled={disabled}
                            size={props.size}
                            isOpen={calendarIsVisible}
                            onClick={() => setCalendarIsVisible(!calendarIsVisible)}
                        />
                    </div>
                </DsFormFieldWrapper>
                {calendarIsVisible && (
                    <CalendarPortal position={calendarSettings?.position}>
                        <Calendar
                            ref={calendarRef}
                            locale={locale}
                            showWeekNumbers={calendarSettings?.showWeekNumbers}
                            dateString={calendarDateStringFilter ? calendarDateStringFilter(value) : value}
                            month={activeMonth}
                            minDateString={limitations && limitations.minDate}
                            maxDateString={limitations && limitations.maxDate}
                            unavailableDates={limitations ? getInvalidDates(limitations) : undefined}
                            onSelect={setDate}
                            onClose={() => setCalendarIsVisible(false)}
                            allowInvalidDateSelection={allowInvalidDateSelection}
                            dayPickerProps={dayPickerProps}
                            showYearSelector={showYearSelector}
                            setFocusOnDateWhenOpened={setFocusOnDateWhenOpened}
                            allowNavigationToDisabledMonths={allowNavigationToDisabledMonths}
                        />
                    </CalendarPortal>
                )}
            </div>
        </DomEventContainer>
    );
};
export default Datepicker;
