import React from 'react';

type Props = { children: React.ReactNode };
type State = { error: Error | null };

// Deliberately does not use LanguageContext — an error here must render even
// if the provider itself is what threw, so it falls back to fixed Guna
// palette classes rather than depending on the context it is meant to guard.
export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null };
  private headingRef = React.createRef<HTMLHeadingElement>();

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Darśana app crashed:', error, info.componentStack);
  }

  componentDidUpdate(_prevProps: Props, prevState: State) {
    if (!prevState.error && this.state.error) {
      this.headingRef.current?.focus();
    }
  }

  reset = () => this.setState({ error: null });

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div role="alert" className="min-h-[40vh] flex items-center justify-center px-4 py-12">
        <div className="max-w-3xl w-full text-center bg-avyakta-2 border border-tamas-deep rounded-2xl p-8 shadow-xs">
          <p className="t-eyebrow text-rajas mb-2">Something went wrong</p>
          <h1 ref={this.headingRef} tabIndex={-1} className="t-display2 text-sattva mb-2">
            This screen hit an error
          </h1>
          <p className="t-body-sans text-sattva-dim mb-6">{this.state.error.message}</p>
          <div className="flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={this.reset}
              className="inline-flex items-center justify-center min-h-11 min-w-11 px-5 py-2.5 rounded-xl bg-rajas text-sattva text-sm font-semibold hover:bg-rajas-dim transition-colors motion-reduce:transition-none"
            >
              Try again
            </button>
            <a
              href="#/"
              onClick={this.reset}
              className="inline-flex items-center justify-center min-h-11 min-w-11 px-5 py-2.5 rounded-xl bg-avyakta-3 border border-tamas-deep text-sattva text-sm font-semibold hover:bg-avyakta-4 transition-colors motion-reduce:transition-none"
            >
              Return home
            </a>
          </div>
        </div>
      </div>
    );
  }
}
