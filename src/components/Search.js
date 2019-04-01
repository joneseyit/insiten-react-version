import React from 'react'
import { Icon } from 'semantic-ui-react'

const Search = (props) => {
    return(
        <div className="ui icon input">
            <Icon name='search'/>
            <input
                type='text'
                placeholder='Search by company name'
                onChange={(e) => props.handleSearchChange(e)}
            />
        </div>
    )
}

export default Search
