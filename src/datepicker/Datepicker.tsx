import { TextFieldProps } from '@navikt/ds-react';
import { FormFieldProps } from '@navikt/ds-react/esm/form/useFormField';
import { useFormField } from '@navikt/ds-react/cjs/form/useFormField';
import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import { v4 as guid } from 'uuid';
import DomEventContainer from './common/DomEventContainer';
import Calendar, { CalendarDayPickerProps } from './calendar/Calendar';
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
    /**
     * Ref set on the input element
     */
    inputRef?: React.Ref<HTMLInputElement>;
    /**
     * Label
     */
    label: React.ReactNode;
    /**
     * Name set on input element
     */
    inputName: string;
    /**
     * Value set in input element
     */
    value?: string;
    /**
     * Expose input element props
     */
    inputProps?: Omit<HTMLAttributes<HTMLInputElement>, 'name' | 'id' | 'value'> & { ['data-testid']?: string };
    /**
     * Event when value is set by picker date in calendar or on input blur
     */
    onChange: DatepickerChange;
    /**
     * Limitations on selecting dates in calendar
     */
    limitations?: DatepickerLimitations;
    /**
     * Visual settngs for the calendar
     */
    calendarSettings?: {
        showWeekNumber?: boolean;
        position?: CalendarPlacement;
    };
    /**
     * Language sent to the react-day-picker
     */
    locale?: DatepickerLocales;
    /**
     * Show or hide year and month dropdowns
     */
    showYearSelector?: boolean;
    /**
     * Set forcus on selected date when calendar is shown
     */
    setFocusOnDateWhenOpened?: boolean;
    /**
     * User can select dates which is not allowed - defined by limitations
     */
    allowInvalidDateSelection?: boolean;
    /**
     * Expose react-day-picker props
     */
    dayPickerProps?: CalendarDayPickerProps;
    /**
     * Function used when opening calendar. Can be used to see if the value is a valid date string
     */
    calendarDateStringFilter?: (value: string | undefined) => string | undefined;
    texts?: {
        /** Visually hidden label for calendar button */
        calendarLabel?: string;
        /** Visually hidden label for go to next month button */
        navBarNextMonthLabel?: string;
        /** Visually hidden label for go top previous month button */
        navbarPreviousMonthLabel?: string;
    };
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
        texts,
        calendarDateStringFilter,
    } = props;

    const [activeMonth, setActiveMonth] = useState<Date>(getDefaultMonth(value, limitations, dayPickerProps));
    const [calendarIsVisible, setCalendarIsVisible] = useState<boolean>(false);
    const prevValue = usePrevious(value);
    const defaultMonthPrevValue = usePrevious(dayPickerProps?.defaultMonth);

    const calendarRef = useRef<any>();

    useEffect(() => {
        const defaultMonth = dayPickerProps?.defaultMonth;
        const dateStringToUse = calendarDateStringFilter ? calendarDateStringFilter(value) : value;
        if (defaultMonth !== defaultMonthPrevValue && dateStringToUse === prevValue) {
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
    }, [value, limitations, prevValue, activeMonth, dayPickerProps, defaultMonthPrevValue, calendarDateStringFilter]);

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
                            label={texts?.calendarLabel}
                            onClick={() => setCalendarIsVisible(!calendarIsVisible)}
                        />
                        {calendarIsVisible && (
                            <CalendarPortal position={calendarSettings?.position}>
                                <Calendar
                                    ref={calendarRef}
                                    locale={locale}
                                    showWeekNumber={calendarSettings?.showWeekNumber}
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
                                />
                            </CalendarPortal>
                        )}
                    </div>
                </DsFormFieldWrapper>
            </div>
        </DomEventContainer>
    );
};
export default Datepicker;
