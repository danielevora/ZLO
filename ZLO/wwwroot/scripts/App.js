import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import AddressLookup from './components/AddressLookup'

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <AddressLookup />
                    </div>
                </div>
            </div>
        )
    }
}

export default App