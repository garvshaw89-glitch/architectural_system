import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Terminal } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('System Architecture Exception Caught:', error, errorInfo);
    this.setState({ errorInfo });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050505] text-[#F5F5F0] flex items-center justify-center p-6 selection:bg-[#5B8CFF]/30 select-none">
          <div className="max-w-md w-full p-8 rounded-[24px] bg-[#08090B] border border-rose-500/30 space-y-6 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-rose-400 font-semibold block uppercase">
                  RUNTIME RECOVERY SHIELD
                </span>
                <span className="font-display font-bold text-lg text-[#F5F5F0]">
                  SYSTEM EXCEPTION CAUGHT
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-[#A5A7AC] leading-relaxed">
              An isolated subsystem anomaly was intercepted before compromising global state. The
              architectural state machine remains protected.
            </p>

            {this.state.error && (
              <div className="p-3.5 rounded-xl bg-[#050505] border border-white/[0.06] font-mono text-[11px] text-[#6B6E75] space-y-1 overflow-x-auto">
                <div className="text-rose-400/80 font-semibold">
                  {this.state.error.name}: {this.state.error.message}
                </div>
              </div>
            )}

            <button
              onClick={this.handleReset}
              className="w-full py-3 rounded-xl bg-[#101216] border border-white/20 hover:border-white/40 text-xs font-mono text-[#F5F5F0] hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5 text-[#5B8CFF]" />
              <span>RELOAD ARCHITECTURAL SYSTEM</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
