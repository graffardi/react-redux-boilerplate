import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchInformation } from '../actions/index';

class SearchBar extends Component {
    constructor (props) {
        super(props);

        this.state = {
            info: ""
        };
    }
    render () {
        return (
            <div>
                Thanks for cloning my repo!
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchInformation }, dispatch);
}

// Passing null as first argument because connect usually 
// takes a state mapping function as first argument, and in this
// case we do not care about the state.
export default connect(null, mapDispatchToProps)(SearchBar);