import React from 'react';
import classnames from 'classnames';
import { CalendarPlacement } from '../types';

interface Props {
    position?: CalendarPlacement;
}

const CalendarPortal: React.FunctionComponent<Props> = ({ children, position = 'responsive' }) => {
    return (
        <div className={classnames('ds-datepicker__kalenderPortal', `ds-datepicker__kalenderPortal--${position}`)}>
            <div className="ds-datepicker__kalenderPortal__content">{children}</div>
        </div>
    );
};

export default CalendarPortal;
