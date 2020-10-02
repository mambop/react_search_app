import React, { useState } from 'react'

const Search = (e) => {
   const [value, setValue] = useState('');

    const handleChange = (e) => {
    setValue(e.target.value);
    }

    return (
        <div>
            <form>
                <input type="text" onChange={handleChange} placeholder="Search....." />
            </form>
            <h5>{value}</h5>
        </div>
    )
}

export default Search;


