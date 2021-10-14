import React from 'react';
import { Texts } from '../texts';
import CalendarIcon from './CalendarIcon';

export interface Props {
    onClick: () => void;
    disabled?: boolean;
    isOpen: boolean;
}

class CalendarButton extends React.Component<Props> {
    button: HTMLButtonElement | null = null;
    focus() {
        if (this.button) {
            this.button.focus();
        }
    }
    render() {
        const { onClick, isOpen, disabled } = this.props;

        return (
            <button
                ref={(c) => (this.button = c)}
                type="button"
                className="ds-datepicker__kalenderknapp"
                onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onClick();
                }}
                disabled={disabled}
                aria-expanded={isOpen}>
                <span className="sr-only">{Texts.calendarLabel}</span>
                <span aria-hidden={true} className="ds-datepicker__kalenderknapp__icon">
                    <CalendarIcon />
                </span>
            </button>
        );
    }
}
export default CalendarButton;
