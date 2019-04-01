import React from 'react';
import { connect } from 'react-redux';
import { addSearchResults } from '../redux/actions';

class Search extends React.Component {
    state = {
        searchTerm: ''
    }
    
    handleSearchChange = (e) => {
        let searchTerm = e.target.value.toLowerCase()
        this.setState({ searchTerm: searchTerm })
        let searchResults = this.props.companies.filter( 
        company => company.name.toLowerCase().includes(searchTerm)
        )
        this.props.dispatch(addSearchResults(searchResults))
    };

    render(){
        return(
            <div className="ui icon input">
                <input
                    type='text'
                    placeholder='Search by company name'
                    onChange={(e) => this.handleSearchChange(e)}
                />
            </div>
        )
    }

}

const mapStateToProps = ( {companies} ) => {
    return { companies: companies }
}

export default connect(mapStateToProps)(Search)