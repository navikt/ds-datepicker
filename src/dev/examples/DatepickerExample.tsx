import { Button, Checkbox } from '@navikt/ds-react';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import Datepicker, { DatepickerValue } from '../../datepicker/Datepicker';
import { DatepickerDateRange, DatepickerLocales } from '../../datepicker/types';
import { isISODateString } from '../../datepicker/types/typeGuards';
import { ISODateStringToUTCDate } from '../../datepicker/utils/dateFormatUtils';
import Box from '../components/box/Box';
import { holidays } from '../utils/holidays';

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

const DatepickerExample: React.FunctionComponent = () => {
    const [date, setDate] = useState<DatepickerValue>('');
    const [showYearSelector, setShowYearSelector] = useState<boolean>(false);
    const [showWeekNumbers, setShowWeekNumbers] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [showPublicHolidays, setShowPublicHolidays] = useState<boolean>(true);
    const [initialMonth, setInitialMonth] = useState<Date | undefined>();
    const [locale, setLocale] = useState<DatepickerLocales>('nb');

    const [minDate, setMinDate] = useState<DatepickerValue>('2000-04-03');
    const [maxDate, setMaxDate] = useState<DatepickerValue>('2025-12-12');
    const [allowNavigatingToDisabledMonths, setAllowNavigatingToDisabledMonths] = useState(false);

    const takenRange: DatepickerDateRange = {
        from: '2021-04-10',
        to: '2021-04-11',
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
                    onChange={setDate}
                    inputName="dateInput"
                    error={isInvalid ? 'Invalid date' : undefined}
                    disabled={disabled}
                    setFocusOnDateWhenOpened={true}
                    locale={locale}
                    calendarSettings={{ showWeekNumbers }}
                    showYearSelector={showYearSelector}
                    calendarDateStringFilter={(value) => {
                        if (isValidFormattedDateString(value)) {
                            return value;
                        }
                        // Date is not valid, open calendar with no date specified
                        return undefined;
                    }}
                    limitations={{
                        weekendsNotSelectable: false,
                        invalidDateRanges: [takenRange],
                        minDate: minDate.length > 0 ? minDate : undefined,
                        maxDate: maxDate.length > 0 ? maxDate : undefined,
                        disabledDaysOfWeek: { daysOfWeek: [1, 2] },
                    }}
                    dayPickerProps={{
                        initialMonth,
                        modifiers: showPublicHolidays ? { isPublicHoliday } : undefined,
                        onMonthChange: (month) => {
                            console.log(month);
                        },
                    }}
                    allowNavigationToDisabledMonths={allowNavigatingToDisabledMonths}
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
                    Initial month: {initialMonth ? renderDate(dayjs(initialMonth).format('YYYY-MM-DD')) : undefined}
                </Box>
                <Box margin="m">
                    <Button variant="secondary" size="small" onClick={() => setInitialMonth(new Date())}>
                        Choose this month
                    </Button>
                    -
                    <Button variant="secondary" size="small" onClick={() => setInitialMonth(undefined)}>
                        Undefined
                    </Button>
                    -
                    <Button variant="secondary" size="small" onClick={() => setInitialMonth(new Date(2020, 0, 1))}>
                        2020.01.01
                    </Button>
                </Box>

                <Box margin="xl">Locale: {locale}</Box>
                <Box margin="m">
                    <Button variant="secondary" size="small" onClick={() => setLocale('nb')}>
                        nb
                    </Button>
                    -
                    <Button variant="secondary" size="small" onClick={() => setLocale('nn')}>
                        nn
                    </Button>
                    -
                    <Button variant="secondary" size="small" onClick={() => setLocale('en')}>
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
                            value={minDate}
                        />
                    </div>
                    {' - '}
                    <div style={{ display: 'inline-block' }}>
                        <Datepicker
                            // id={'date-range-to'}
                            size="small"
                            label="Last pickable date"
                            inputName="date-range-to"
                            onChange={(e) => setMaxDate(e)}
                            value={maxDate}
                        />
                    </div>
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
                                <Checkbox
                                    checked={showWeekNumbers}
                                    onChange={() => setShowWeekNumbers(!showWeekNumbers)}>
                                    <div>
                                        <div>
                                            <code>calendarSettings.showWeekNumbers</code>
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
                            <Box margin={'l'}>
                                <Checkbox
                                    checked={allowNavigatingToDisabledMonths}
                                    onChange={(event) => setAllowNavigatingToDisabledMonths(event.target.checked)}>
                                    <div>
                                        <div>
                                            <code>allowNavigationToDisabledMonths</code>
                                        </div>
                                        Allow navigating outside restricted range
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
