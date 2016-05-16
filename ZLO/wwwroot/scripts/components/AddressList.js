import React, { Component, PropTypes } from 'react'
import Links from './Links'
import FullAddress from './FullAddress'
import ZestimateData from './ZestimateData'
//import RentZestimateData from './RentZestimateData'
import LocalRealEstateList from './LocalRealEstateList'

class Address extends Component {
    static propTypes = {
        address: PropTypes.shape({
            address: PropTypes.object,
            links: PropTypes.object,
            localRealEstate: PropTypes.object,
            zestimate: PropTypes.object,
            rentzestimate: PropTypes.object,
            zpid: PropTypes.string
        })
    }

    render() {
        return (
            <div>
                <FullAddress address={this.props.address.address}/>
                <ZestimateData zestimate={this.props.address.zestimate} heading='Zestimate' />
                <ZestimateData zestimate={this.props.address.rentzestimate} heading='Rent Zestimate' />
                <LocalRealEstateList localRealEstate={this.props.address.localRealEstate}/>
                <small>ZPID: {this.props.address.zpid}</small>
                <Links links={this.props.address.links}/>
            </div>
        )
    }
}

class AddressList extends Component {
    static propTypes = {
        result: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.object),
            PropTypes.object
        ]) 
    }

    render() {
        let addresses = []
        let data = this.props.result || []

        if (data.address) {
            addresses.push(
                <Address address={data} key="1" />
            )
        } else if (data.length > 1) {
            data.forEach((address, index) => {
                addresses.push(
                    <Address address={address} key={index} />
                )
            })
        }

    console.log(data)

        return (
            <div>
                <h2>Search Results</h2>
                {addresses}
            </div>
        )
    }
}

export default AddressList