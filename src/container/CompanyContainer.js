import React, { Component } from "react";
import CompanyList from "../components/CompanyList";
import { SEEDS } from "../seeds";
import EditForm from "../components/EditForm";
import CreateCompany from '../components/CreateCompany'
class CompanyContainer extends Component {
  state = {
    companies: [],
    showEditForm: false,
    editableCompany: null,
    showCreateForm: false
  };

  componentDidMount() {
    this.setState({ companies: SEEDS });
  }

  handleEditClick = id => {
    let editableCompany = this.state.companies.find(
      company => company.id === id
    );
    this.setState({ editableCompany });
    this.setState({ showEditForm: !this.state.showEditForm });
  };

  handleDeleteClick = id => {
    let currentCompanies = this.state.companies.filter(c => {
      return c.id !== id;
    });
    this.setState({ companies: currentCompanies });
  };

  handleEditSubmit = company => {
    this.setState({ showEditForm: false });
    const updatedCompanies = this.state.companies.map(c => {
      if (c.id === company.id) {
        return Object.assign({}, company);
      } else {
        return c;
      }
    });
    this.setState({ companies: updatedCompanies });
  };

  handleCreateSubmit = (company) => {
    this.setState({ showCreateForm: false })
    //just a hack to create an id without a database
    company.id = this.state.companies.length + 1
    const updatedCompanyList = this.state.companies.concat(company)
    this.setState({ companies: updatedCompanyList })
  }

  render() {
    return (
      <div>
        {this.state.showCreateForm ? 
        (<CreateCompany 
          handleCreateSubmit={this.handleCreateSubmit}
        />) : 
        null}

        {this.state.showEditForm ? (
          <EditForm
            company={this.state.editableCompany}
            handleEditSubmit={this.handleEditSubmit}
          />
        ) : 
        null}

        <CompanyList
          curCompanies={this.state.companies}
          handleEditClick={this.handleEditClick}
          handleDeleteClick={this.handleDeleteClick}
        />
      </div>
    );
  }
}

export default CompanyContainer;
