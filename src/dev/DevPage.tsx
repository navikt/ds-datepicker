import { Heading } from '@navikt/ds-react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NAVLogo from './components/svg/NAVLogo';
import DevContent from './DevContent';
import './styles/dev.less';

const DevPage: React.FunctionComponent = () => {
    return (
        <main className="devPage">
            <header className="header">
                <span className="navLogo">
                    <NAVLogo />
                </span>
                <span className="header__title">
                    <Heading level="1" size="large">
                        ds-datepicker
                    </Heading>
                </span>
            </header>
            <div className="contentWrapper">
                <BrowserRouter>
                    <DevContent />
                </BrowserRouter>
            </div>
        </main>
    );
};

export default DevPage;
