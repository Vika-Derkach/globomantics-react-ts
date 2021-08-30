// import React, { Component, ErrorInfo, ReactNode } from "react";

// interface Props {
//   children: ReactNode;
// }

// interface State {
//   hasError: boolean;
// }

// class ErrorBoundary extends Component<Props, State> {
//   public state: State = {
//     hasError: false
//   };

//   public static getDerivedStateFromError(_: Error): State {
//     // Update state so the next render will show the fallback UI.
//     return { hasError: true };
//   }

//   public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
//     console.error("Uncaught error:", error, errorInfo);
//   }

//   public render() {
//     if (this.state.hasError) {
//       return <h1>Sorry.. there was an error</h1>;
//     }

//     return this.props.children;
//   }
// }

// export default ErrorBoundary;

import React, { Component, ErrorInfo, ReactNode } from 'react';
interface Props {
    children: ReactNode
}
interface State {
    hasError : boolean
}
class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props ) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: Error) {
      // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
      return { hasError: true };
    }
  
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
      console.log(error, errorInfo.componentStack );
      
    }
  
    render() {
      if (this.state.hasError) {
        // Можно отрендерить запасной UI произвольного вида
        return <h1>Что-то пошло не так.</h1>;
      }
  
      return this.props.children; 
    }
  }
 export default ErrorBoundary;