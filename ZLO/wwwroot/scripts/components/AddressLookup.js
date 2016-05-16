import React, { Component, PropTypes } from 'react'
import AddressLookupForm from './AddressLookupForm'
import AddressList from './AddressList'
import ErrorDisplay from './ErrorDisplay'

class AddressLookup extends Component {

    constructor(props) {
        super(props)
        this.state = { result: [], message: {} }
        this.handleAddressSubmit = this.handleAddressSubmit.bind(this)
    }

    handleAddressSubmit(address) {
        $.ajax({
            type: 'GET',
            url: '/Home/Zillow',
            data: Object.assign({}, address),
            success: function(data) {
                console.log(data)
                if (data['SearchResults:searchresults'].message.code !== '0') {
                    this.setState({
                        result: [],
                        message: data['SearchResults:searchresults'].message
                    })
                } else {
                    this.setState({
                        result: data['SearchResults:searchresults'].response.results.result,
                        message: data['SearchResults:searchresults'].message
                    })
                }
            }.bind(this),
            error: function(xhr, status, err) {
                this.setState({
                    result: [],
                    message: { text: err.toString(), code: status }
                })
            }.bind(this)
        })
    }

    render() {
        return (
            <div className="addressLookup">
                <h1>Zillow API Lookup</h1>
                <AddressLookupForm onAddressSubmit={this.handleAddressSubmit} />
                <AddressList result={this.state.result} />
                <ErrorDisplay message={this.state.message} />
            </div>
        )
    }
}

export default AddressLookup