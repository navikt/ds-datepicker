import React from 'react';
import Box from './components/box/Box';
import PageIntro from './components/page-intro/PageIntro';
import DatepickerExample from './examples/DatepickerExample';
import { Link, Ingress } from '@navikt/ds-react';

const Intro: React.FunctionComponent = () => (
    <>
        <PageIntro title="ds-datepicker">
            <h2>Simple datepicker based on react-day-picker</h2>
            <p>
                <Link href="https://github.com/navikt/ds-datepicker">GitHub repository</Link>
            </p>
        </PageIntro>
        <Ingress style={{ marginBottom: '.5rem' }}>Example:</Ingress>
        <Box>
            <DatepickerExample />
        </Box>
    </>
);

export default Intro;
