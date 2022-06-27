import React from 'react';
import Box from './components/box/Box';
import PageIntro from './components/page-intro/PageIntro';
import DatepickerExample from '../storybook/datepicker/DatepickerExample';
import { Link, Alert, Ingress } from '@navikt/ds-react';

const Intro: React.FunctionComponent = () => (
    <>
        <PageIntro title="ds-datepicker">
            <h2>Datepicker based on react-day-picker</h2>
            <Ingress>Combines the setup from @navikt/ds-react and react-day-picker.</Ingress>
            <p>
                <Link href="https://github.com/navikt/ds-datepicker">GitHub repository</Link>
            </p>
        </PageIntro>
        <Alert variant="info">
            From version 3, the datepicker is merged more with @navikt/ds-react, so it now includes label, description
            and errors.
        </Alert>
        <Box margin="xl">
            <DatepickerExample />
        </Box>
    </>
);

export default Intro;
