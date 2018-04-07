import React, { Component } from 'react';

import SampleContainer from '../containers/sample_container';
import '../../style/app.css';

export default class App extends Component {
  render() {
    return (
      <div>
          Whatever you need.
          <SampleContainer />
      </div>
    );
  }
}