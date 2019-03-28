import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import CompanyCard from './CompanyCard'


class CompanyList extends Component {

    render(){

        return (
            <div className="ui container">
                <Card.Group itemsPerRow={6}  >
                    {this.props.curCompanies.map(company => <CompanyCard company={company} handleEditClick={this.props.handleEditClick} /> )}
                </Card.Group>
            </div>
        )
    }
}

export default CompanyList