import React, { Component } from 'react'
import { Card, Form } from 'semantic-ui-react'


class EditForm extends Component {
    state = {
      name: this.props.company.name,
      status: this.props.company.status,
      companyInfo: this.props.company.companyInfo,
      financialPerformanceScore: this.props.company.financialPerformanceScore,
      keyContacts: this.props.company.keyContacts
    }

    handleOnChange = (e) => {
      let name = e.target.name
      this.setState({ name })
    }

    render(){
      const { name, status, companyInfo, financialPerformanceScore, keyContacts } = this.state
        return (
            <Card>
              <Form>
                <Form.Group widths='equal'>
                  <Form.Input fluid label='Company Name' name='name' defaultValue={name} />
                  <Form.Input fluid label='Status' name='status' defaultValue={status} />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input fluid label='Financial Performance Score' name='financialPerformanceScore' defaultValue={financialPerformanceScore} />
                  <Form.Input fluid label='Key Contacts' name='keyContacts' defaultValue={keyContacts} />
                </Form.Group>
                <Form.TextArea label='Company Info' name='companyInfo' defaultValue={companyInfo} />
                <Form.Button type='submit' >Submit</Form.Button>
              </Form>
            </Card>
        )
       
    }
}

export default EditForm