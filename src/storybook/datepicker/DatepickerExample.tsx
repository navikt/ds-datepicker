import { Button, Checkbox } from '@navikt/ds-react';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import Datepicker, { DatepickerValue } from '../../datepicker/Datepicker';
import { DatepickerDateRange, DatepickerLocales } from '../../datepicker/types';
import { isISODateString } from '../../datepicker/types/typeGuards';
import {
    dateToISODateString,
    InputDateStringToISODateString,
    InputDateStringToUTCDate,
    ISODateStringToUTCDate,
} from '../../datepicker/utils/dateFormatUtils';
import Box from '../components/box/Box';
import { holidays } from '../utils/holidays';

import nb from 'date-fns/locale/nb';
import nn from 'date-fns/locale/nn';
import en from 'date-fns/locale/en-GB';

const renderDate = (dateString = ''): string => {
    if (dateString === '') {
        return '';
    }
    const date = ISODateStringToUTCDate(dateString);
    return date ? dayjs(date).format('DD.MM.YYYY') : 'invalid date';
};

const isPublicHoliday = (d: Date): boolean => {
    return holidays.some((d2) => dayjs(d2.date).isSame(d, 'day'));
};

const minMaxRange = {
    maxDate: dateToISODateString(dayjs().add(2, 'year').toDate()),
    minDate: dateToISODateString(dayjs().subtract(2, 'year').toDate()),
};

const DatepickerExample: React.FunctionComponent = () => {
    const [date, setDate] = useState<DatepickerValue>('');
    const [showYearSelector, setShowYearSelector] = useState<boolean>(true);
    const [showWeekNumber, setshowWeekNumber] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [showPublicHolidays, setShowPublicHolidays] = useState<boolean>(true);
    const [defaultMonth, setdefaultMonth] = useState<Date | undefined>();
    const [locale, setLocale] = useState<DatepickerLocales>(nb);

    const [minDate, setMinDate] = useState<DatepickerValue>(minMaxRange.minDate);
    const [maxDate, setMaxDate] = useState<DatepickerValue>(minMaxRange.maxDate);

    const takenRange: DatepickerDateRange = {
        from: '2022-04-10',
        to: '2022-04-21',
    };

    const isValidFormattedDateString = (dateString = ''): boolean => {
        return /\d{1,2}.\d{1,2}.(\d{2}|\d{4})$/.test(dateString);
    };

    const isInvalid = date !== '' && isISODateString(date) === false;

    return (
        <div>
            <Box margin="xl">
                <Datepicker
                    id="datovelger-input"
                    label="Choose a date"
                    value={date}
                    onChange={(d) => {
                        // console.log(d);
                        // console.log(ISODateStringToUTCDate(d));
                        setDate(d);
                    }}
                    inputName="dateInput"
                    error={isInvalid ? 'Invalid date' : undefined}
                    disabled={disabled}
                    setFocusOnDateWhenOpened={true}
                    locale={locale}
                    calendarSettings={{ showWeekNumber }}
                    showYearSelector={showYearSelector}
                    calendarDateStringFilter={(value) => {
                        if (isValidFormattedDateString(value)) {
                            return value;
                        }
                        // Date is not valid, open calendar with no date specified
                        return undefined;
                    }}
                    limitations={{
                        weekendsNotSelectable: true,
                        invalidDateRanges: [takenRange],
                        minDate: minDate.length > 0 ? minDate : undefined,
                        maxDate: maxDate.length > 0 ? maxDate : undefined,
                        disabledDaysOfWeek: { dayOfWeek: [1, 2] },
                    }}
                    dayPickerProps={{
                        defaultMonth,
                        modifiers: showPublicHolidays ? { isPublicHoliday } : undefined,
                        onMonthChange: (month) => {
                            console.log(month);
                        },
                    }}
                    texts={{
                        calendarLabel: 'Vis datovelger',
                    }}
                />
                <Box margin="l">Chosen date: {renderDate(date)}</Box>
                <Box margin="m">
                    <Button
                        variant="secondary"
                        size="small"
                        onClick={() => setDate(dayjs(new Date()).format('YYYY-MM-DD'))}>
                        Choose today
                    </Button>
                    -
                    <Button variant="secondary" size="small" onClick={() => setDate('')}>
                        Unselect date
                    </Button>
                    -
                    <Button variant="secondary" size="small" onClick={() => setDate('abc')}>
                        Set invalid formatted date
                    </Button>
                </Box>

                <Box margin="xl">
                    Initial month: {defaultMonth ? renderDate(dayjs(defaultMonth).format('YYYY-MM-DD')) : undefined}
                </Box>
                <Box margin="m">
                    <Button variant="secondary" size="small" onClick={() => setdefaultMonth(new Date())}>
                        Choose this month
                    </Button>
                    -
                    <Button variant="secondary" size="small" onClick={() => setdefaultMonth(undefined)}>
                        Undefined
                    </Button>
                    -
                    <Button variant="secondary" size="small" onClick={() => setdefaultMonth(new Date(2020, 0, 1))}>
                        2020.01.01
                    </Button>
                </Box>

                <Box margin="xl">Locale: {locale.code}</Box>
                <Box margin="m">
                    <Button variant="secondary" size="small" onClick={() => setLocale(nb)}>
                        nb
                    </Button>
                    -
                    <Button variant="secondary" size="small" onClick={() => setLocale(nn)}>
                        nn
                    </Button>
                    -
                    <Button variant="secondary" size="small" onClick={() => setLocale(en)}>
                        en
                    </Button>
                </Box>

                {/* <Box margin="xl">Restrictions</Box>
                <Box margin="m">
                    <div style={{ display: 'inline-block' }}>
                        <Datepicker
                            size="small"
                            inputName="date-range-from"
                            label="First pickable date"
                            onChange={(e) => setMinDate(e)}
                            limitations={minMaxRange}
                            value={minDate}
                            showYearSelector={true}
                        />
                    </div>
                    {' - '}
                    <div style={{ display: 'inline-block' }}>
                        <Datepicker
                            size="small"
                            label="Last pickable date"
                            inputName="date-range-to"
                            onChange={(e) => setMaxDate(e)}
                            value={maxDate}
                            limitations={minMaxRange}
                            showYearSelector={true}
                        />
                    </div>
                </Box> */}
                <Box margin="xl">
                    <fieldset>
                        <legend>Other properties</legend>
                        <div style={{ padding: '1rem' }}>
                            <Box margin="none">
                                <Checkbox
                                    checked={showYearSelector}
                                    onChange={() => setShowYearSelector(!showYearSelector)}>
                                    <div>
                                        <div>
                                            <code>showYearSelector</code>:
                                        </div>{' '}
                                        Show dropdowns for year and month
                                    </div>
                                </Checkbox>
                            </Box>
                            <Box margin="none">
                                <Checkbox checked={disabled} onChange={() => setDisabled(!disabled)}>
                                    <div>
                                        <div>
                                            <code>disabled</code>:
                                        </div>{' '}
                                        disable datepicker
                                    </div>
                                </Checkbox>
                            </Box>
                            <Box margin="l">
                                <Checkbox checked={showWeekNumber} onChange={() => setshowWeekNumber(!showWeekNumber)}>
                                    <div>
                                        <div>
                                            <code>calendarSettings.showWeekNumber</code>
                                        </div>
                                        Toggle visibility on week numbers in calendar view
                                    </div>
                                </Checkbox>
                            </Box>
                            <Box margin="l">
                                <Checkbox
                                    checked={showPublicHolidays}
                                    onChange={() => setShowPublicHolidays(!showPublicHolidays)}>
                                    <div>
                                        <div>
                                            <code>Custom - show holiday</code>
                                        </div>
                                        Possibility to highlight special days
                                    </div>
                                </Checkbox>
                            </Box>
                        </div>
                    </fieldset>
                </Box>
            </Box>
        </div>
    );
};
export default DatepickerExample;
