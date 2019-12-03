import React from "react";
import ErrorBoundary from "./containers/ErrorBoundary";
import CurrencyTable from "./containers/CurrencyTable";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <CurrencyTable />
      </ErrorBoundary>
    </div>
  );
}

export default App;
