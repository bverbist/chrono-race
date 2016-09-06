import React from 'react';
import {getCurrentYear} from '../util/dateUtil';

const INITIAL_YEAR = 2016;

const Footer = () => (
    <div className="container">
        <hr />

        <footer>
            <p>&copy; {INITIAL_YEAR}{getCurrentYearSuffixIfNotInitialYear()} Bereidwillige Yak</p>
        </footer>
    </div>
);

export default Footer;

function getCurrentYearSuffixIfNotInitialYear() {
    const currentYear = getCurrentYear();
    return (currentYear !== INITIAL_YEAR) ? `-${currentYear}` : '';
}
