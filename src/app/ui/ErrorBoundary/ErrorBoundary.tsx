import { Component, PropsWithChildren, ReactNode } from 'react';

interface ErrorBoundaryProps {
    error: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends Component<PropsWithChildren<ErrorBoundaryProps>, ErrorBoundaryState> {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: unknown, errorInfo: unknown) {
        console.log(error, errorInfo);
    }

    render() {
        const { error, children } = this.props;
        const { hasError } = this.state;

        return hasError ? error : children;
    }
}