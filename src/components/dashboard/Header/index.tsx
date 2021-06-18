import React, { Component } from 'react';
import { Button, Input } from 'antd';


import styles from './styles.module.less';

const { Search } = Input;

@withRouter
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
 
    };
  }

  render() {


    return (
      <div className={styles['header-wrapper']}>
       header
      </div>
    );
  }
}
