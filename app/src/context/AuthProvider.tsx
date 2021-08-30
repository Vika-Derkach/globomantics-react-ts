import React, { ReactNode, useContext, useState } from "react";

interface AuthContextValues {
  authInfo: AuthInfo,
  isAuthenticated: boolean, 
  // setAuthInfo: Dispatch<React.SetStateAction<AuthInfo>>,
  setAuthInfo: (authInfo: AuthInfo ) => void, 
  isAdmin: boolean
}
export const AuthContext = React.createContext<undefined | AuthContextValues>(undefined);
const Provider = AuthContext.Provider;

interface Props {
  children: ReactNode
}
interface UserData {
  role: 'USER' | "ADMIN"
}
interface AuthInfo {
  userData: UserData | null
}

export function AuthProvider({ children }: Props) {
 // const [string, setString] = useState('someString')
 // const anotherString: string = string

  const [authInfo, setAuthInfo] = useState<AuthInfo>({
    userData: null,
  });

  const isAuthenticated = authInfo.userData !== null;

  const isAdmin = authInfo.userData?.role === "ADMIN";

  function handleAuthInfo(authInfo: AuthInfo ) {
    setAuthInfo(authInfo) 
  }

  return (
    <Provider value={{ authInfo, isAuthenticated, setAuthInfo: handleAuthInfo, isAdmin }}>
      {children}
    </Provider>
  );
}
export function useAuthContext() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext should be used within an AuthProvider')
  }
  return context
}