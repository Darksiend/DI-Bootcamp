import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  }
  render() {
    if (this.state.hasError) {
      return (
        <p>
          {this.state.error}
          {this.state.errorInfo}
        </p>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
