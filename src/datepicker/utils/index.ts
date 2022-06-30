import { DayPickerProps, Matcher } from 'react-day-picker';
import dayjs from 'dayjs';
import { DatepickerLimitations } from '../types';
import { INPUT_DATE_STRING_FORMAT, ISO_DATE_STRING_FORMAT, ISODateStringToUTCDate } from './dateFormatUtils';

export const dayDateKey = (date: Date) => dayjs(date).format(INPUT_DATE_STRING_FORMAT);

export const getInvalidDates = (limitations: DatepickerLimitations): Matcher[] => {
    const invalidDates: Matcher[] = [];
    if (limitations.invalidDateRanges) {
        limitations.invalidDateRanges.forEach((t) => {
            const from = ISODateStringToUTCDate(t.from);
            const to = ISODateStringToUTCDate(t.to);
            if (from && to) {
                invalidDates.push({
                    from,
                    to,
                });
            }
        });
    }
    const minDate = limitations.minDate;
    const maxDate = limitations.maxDate;
    const disabledWeekdays: Matcher = {
        dayOfWeek: [
            ...(limitations.weekendsNotSelectable ? [0, 6] : []),
            // ...(limitations.disabledDaysOfWeek?.dayOfWeek || []),
        ],
    };
    return [
        ...invalidDates,
        ...(maxDate ? [{ after: dayjs(maxDate, ISO_DATE_STRING_FORMAT).toDate() } as Matcher] : []),
        ...(minDate ? [{ before: dayjs(minDate, ISO_DATE_STRING_FORMAT).toDate() } as Matcher] : []),
        ...[disabledWeekdays],
    ];
};

export const isSameDate = (d1: Date, d2: Date) => {
    return dayjs(d1).isSame(d2, 'day');
};

export const getDefaultMonth = (
    dateString: string | undefined,
    limitations: DatepickerLimitations | undefined,
    dayPickerProps: DayPickerProps | undefined
): Date => {
    const d = dayjs(dateString).utc(true).format(ISO_DATE_STRING_FORMAT);
    if (dateString && dayjs(d).isValid()) {
        return dayjs(d).toDate();
    }
    if (dayPickerProps && dayPickerProps.defaultMonth) {
        return dayPickerProps.defaultMonth;
    }
    const today = dayjs().toDate();
    if (limitations && limitations.minDate) {
        return dayjs(limitations.minDate).isAfter(today)
            ? dayjs(limitations.minDate, ISO_DATE_STRING_FORMAT).toDate()
            : today;
    }
    return today;
};
