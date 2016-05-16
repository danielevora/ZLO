import React, { Component, PropTypes } from 'react'

class ErrorDisplay extends Component {
    static propTypes = {
        message: PropTypes.object
    }

    render() {
        return (this.props.message && this.props.message.code && this.props.message.code !== "0") ? (
            <p className="text-warning">
                {this.props.message.text}
            </p>
        ) : null
    }
}

export default ErrorDisplay