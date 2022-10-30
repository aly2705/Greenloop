import React from "react";

const UsersContext = React.createContext({
  employees: [],
  personal: {},
});

export const UsersContextProvider = (props) => {
  const contextValue = {
    employees: [],
    personal: {},
  };

  return (
    <UsersContext.Provider value={contextValue}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
