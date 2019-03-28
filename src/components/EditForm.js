import React, { Component } from 'react'
import { Card, Form } from 'semantic-ui-react'


class EditForm extends Component {
    state = {
      id: this.props.company.id,
      name: this.props.company.name,
      status: this.props.company.status,
      companyInfo: this.props.company.companyInfo,
      financialPerformanceScore: this.props.company.financialPerformanceScore,
      keyContacts: this.props.company.keyContacts
    }

    handleOnChange = (e) => {
      let name = e.target.name
      let value = e.target.value
      this.setState({ [name]: value })
    }

    render(){
      const { name, status, companyInfo, financialPerformanceScore, keyContacts } = this.state
        return (
            <Card>
              <Form onSubmit={() => this.props.handleEditSubmit(this.state)} >
                <Form.Group widths='equal'>
                  <Form.Input fluid label='Company Name' name='name' onChange={this.handleOnChange} defaultValue={name} />
                  <Form.Input fluid label='Status' name='status' onChange={this.handleOnChange} defaultValue={status} />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input fluid label='Financial Performance Score' name='financialPerformanceScore' onChange={this.handleOnChange} defaultValue={financialPerformanceScore} />
                  <Form.Input fluid label='Key Contacts' name='keyContacts' onChange={this.handleOnChange} defaultValue={keyContacts} />
                </Form.Group>
                <Form.TextArea label='Company Info' name='companyInfo' onChange={this.handleOnChange} defaultValue={companyInfo} />
                <Form.Button
                  type='submit'>Submit</Form.Button>
              </Form>
            </Card>
        )
       
    }
}

export default EditForm