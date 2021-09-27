import React, { useState } from 'react';
import './topfold.css';

const Topfold = () => {
    const [search, setSearch] = useState('');
    const handleSerach =(e) => {
        setSearch(e.target.value);
    }

    return (
        <div className='topfold'>
            {window.location.pathname === '/' ? (
            <div className='home-topfold'>
            <div className='searchbar'>
                <i>(logo)</i>
                <input 
                placeholder='Search for expense'
                value={search}
                onChange={(e) => handleSerach(e)}
                />
            </div>

            <div className='add-button'>
                <i>(logo)</i>
                <label>Add</label>
            </div>
            </div> ) : ( 
            <div className='add-topfold'>
                <div className='add-button-topfold'>
                    <i>logo</i>
                    <label>Back</label>
                </div>
                <div className='add-button-topfold'>
                    <i>logo</i>
                    <label>Cancel</label>
                </div>
            </div>
            )}
            
        </div>
    )
}

export default Topfold;
