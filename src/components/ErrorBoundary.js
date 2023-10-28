import ErrorPage from "./pages/ErrorPage";
import * as React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "Something went wrong." };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    this.setState({ message: error.message, hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage message={this.state.message} />;
    }

    return this.props.children;
  }
}
