import React from 'react';
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';

export class NumericInput extends React.Component<any, any> {
  onChange = (e: any) => {
    const { value } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      this.props.onChange(value);
    }
  };

  // '.' at the end or only '-' in the input box.
  onBlur = () => {
    const { value, onBlur, onChange } = this.props;
    let valueTemp = value;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
    if (onBlur) {
      onBlur();
    }
  };

  render() {
    return (
      <Input
        {...this.props}
        onChange={this.onChange}
        onBlur={this.onBlur}
        maxLength={25}
      />
    );
  }
}
