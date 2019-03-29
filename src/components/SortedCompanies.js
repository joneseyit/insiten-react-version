import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class SortedCompanies extends Component {
    render() {
        return (
            <div>
                <Button onClick ={this.props.sortCompanies} >Sort by Highest Financial Performance</Button>
            </div>
        )
    }
}

export default SortedCompanies