import React from 'react';
import '@navikt/ds-css';
import '../../datepicker/styles/datepicker.less';

interface Props {
    children?: React.ReactNode;
}

const StoryDecorator = ({ children }: Props) => <>{children}</>;

export default StoryDecorator;
