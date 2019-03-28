import React, { Component } from 'react'
import CompanyList from '../components/CompanyList'
import { SEEDS } from '../seeds'
import EditForm from '../components/EditForm'

class CompanyContainer extends Component {
    state = {
        companies: [],
        showEditForm: false,
        editableCompany: null,
        showCreateForm: false
    }

    componentDidMount(){
        this.setState({ companies: SEEDS})
    }

    handleEdit = (id) => {
        let editableCompany = this.state.companies.find(company => company.id === id)
        this.setState({ editableCompany })
        this.setState({showEditForm: true})
    }

    render(){
        return (
            <div>
                { this.state.showEditForm? <EditForm company={this.state.editableCompany} /> : null }
                <CompanyList curCompanies={this.state.companies} handleEdit={this.handleEdit} />
            </div>
        )
    }
}

export default CompanyContainer