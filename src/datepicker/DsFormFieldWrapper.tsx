import { BodyShort, Detail, ErrorMessage, Label, TextFieldProps } from '@navikt/ds-react';
import { FormFieldProps } from '@navikt/ds-react/esm/form/useFormField';
import { useFormField } from '@navikt/ds-react/cjs/form/useFormField';
import React from 'react';
import classnames from 'classnames';

export interface DsFormFieldWrapperProps extends FormFieldProps, Pick<TextFieldProps, 'label' | 'hideLabel'> {
    /**
     * Content
     */
    children: React.ReactNode;
    /**
     * FormFieldProps
     */
    formFieldProps: ReturnType<typeof useFormField>;
}

export const DsFormFieldWrapper = (props: DsFormFieldWrapperProps) => {
    const { inputProps, errorId, showErrorMsg, hasError, size, inputDescriptionId } = props.formFieldProps;
    const { label, description, hideLabel = false, children, error } = props;

    return (
        <div
            className={classnames('navds-form-field', `navds-form-field--${size}`, {
                'navds-text-field--error': hasError,
                'navds-text-field--disabled': !!inputProps.disabled,
                'navds-form-field--disabled': !!inputProps.disabled,
            })}>
            <Label
                htmlFor={inputProps.id}
                size={size}
                as="label"
                className={classnames('navds-form-field__label', {
                    'navds-sr-only': hideLabel,
                })}>
                {label}
            </Label>

            {!!description && (
                <>
                    {size === 'medium' ? (
                        <BodyShort
                            className={classnames('navds-form-field__description', {
                                'navds-sr-only': hideLabel,
                            })}
                            id={inputDescriptionId}
                            size="small"
                            as="div">
                            {description}
                        </BodyShort>
                    ) : (
                        <Detail
                            className={classnames('navds-form-field__description', {
                                'navds-sr-only': hideLabel,
                            })}
                            id={inputDescriptionId}
                            size="small"
                            as="div">
                            {description}
                        </Detail>
                    )}
                </>
            )}
            {children}
            <div className="navds-form-field__error" id={errorId} aria-relevant="additions removals" aria-live="polite">
                {showErrorMsg && <ErrorMessage size={size}>{error}</ErrorMessage>}
            </div>
        </div>
    );
};

export default DsFormFieldWrapper;
