// import { DaysOfWeekModifier } from 'react-day-picker';
import { Locale } from 'date-fns';

import { Matcher } from 'react-day-picker';

/** YYYY-MM-DD */
export type ISODateString = string;

/** DD-MM-YYYY */
export type InputDateString = string;

/** Type used when input date is invalid  */
export type INVALID_DATE_TYPE = 'Invalid date';

export interface DatepickerDateRange {
    from: ISODateString;
    to: ISODateString;
}

export interface DatepickerLimitations {
    minDate?: ISODateString;
    maxDate?: ISODateString;
    invalidDateRanges?: DatepickerDateRange[];
    weekendsNotSelectable?: boolean;
    disabledDaysOfWeek?: Matcher;
}

export type DatepickerLocales = Locale;

export type CalendarPlacement = 'under' | 'fullscreen' | '' | 'responsive';

export interface CalendarTexts {
    calendarLabel: string;
    navBarNextMonthLabel: string;
    navbarPreviousMonthLabel: string;
}
