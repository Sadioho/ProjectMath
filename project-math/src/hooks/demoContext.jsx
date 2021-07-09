import React from "react";

const CurrencyContext = React.createContext(null);

const useCurrency = () => React.useContext(CurrencyContext);

const CurrencyProvider = ({ value, children }) => {
  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export { CurrencyProvider, useCurrency };
