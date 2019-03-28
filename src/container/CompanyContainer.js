import React, { Component } from "react";
import CompanyList from "../components/CompanyList";
import { SEEDS } from "../seeds";
import EditForm from "../components/EditForm";

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

  render() {
    return (
      <div>
        {this.state.showEditForm ? (
          <EditForm
            company={this.state.editableCompany}
            handleEditSubmit={this.handleEditSubmit}
          />
        ) : null}
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
