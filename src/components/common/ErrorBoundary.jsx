import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an uncaught error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div 
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "#090e1a",
            color: "#ffffff",
            fontFamily: "Inter, sans-serif",
            padding: "20px",
            boxSizing: "border-box",
            textAlign: "center"
          }}
        >
          <div style={{ maxWidth: "550px" }}>
            <span 
              style={{
                fontFamily: "Dancing Script, cursive",
                fontSize: "4rem",
                color: "#ff9f1c",
                display: "block",
                marginBottom: "20px"
              }}
            >
              Oops!
            </span>
            <h1 style={{ fontSize: "2rem", marginBottom: "16px", fontWeight: "800" }}>
              Something went wrong
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.7", fontSize: "16px", marginBottom: "32px" }}>
              An unexpected layout or logic error occurred. We have logged this details and are investigating. In the meantime, try refreshing the page.
            </p>
            <button
              onClick={this.handleReload}
              style={{
                background: "#ff9f1c",
                color: "#ffffff",
                border: "none",
                padding: "16px 36px",
                borderRadius: "9999px",
                fontWeight: "700",
                fontSize: "16px",
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(255, 159, 28, 0.35)",
                transition: "all 0.3s ease"
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
