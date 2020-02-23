import React from "react";
import { Header } from "./components/Header.js";
import { Balance } from "./components/Balance";
import { IncomeExpence } from "./components/IncomExpence";
import { TransactionList } from "./components/TransactionList";
import { Addtransaction } from "./components/Addtransaction";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpence />
        <TransactionList />
        <Addtransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
