import { Button } from '@navikt/ds-react';
import React from 'react';
import { LocaleUtils } from 'react-day-picker';
import classnames from 'classnames';
import dayjs from 'dayjs';
import { DefaultTexts } from '../defaultTexts';
import Chevron from '../elementer/ChevronSvg';
import { DatepickerLocales } from '../types';
import { NavigationFocusElement } from './Calendar';
import YearSelector from './YearSelector';

type Direction = 'previousMonth' | 'nextMonth';

interface Props {
    defaultMonth: Date;
    onChangeMonth: (month: Date, focusElement: NavigationFocusElement) => void;
    onChangeYear?: (month: Date) => void;
    minDate?: Date;
    maxDate?: Date;
    showYearSelector?: boolean;
    localeUtils: LocaleUtils;
    allowNavigationToDisabledMonths: boolean;
    locale: DatepickerLocales;
    nextMonthLabel?: string;
    prevMonthLabel?: string;
}

interface NavbarButtonProps {
    month: Date;
    ariaLabel: string;
    direction: Direction;
    disabled: boolean;
    onClick: (evt: any, måned: Date, focusElement: NavigationFocusElement) => void;
}

class NavbarButton extends React.Component<NavbarButtonProps> {
    render() {
        const { month, direction, disabled, ariaLabel, onClick } = this.props;
        return (
            <Button
                type="button"
                size="small"
                variant="tertiary"
                id={`kalender-navbarknapp-${direction}`}
                className={classnames('ds-datepicker__navbar__knapp', `ds-datepicker__navbar__knapp--${direction}`, {
                    'ds-datepicker__navbar__knapp--disabled': disabled,
                })}
                onClick={(e) => (disabled ? null : onClick(e, month, direction))}
                aria-label={ariaLabel}
                aria-disabled={disabled}>
                <Chevron direction={direction === 'previousMonth' ? 'venstre' : 'høyre'} />
            </Button>
        );
    }
}

const createCaption = (props: Props) => props.localeUtils.formatMonthTitle(props.defaultMonth);

class Navbar extends React.Component<Props> {
    shouldComponentUpdate(nextProps: any) {
        return createCaption(nextProps) !== createCaption(this.props);
    }

    render() {
        const {
            defaultMonth,
            onChangeMonth,
            minDate,
            maxDate,
            showYearSelector,
            localeUtils,
            allowNavigationToDisabledMonths,
            locale,
            nextMonthLabel,
            prevMonthLabel,
        } = this.props;

        const previousMonth = dayjs(defaultMonth).subtract(1, 'month');
        const nextMonth = dayjs(defaultMonth).add(1, 'month');

        const lastMonthIsDisabled =
            !allowNavigationToDisabledMonths && minDate ? dayjs(minDate).isAfter(previousMonth.endOf('month')) : false;
        const nextMonthIsDisabled =
            !allowNavigationToDisabledMonths && maxDate ? dayjs(maxDate).isBefore(nextMonth.startOf('month')) : false;

        const onClick = (
            evt: React.MouseEvent<HTMLButtonElement>,
            month: Date,
            focusElement: NavigationFocusElement
        ) => {
            evt.preventDefault();
            evt.stopPropagation();
            onChangeMonth(month, focusElement);
        };

        return (
            <div className="DayPicker-Caption">
                <span aria-live="assertive" className={showYearSelector ? 'sr-only' : ''}>
                    {createCaption(this.props)}
                </span>
                {showYearSelector && (
                    <div className="ds-datepicker__navbar__yearSelector">
                        <YearSelector
                            defaultMonth={defaultMonth}
                            maxDate={maxDate}
                            minDate={minDate}
                            localeUtils={localeUtils}
                            onChange={(month, focusElement) => onChangeMonth(month, focusElement)}
                            locale={locale}
                        />
                    </div>
                )}
                <nav
                    className={`ds-datepicker__navbar ${
                        showYearSelector ? 'ds-datepicker__navbar--withYearSelector' : ''
                    }`}>
                    <NavbarButton
                        month={previousMonth.toDate()}
                        direction={'previousMonth'}
                        disabled={lastMonthIsDisabled}
                        ariaLabel={prevMonthLabel || DefaultTexts.navbarPreviousMonthLabel}
                        onClick={(evt, month) => onClick(evt, month, 'previousMonth')}
                    />
                    <NavbarButton
                        month={nextMonth.toDate()}
                        direction={'nextMonth'}
                        disabled={nextMonthIsDisabled}
                        ariaLabel={nextMonthLabel || DefaultTexts.navBarNextMonthLabel}
                        onClick={(evt, month) => onClick(evt, month, 'nextMonth')}
                    />
                </nav>
            </div>
        );
    }
}

export default Navbar;
