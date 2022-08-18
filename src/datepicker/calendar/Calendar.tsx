import FocusTrap from 'focus-trap-react';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { DayModifiers, DayPicker, DayPickerProps, Matcher } from 'react-day-picker';
import enGB from 'date-fns/locale/en-GB';
import nb from 'date-fns/locale/nb';
import nn from 'date-fns/locale/nn';
import DomEventContainer from '../common/DomEventContainer';
import { DatepickerLocales, ISODateString } from '../types';
import {
    setFocusOnCalendarMonth,
    setFocusOnFirstElementInDayPickerCaption,
    setFocusOnLastElementInDayPickerCaption,
    setInitialDayFocus,
} from '../utils/calendarFocusUtils';
import { dateToISODateString, ISODateStringToUTCDate } from '../utils/dateFormatUtils';

export type CalendarDayPickerProps = Omit<DayPickerProps, 'mode' | 'selected'>;
interface Props {
    month: Date;
    dateString?: ISODateString;
    minDateString?: ISODateString;
    maxDateString?: ISODateString;
    onSelect: (dateString: ISODateString) => void;
    onClose: () => void;
    unavailableDates?: Matcher[];
    allowInvalidDateSelection?: boolean;
    showWeekNumber?: boolean;
    showYearSelector?: boolean;
    locale: DatepickerLocales;
    dayPickerProps?: CalendarDayPickerProps;
    setFocusOnDateWhenOpened?: boolean;
}

export type NavigationFocusElement = 'nextMonth' | 'previousMonth' | 'year' | 'month';

const getDateFnsLocaleFromLocale = (locale: DatepickerLocales = 'nb') => {
    switch (locale) {
        case 'nn':
            return nn;
        case 'en-GB':
            return enGB;
        default:
            return nb;
    }
};

const Calendar = React.forwardRef(function Calendar(props: Props, ref: React.Ref<HTMLDivElement>) {
    const [displayMonth, setDisplayMonth] = useState<Date>(props.month);

    const {
        dateString,
        minDateString,
        maxDateString,
        showWeekNumber,
        unavailableDates,
        showYearSelector,
        allowInvalidDateSelection,
        locale,
        onClose,
        onSelect,
        setFocusOnDateWhenOpened,
        dayPickerProps,
    } = props;

    const onSelectDate = (date: Date, modifiers: DayModifiers) => {
        if (allowInvalidDateSelection || !modifiers.disabled) {
            onSelect(dateToISODateString(date));
        }
    };

    const onChangeMonth = (month: Date, focusElement?: NavigationFocusElement) => {
        setDisplayMonth(month);
        if (ref) {
            const calendar = (ref as MutableRefObject<HTMLElement>).current;
            if (focusElement) {
                setTimeout(() => {
                    setFocusOnCalendarMonth(calendar, focusElement);
                });
            }
        }
        if (dayPickerProps?.onMonthChange) {
            dayPickerProps?.onMonthChange(month);
        }
    };

    const calendarRef = useRef<any>();
    useEffect(() => {
        if (setFocusOnDateWhenOpened && calendarRef.current) {
            setInitialDayFocus(calendarRef.current);
        }
    }, [calendarRef, setFocusOnDateWhenOpened]);

    return (
        <div ref={ref} role="dialog" aria-label="Kalender" className="ds-datepicker__kalender">
            <DomEventContainer
                onKeyDown={(evt) => {
                    if (evt.key === 'Tab' && evt.target) {
                        const className: string = (evt.target as any).className || '';
                        if (className.indexOf('DayPicker-Day') >= 0) {
                            if (evt.shiftKey === false) {
                                setFocusOnFirstElementInDayPickerCaption(calendarRef.current);
                            } else {
                                setFocusOnLastElementInDayPickerCaption(calendarRef.current);
                            }
                            evt.stopPropagation();
                            evt.preventDefault();
                        }
                    }
                }}>
                <div ref={calendarRef}>
                    <FocusTrap
                        active={true}
                        focusTrapOptions={{
                            clickOutsideDeactivates: true,
                            onDeactivate: onClose,
                            fallbackFocus: 'body',
                        }}>
                        <div>
                            <DayPicker
                                mode="single"
                                onSelect={(_date, selectedDate, modifiers) => {
                                    onSelectDate(selectedDate, modifiers);
                                }}
                                initialFocus={true}
                                fromMonth={minDateString ? ISODateStringToUTCDate(minDateString) : undefined}
                                toMonth={maxDateString ? ISODateStringToUTCDate(maxDateString) : undefined}
                                selected={dateString ? ISODateStringToUTCDate(dateString) : undefined}
                                onMonthChange={onChangeMonth}
                                disabled={unavailableDates}
                                month={displayMonth}
                                locale={getDateFnsLocaleFromLocale(locale)}
                                captionLayout={showYearSelector ? 'dropdown' : 'buttons'}
                                showWeekNumber={showWeekNumber}
                                weekStartsOn={1}
                                labels={{
                                    labelYearDropdown: () => 'År',
                                    labelMonthDropdown: () => 'Måned',
                                }}
                                {...dayPickerProps}
                            />
                        </div>
                    </FocusTrap>
                </div>
            </DomEventContainer>
        </div>
    );
});
export default Calendar;
