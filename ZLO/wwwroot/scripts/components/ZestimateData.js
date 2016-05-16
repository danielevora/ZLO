import React, { Component, PropTypes } from 'react'

class ZestimateData extends Component {
     static propTypes = {
        zestimate: PropTypes.shape({
            amount: PropTypes.shape({
                '#text': PropTypes.string,
                '@currency': PropTypes.string
            }),
            'last-updated': PropTypes.string,
            oneWeekChange: PropTypes.shape({
                '@deprecated': PropTypes.string
            }),
            valueChange: PropTypes.shape({
                '#text': PropTypes.string,
                '@currency': PropTypes.string,
                '@duration': PropTypes.string
            }),
            valuationRange: PropTypes.shape({
                low: PropTypes.shape({
                    '#text': PropTypes.string,
                    '@currency': PropTypes.string
                }),
                high: PropTypes.shape({
                    '#text': PropTypes.string,
                    '@currency': PropTypes.string
                }),
            }),
            percentile: PropTypes.string
        }),
        heading: PropTypes.string
    }

    constructor(props) {
        super(props)
    }

    render() {
        let z = this.props.zestimate
        return z ? (
            <div>
                <h2> {this.props.heading} </h2>
                <form>
                    <div className="form-group">
                        <label className="col-sm-2 conrol-label">Amount</label>
                        <div className="col-sm-10">
                            <p className="form-control-static">{z.amount['#text']} {z.amount['@currency']}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 conrol-label">Last Updated</label>
                        <div className="col-sm-10">
                            <p className="form-control-static">{z['last-updated']}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 conrol-label">Value Change</label>
                        <div className="col-sm-10">
                            <p className="form-control-static">{z.valueChange['#text']} {z.valueChange['@currency']} {z.valueChange['@duration']}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 conrol-label">Valuation Range</label>
                        <div className="col-sm-10">
                            <p className="form-control-static">{z.valuationRange.low['#text']} {z.valuationRange.low['@currency']} &mdash; {z.valuationRange.high['#text']} {z.valuationRange.high['@currency']}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 conrol-label">Percentile</label>
                        <div className="col-sm-10">
                            <p className="form-control-static">{z.percentile}</p>
                        </div>
                    </div>
                </form>
            </div>
        ) : null
    }
}

export default ZestimateData