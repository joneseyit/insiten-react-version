import React from 'react'

const Search = (props) => {
    return(
        <div className="ui icon input">
            <input
                type='text'
                placeholder='Search by company name'
                onChange={(e) => props.handleSearchChange(e)}
            />
        </div>
    )
}

export default Search