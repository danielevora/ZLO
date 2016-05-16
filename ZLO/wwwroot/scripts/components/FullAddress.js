import React, { Component, PropTypes } from 'react'

class FullAddress extends Component {
    static propTypes = {
        address: PropTypes.shape({
            street: PropTypes.string,
            zipcode: PropTypes.string,
            city: PropTypes.string,
            state: PropTypes.string,
            latitude: PropTypes.string,
            longitude: PropTypes.string
        }).isRequired
    }
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2> Address </h2>
                <address>
                    {this.props.address.street}
                    <br />
                    {this.props.address.city}, {this.props.state} {this.props.address.zipcode}
                    <br />
                    ({this.props.address.latitude}, {this.props.address.longitude})
                </address>
            </div>
        )
    }
}

export default FullAddress