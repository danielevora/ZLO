import React, { Component, PropTypes } from 'react'

class Links extends Component {
    static propTypes = {
        links: PropTypes.shape({
            homedetails: PropTypes.string,
            graphsanddata: PropTypes.string,
            mapthishome: PropTypes.string,
            comparables: PropTypes.string,
        })
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className="list-inline">
                <li><a href={this.props.links.homedetails}>Home Details</a></li>
                <li><a href={this.props.links.graphsanddata}>Graphs & Data</a></li>
                <li><a href={this.props.links.mapthishome}>Map This Home</a></li>
                <li><a href={this.props.links.comparables}>Comparables</a></li>
            </ul>
        )
    }
}

export default Links