import { FormFieldProps } from '@navikt/ds-react/esm/form/useFormField';
import React from 'react';
import { DefaultTexts } from '../defaultTexts';
import CalendarIcon from './CalendarIcon';

export interface Props extends Pick<FormFieldProps, 'size'> {
    onClick: () => void;
    disabled?: boolean;
    isOpen: boolean;
    /** sr-only label */
    label?: string;
}

class CalendarButton extends React.Component<Props> {
    button: HTMLButtonElement | null = null;
    focus() {
        if (this.button) {
            this.button.focus();
        }
    }
    render() {
        const { onClick, isOpen, disabled, label: label, size = 'medium' } = this.props;
        return (
            <button
                ref={(c) => (this.button = c)}
                type="button"
                className={`ds-datepicker__calendarButton ds-datepicker__calendarButton--${size}`}
                onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onClick();
                }}
                disabled={disabled}
                aria-expanded={isOpen}>
                <span className="sr-only">{label || DefaultTexts.calendarLabel}</span>
                <span aria-hidden={true} className="ds-datepicker__calendarButton__icon">
                    <CalendarIcon />
                </span>
            </button>
        );
    }
}
export default CalendarButton;
