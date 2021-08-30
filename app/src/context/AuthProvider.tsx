import React, { ReactNode, useState } from "react";

export const AuthContext = React.createContext();
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

  const isAuthenticated = authInfo.userData;

  const isAdmin = authInfo.userData?.role === "ADMIN";

  return (
    <Provider value={{ authInfo, isAuthenticated, setAuthInfo, isAdmin }}>
      {children}
    </Provider>
  );
}
