import React, { Component, ErrorInfo, ReactNode } from 'react'

type ErrorBoundaryState = {
  hasError: boolean
}

export default class ErrorBoundary extends Component<
  unknown,
  ErrorBoundaryState
> {
  constructor(props: unknown) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    if (error) {
      return { hasError: true }
    }
    return { hasError: false }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}
