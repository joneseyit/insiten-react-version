import React, { Component } from "react";
import CompanyList from "../components/CompanyList";
import { SEEDS } from "../seeds";
import EditForm from "../components/EditForm";
import CreateCompany from "../components/CreateCompany";
import Search from "../components/Search";

class CompanyContainer extends Component {
  state = {
    companies: [],
    showEditForm: false,
    editableCompany: null,
    searchResults: []
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

  handleSearchChange = (e) => {
    let search = e.target.value.toLowerCase()
    let searchResults = this.state.companies.filter( 
      company => company.name.toLowerCase().includes(search)
      )
    this.setState({searchResults: searchResults})
  };

  handleCreateSubmit = company => {
    this.setState({ showCreateForm: false });
    company.id = this.state.companies.length + 1;
    const updatedCompanyList = this.state.companies.concat(company);
    this.setState({ companies: updatedCompanyList });
  };

  render() {
    return (
      <div>
        <Search handleSearchChange={this.handleSearchChange} />
        
        <CreateCompany handleCreateSubmit={this.handleCreateSubmit} />
        <br />
        {this.state.showEditForm ? (
          <EditForm
            company={this.state.editableCompany}
            handleEditSubmit={this.handleEditSubmit}
          />
        ) : null}

        <CompanyList
          curCompanies={this.state.searchResults.length ? this.state.searchResults : this.state.companies}
          handleEditClick={this.handleEditClick}
          handleDeleteClick={this.handleDeleteClick}
        />
      </div>
    );
  }
}

export default CompanyContainer;
