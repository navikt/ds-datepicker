# Denne er ikke lenger vedlikehold. Bruk heller DatePicker som kommer fra Aksel.
https://aksel.nav.no/komponenter/core/datepicker

# @navikt/ds-datepicker

Simple datepicker basert på react-day-picker
https://www.npmjs.com/package/react-day-picker

Denne er portet fra [nav.no](https://github.com/navikt/datovelger). Endringer i navikt/datovelger
blir ikke automatisk oppdatert her.

# Use

```javascript
import '@navikt/ds-datepicker/lib/index.css';

import { Datepicker, isISODateString } from '@navikt/ds-datepicker';

const BasicDatepicker = () => {
    const [date, setDate] = useState('');
    return <Datepicker onChange={setDato} value={date} />;
};

const AdvancedDatePicker = () => {
    const [date, setDate] = useState<string>;

    return (
        <Datepicker
            locale={'nb'}
            id="datepicker-input"
            label="Oppgi dato"
            value={date}
            inputName="inputName"
            onChange={setDate}
            error="En feilmelding"
            disabled={false}
            inputProps={{
                name: 'dateInput',
                'aria-invalid': date !== '' && isISODateString(date) === false,
            }}
            calendarSettings={{ showWeekNumbers: true }}
            showYearSelector={true}
            limitations={{
                weekendsNotSelectable: false,
                invalidDateRanges: [
                    {
                        from: '2020-04-10',
                        to: '2020-04-11',
                    },
                ],
                minDate: '2000-04-03',
                maxDate: '2020-12-12',
            }}
        />
    );
};
```

# Storybook

Starter storybook med enkelt eksempel som viser noe av funksjonaliteten

```
npm run storybook
```
