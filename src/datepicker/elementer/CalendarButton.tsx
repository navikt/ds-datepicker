import { FormFieldProps } from '@navikt/ds-react/esm/form/useFormField';
import React from 'react';
import bemUtils from '../../dev/utils/bemUtils';
import { Texts } from '../texts';
import CalendarIcon from './CalendarIcon';

export interface Props extends Pick<FormFieldProps, 'size'> {
    onClick: () => void;
    disabled?: boolean;
    isOpen: boolean;
}

const bem = bemUtils('ds-datepicker__calendarButton');

class CalendarButton extends React.Component<Props> {
    button: HTMLButtonElement | null = null;
    focus() {
        if (this.button) {
            this.button.focus();
        }
    }
    render() {
        const { onClick, isOpen, disabled, size = 'medium' } = this.props;
        return (
            <button
                ref={(c) => (this.button = c)}
                type="button"
                className={bem.classNames(bem.block, bem.modifier(size))}
                onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onClick();
                }}
                disabled={disabled}
                aria-expanded={isOpen}>
                <span className="sr-only">{Texts.calendarLabel}</span>
                <span aria-hidden={true} className="ds-datepicker__calendarButton__icon">
                    <CalendarIcon />
                </span>
            </button>
        );
    }
}
export default CalendarButton;
