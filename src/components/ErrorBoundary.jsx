import React, { Component } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <div>
            <Title level={2}>Something went wrong.</Title>
            <Title level={4}>Please try again later.</Title>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
