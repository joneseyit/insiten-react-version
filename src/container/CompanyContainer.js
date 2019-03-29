import React, { Component } from "react";
import CompanyList from "../components/CompanyList";
import { SEEDS } from "../seeds";
import EditForm from "../components/EditForm";
import CreateCompany from "../components/CreateCompany";
import Search from "../components/Search";
import SortedCompanies from "../components/SortedCompanies";

class CompanyContainer extends Component {
  state = {
    companies: [],
    showEditForm: false,
    editableCompany: null,
    searchTerm: '',
    searchResults: [],
    sortedCompanies: [],
    showSortedCo: false
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
    let searchTerm = e.target.value.toLowerCase()
    this.setState({ searchTerm: searchTerm })
    let searchResults = this.state.companies.filter( 
      company => company.name.toLowerCase().includes(searchTerm)
      )
    this.setState({searchResults: searchResults})
  };

  handleCreateSubmit = company => {
    this.setState({ showCreateForm: false });
    company.id = this.state.companies.length + 1;
    const updatedCompanyList = this.state.companies.concat(company);
    this.setState({ companies: updatedCompanyList });
  };

  sortCompanies = () => {
    this.setState({ showSortedCo: !this.state.showSortedCo })
    let companies = this.state.companies
    let sortedCompanies = companies.slice().sort( 
      (a, b) => b.financialPerformanceScore - a.financialPerformanceScore   
      )
    this.setState({ sortedCompanies: sortedCompanies })
  }


  render() {
    let allCompanies = this.state.showSortedCo ? this.state.sortedCompanies : this.state.companies
    let renderedCompanies = this.state.searchTerm.length ? 
      this.state.searchResults : 
      allCompanies;
    
    return (
      <div>
        
        <Search handleSearchChange={this.handleSearchChange} />
        <SortedCompanies sortCompanies={this.sortCompanies} />
       

        <CreateCompany handleCreateSubmit={this.handleCreateSubmit} />
        <br />
        {this.state.showEditForm ? (
          <EditForm
            company={this.state.editableCompany}
            handleEditSubmit={this.handleEditSubmit}
          />
        ) : null}

        <CompanyList
          curCompanies={renderedCompanies}
          handleEditClick={this.handleEditClick}
          handleDeleteClick={this.handleDeleteClick}
        />
      </div>
    );
  }
}

export default CompanyContainer;
