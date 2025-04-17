import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unhandled error caught in ErrorBoundary:', error, errorInfo);

    // Send logs to monitoring service (e.g., Sentry, LogRocket)
    // logErrorToService(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { fallback, children } = this.props;

    if (hasError) {
      return fallback ?? (
        <div className="p-8 text-center text-red-600">
          <h2 className="text-xl font-semibold">Something went wrong.</h2>
          <p>Please try refreshing the page.</p>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
