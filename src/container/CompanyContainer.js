import React, { Component } from "react";
import CompanyList from "../components/CompanyList";
import { SEEDS } from "../seeds";
import EditForm from "../components/EditForm";
import CreateCompany from "../components/CreateCompany";
import Search from "../components/Search";
import SortedCompanies from "../components/SortedCompanies";
import { connect } from 'react-redux'
import { addCompanies } from '../redux/actions'


class CompanyContainer extends Component {
  state = {
    searchTerm: '',
    searchResults: [],
    sortedCompanies: [],
    showSortedCo: false
  };

  componentDidMount() {
    this.props.dispatch(addCompanies(SEEDS))
  }

  handleEditClick = id => {
    let editCompany = this.state.companies.find(
      company => company.id === id
    );
    this.setState({ editCompany });
    this.setState({ showEditForm: !this.state.showEditForm });
  };

  handleDeleteClick = id => {
    let currentCompanies = this.state.companies.filter(c => {
      return c.id !== id;
    });
    this.setState({ companies: currentCompanies });
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
        
        {this.props.editCompany ? (<EditForm/>) : null}

        <CompanyList
          handleEditClick={this.handleEditClick}
          handleDeleteClick={this.handleDeleteClick}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { editCompany: state.editCompany }
}

export default connect(mapStateToProps)(CompanyContainer);
