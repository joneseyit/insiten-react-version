import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import { SEEDS } from '../seeds'
import CompanyCard from './CompanyCard'


class CompanyList extends Component {
    state = {
        companies: []
    }

    componentDidMount(){
        this.setState({ companies: SEEDS})
    }

    render(){

        return (
            <Card.Group itemsPerRow={3}>
                {this.state.companies.map(company => <CompanyCard company = { company } /> )}
            </Card.Group>
        )
    }
}

export default CompanyList