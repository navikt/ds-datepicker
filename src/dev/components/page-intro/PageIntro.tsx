import { Heading, Ingress } from '@navikt/ds-react';
import React from 'react';
import Box from '../box/Box';

interface Props {
    title: string;
    children: React.ReactNode;
}

const PageIntro: React.FunctionComponent<Props> = ({ title, children }: Props) => (
    <>
        <Box margin="m">
            <Box>
                <Heading size="medium" level="2">
                    {title}
                </Heading>
            </Box>
            {children && (
                <Box padBottom="xl">
                    <Ingress as="div">{children}</Ingress>
                </Box>
            )}
        </Box>
    </>
);

export default PageIntro;
