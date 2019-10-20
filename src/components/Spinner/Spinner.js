import React from 'react';

import './Spinner.css';

const Spinner = ({ where }) => {

    let spinnerStyle = 'spinner container relative spinner-home';
    // if (where === 'ev-card') {
    //     spinnerStyle = 'container relative spinner-ev-card';
    // }

    return <div className={spinnerStyle} />
}

export default Spinner;