import React, { Component } from 'react';
const classNames = require('classnames');

class CoolButton extends Component {
  render() {
    const btnClass = classNames({
      button: true,
      'is-small': this.props.isSmall,
      'is-danger': this.props.isDanger,
      'is-success': this.props.isSuccess,
      'is-info': this.props.isInfo,
      'is-primary': this.props.isPrimary,
      // 'is-rounded my-class': this.props.className,
      'is-rounded my-class': (this.props.isSmall && this.props.isDanger) || (this.props.isSmall && this.props.isSuccess),
    });
    return  <button class={btnClass} href={this.props.href}>{this.props.children}</button>
  }
}

export default CoolButton;