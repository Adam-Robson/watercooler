import React, { useState, useContext, createContext } from 'react';
import { getUser } from '../services/auth';

const UserContext = createContext();

export function UserProvider({ children }) {
  const currentUser = getUser();

  const [user, setUser] = useState(currentUser);

  return <UserContext.Provider value={ { user, setUser } }>{ children }</UserContext.Provider>;

}

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('userContext must be used within a UserProvider');
  }
  return context;
}
