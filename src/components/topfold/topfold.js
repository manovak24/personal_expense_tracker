import React, { useState } from 'react';
import './topfold.css';

const Topfold = () => {
    const [search, setSearch] = useState('');
    const handleSerach =(e) => {
        setSearch(e.target.value);
    }

    return (
        <div className='topfold'>
            <div className='home-topfold'>
                <div className='searchbar'>
                    <p>add search logo</p>
                    <input 
                    placeholder='Search for expense'
                    value={search}
                    onChange={(e) => handleSerach(e)}
                    />
                </div>

                <div className='add-button'>
                    <p>add an add button</p>
                    <label>Add</label>
                </div>
            </div>
        </div>
    )
}

export default Topfold;
