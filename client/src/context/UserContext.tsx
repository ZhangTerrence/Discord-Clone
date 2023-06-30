import React, { createContext, useReducer } from "react";

interface ContextType {
  state: StateType;
  dispatch: React.Dispatch<any>;
}

interface StateType {
  [key: string]: string | string[];
}

interface ProviderType {
  children: React.ReactNode;
}

export const UserContext = createContext<ContextType>({ state: {}, dispatch: () => null });

const userReducer = (state: StateType, action: { type: string; payload: StateType }) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export const UserContextProvider: React.FC<ProviderType> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {});

  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};
