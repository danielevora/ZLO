import React, { Component, PropTypes } from 'react'

class Region extends Component {
    static propTypes = {
        region: PropTypes.shape({
            '@id': PropTypes.string,
            '@name': PropTypes.string,
            '@type': PropTypes.string,
            links: PropTypes.shape({
                forSale: PropTypes.string,
                forSaleByOwner: PropTypes.string,
                overview: PropTypes.string
            }),
            zindexValue: PropTypes.string
        })
    }

    render() {
        const r = this.props.region
        return (
            <div>
                <div>{ r['@name'] } :: { r['@type'] }</div>
                <ul>
                    <li> <a href={ r.links.forSale }>For Sale</a> </li>
                    <li> <a href={ r.links.forSaleByOwner }>For Sale By Owner</a> </li>
                    <li> <a href={ r.links.overview }>Overview</a> </li>
                </ul>
            </div>
        )
    }
}

class LocalRealEstateList extends Component {
    static propTypes = {
        localRealEstate: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.object),
            PropTypes.object
        ])
    }

    render() {
        let regions = []
        let localRealEstate = this.props.localRealEstate || []

        if (localRealEstate.region) {
            regions.push(
                <Region region={localRealEstate.region} key="1" />
            )
        } else if (localRealEstate.length > 1) {
            localRealEstate.forEach((region, index) => {
                regions.push(
                    <Region region={region} key={index} />
                )
            })
        }
        
        return (
            <div>
                <h2>Local Real Estate</h2>
                {regions}
            </div>
        )
    }
}

export default LocalRealEstateList