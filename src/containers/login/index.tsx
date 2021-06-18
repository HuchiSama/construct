import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

// @inject('Actions', 'Store')
@observer
export default class Login extends Component {

  render() {

    return (
      <div>
        login
      </div>
    );
  }
}
