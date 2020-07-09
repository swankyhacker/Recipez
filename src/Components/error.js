import React from 'react';
import '../App.css';

function Error() {
    return (
        <div className='error-message'>
            <h2>No results were found</h2>
            <p> Check your spellings or try different keywords to get appropriate results</p>
        </div>
    );
}

export default Error;