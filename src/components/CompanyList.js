import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import { SEEDS } from '../seeds'
import CompanyCard from './CompanyCard'


class CompanyList extends Component {
    render(){
        return (
            <Card.Group>
                {SEEDS.map(company => <CompanyCard company = { company } /> )}
            </Card.Group>
        )
    }
}

export default CompanyList