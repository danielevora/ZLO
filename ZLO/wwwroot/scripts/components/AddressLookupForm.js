import React, { Component, PropTypes } from 'react'

class AddressLookupForm extends Component {
    constructor(props) {
        super(props)
        this.state = { address: '', city: '', state: '', zipCode: '', rentZestimate: false}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAddressChange = this.handleAddressChange.bind(this)
        this.handleCityChange = this.handleCityChange.bind(this)
        this.handleStateChange = this.handleStateChange.bind(this)
        this.handleZipCodeChange = this.handleZipCodeChange.bind(this)
        this.handleRentZestimateChange = this.handleRentZestimateChange.bind(this)
    }

    handleAddressChange(e) {
        this.setState({ address: e.target.value })
    }

    handleCityChange(e) {
        this.setState({ city: e.target.value })
    }

    handleStateChange(e) {
        this.setState({ state: e.target.value })
    }

    handleZipCodeChange(e) {
        this.setState({ zipCode: e.target.value })
    }

    handleRentZestimateChange(e) {
        this.setState({ rentZestimate: e.target.checked })
    }

    handleSubmit(e) {
        e.preventDefault()
        const address = this.state.address.trim();
        const city = this.state.city.trim();
        const state = this.state.state.trim();
        const zipCode = this.state.zipCode.trim();
        const rentZestimate = this.state.rentZestimate;

        // incomplete validation, should notify user
        //if (!address || (!zipCode || (city && state))) {
        //    return;
        //}

        this.props.onAddressSubmit({ address: address, citystatezip: city + " " + state + " " + zipCode, rentZestimate: rentZestimate })
    }

    render() {
        return (
            <div className="address-lookup-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input id="inputAddress" type="text"className="form-control" placeholder="Address" onChange={this.handleAddressChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputCity">City</label>
                        <input id="inputCity" type="text" className="form-control" placeholder="City" onChange={this.handleCityChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputState">State</label>
                        <select id="inputState" onChange={this.handleStateChange} className="form-control">
                            <option value=""></option>
	                        <option value="AL">Alabama</option>
	                        <option value="AK">Alaska</option>
	                        <option value="AZ">Arizona</option>
	                        <option value="AR">Arkansas</option>
	                        <option value="CA">California</option>
	                        <option value="CO">Colorado</option>
	                        <option value="CT">Connecticut</option>
	                        <option value="DE">Delaware</option>
	                        <option value="DC">District Of Columbia</option>
	                        <option value="FL">Florida</option>
	                        <option value="GA">Georgia</option>
	                        <option value="HI">Hawaii</option>
	                        <option value="ID">Idaho</option>
	                        <option value="IL">Illinois</option>
	                        <option value="IN">Indiana</option>
	                        <option value="IA">Iowa</option>
	                        <option value="KS">Kansas</option>
	                        <option value="KY">Kentucky</option>
	                        <option value="LA">Louisiana</option>
	                        <option value="ME">Maine</option>
	                        <option value="MD">Maryland</option>
	                        <option value="MA">Massachusetts</option>
	                        <option value="MI">Michigan</option>
	                        <option value="MN">Minnesota</option>
	                        <option value="MS">Mississippi</option>
	                        <option value="MO">Missouri</option>
	                        <option value="MT">Montana</option>
	                        <option value="NE">Nebraska</option>
	                        <option value="NV">Nevada</option>
	                        <option value="NH">New Hampshire</option>
	                        <option value="NJ">New Jersey</option>
	                        <option value="NM">New Mexico</option>
	                        <option value="NY">New York</option>
	                        <option value="NC">North Carolina</option>
	                        <option value="ND">North Dakota</option>
	                        <option value="OH">Ohio</option>
	                        <option value="OK">Oklahoma</option>
	                        <option value="OR">Oregon</option>
	                        <option value="PA">Pennsylvania</option>
	                        <option value="RI">Rhode Island</option>
	                        <option value="SC">South Carolina</option>
	                        <option value="SD">South Dakota</option>
	                        <option value="TN">Tennessee</option>
	                        <option value="TX">Texas</option>
	                        <option value="UT">Utah</option>
	                        <option value="VT">Vermont</option>
	                        <option value="VA">Virginia</option>
	                        <option value="WA">Washington</option>
	                        <option value="WV">West Virginia</option>
	                        <option value="WI">Wisconsin</option>
	                        <option value="WY">Wyoming</option>
                        </select>	
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputZipCode">Zip Code</label>
                        <input id="inputZipCode" pattern="\d{5}(?:[-\s]?\d{4})?" className="form-control" placeholder="Zip Code" onChange={this.handleZipCodeChange} />
                    </div>
                    <div className="checkbox">
                        <label>
                            <input id="inputRentZestimate" type="checkbox" onChange={this.handleRentZestimateChange} /> Include Rent Zestimate
                        </label>
                    </div>
                    <button type="submit" className="btn btn-default">Search</button>
                </form>
            </div>
        )
    }
}

export default AddressLookupForm