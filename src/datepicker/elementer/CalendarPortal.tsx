import React from 'react';
import classnames from 'classnames';
import { CalendarPlacement } from '../types';

interface Props {
    position?: CalendarPlacement;
}

const CalendarPortal: React.FunctionComponent<Props> = ({ children, position = 'responsive' }) => {
    return (
        <div className={classnames('ds-datepicker__calendarPortal', `ds-datepicker__calendarPortal--${position}`)}>
            <div className="ds-datepicker__calendarPortal__content">{children}</div>
        </div>
    );
};

export default CalendarPortal;
