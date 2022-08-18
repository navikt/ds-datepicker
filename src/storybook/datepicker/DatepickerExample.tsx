import { Button, Checkbox } from '@navikt/ds-react';
import React, { useState } from 'react';
import en from 'date-fns/locale/en-GB';
import nb from 'date-fns/locale/nb';
import nn from 'date-fns/locale/nn';
import dayjs from 'dayjs';
import Datepicker, { DatepickerValue } from '../../datepicker/Datepicker';
import { DatepickerDateRange, DatepickerLocales } from '../../datepicker/types';
import { isISODateString } from '../../datepicker/types/typeGuards';
import { dateToISODateString, ISODateStringToUTCDate } from '../../datepicker/utils/dateFormatUtils';
import Box from '../components/box/Box';
import { holidays } from '../utils/holidays';

const renderDate = (dateString = ''): string => {
    if (dateString === '') {
        return '';
    }
    const date = ISODateStringToUTCDate(dateString);
    return date ? dayjs(date).format('DD.MM.YYYY') : 'invalid date';
};

const isPublicHoliday = (d: Date): boolean => holidays.some((d2) => dayjs(d2.date).isSame(d, 'day'));

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
    const [locale, setLocale] = useState<Locale>(nb);
    const [disabledDaysOfWeek, setDisabledDaysOfWeek] = useState<number[]>([]);
    const [disableWeekend, setDisableWeekend] = useState<boolean>(true);

    const [minDate, setMinDate] = useState<DatepickerValue>(minMaxRange.minDate);
    const [maxDate, setMaxDate] = useState<DatepickerValue>(minMaxRange.maxDate);

    const takenRange: DatepickerDateRange = {
        from: '2022-04-10',
        to: '2022-04-21',
    };

    const isValidFormattedDateString = (dateString = ''): boolean => {
        return /\d{1,2}.\d{1,2}.(\d{2}|\d{4})$/.test(dateString);
    };

    const updateDisabledDaysOfWeek = (dayOfWeek: number, disabled: boolean) => {
        const weekdays = disabledDaysOfWeek.filter((d) => d !== dayOfWeek);
        if (disabled) {
            weekdays.push(dayOfWeek);
        }
        setDisabledDaysOfWeek(weekdays);
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
                        setDate(d);
                    }}
                    inputName="dateInput"
                    error={isInvalid ? 'Invalid date' : undefined}
                    disabled={disabled}
                    setFocusOnDateWhenOpened={true}
                    locale={locale.code as DatepickerLocales}
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
                        weekendsNotSelectable: disableWeekend,
                        invalidDateRanges: [takenRange],
                        minDate: minDate.length > 0 ? minDate : undefined,
                        maxDate: maxDate.length > 0 ? maxDate : undefined,
                        disabledDaysOfWeek: { dayOfWeek: disabledDaysOfWeek },
                    }}
                    dayPickerProps={{
                        defaultMonth,
                        modifiers: showPublicHolidays ? { isPublicHoliday } : undefined,
                        modifiersClassNames: { isPublicHoliday: 'rdp-day_publicHoliday' },
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

                <Box margin="xl">Restrictions</Box>
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
                </Box>
                <Box margin="xl">
                    <fieldset>
                        <legend>Disabled weekends</legend>
                        <Checkbox checked={disableWeekend} onChange={(evt) => setDisableWeekend(evt.target.checked)}>
                            Disable weekend
                        </Checkbox>
                    </fieldset>
                </Box>
                <Box margin="xl">
                    <fieldset>
                        <legend>Disabled weekdays</legend>
                        <Checkbox
                            checked={disabledDaysOfWeek.includes(1)}
                            onChange={(evt) => updateDisabledDaysOfWeek(1, evt.target.checked)}>
                            Monday
                        </Checkbox>
                        <Checkbox
                            checked={disabledDaysOfWeek.includes(2)}
                            onChange={(evt) => updateDisabledDaysOfWeek(2, evt.target.checked)}>
                            Tuesday
                        </Checkbox>
                        <Checkbox
                            checked={disabledDaysOfWeek.includes(3)}
                            onChange={(evt) => updateDisabledDaysOfWeek(3, evt.target.checked)}>
                            Wednesday
                        </Checkbox>
                        <Checkbox
                            checked={disabledDaysOfWeek.includes(4)}
                            onChange={(evt) => updateDisabledDaysOfWeek(4, evt.target.checked)}>
                            Thursday
                        </Checkbox>
                        <Checkbox
                            checked={disabledDaysOfWeek.includes(5)}
                            onChange={(evt) => updateDisabledDaysOfWeek(5, evt.target.checked)}>
                            Friday
                        </Checkbox>
                        <Checkbox
                            checked={disabledDaysOfWeek.includes(6)}
                            onChange={(evt) => updateDisabledDaysOfWeek(6, evt.target.checked)}>
                            Saturday
                        </Checkbox>
                        <Checkbox
                            checked={disabledDaysOfWeek.includes(7)}
                            onChange={(evt) => updateDisabledDaysOfWeek(7, evt.target.checked)}>
                            Sunday
                        </Checkbox>
                    </fieldset>
                </Box>
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
