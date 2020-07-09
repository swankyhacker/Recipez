import React from 'react';
import '../App.css';

function Navbar(props) {
    return (
        <div className='nav-bar'>

            <div className='app-name'>
                <h1>Recipez</h1>
            </div>

            <div className='app-form'>
                <form className='search-form' onSubmit={props.updateQuery}>
                    <input className='itemName' type='text' onChange={props.updateSearchItem} />
                    <button className='search-button' type='submit'>Search</button>
                </form>
            </div>

        </div>
    );
}

export default Navbar;