import { gql, useMutation } from "@apollo/client";
import React, { ReactNode } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuthContext } from "./context/AuthProvider";

const signOutMutation = gql`
  mutation signOutUser {
    signOut {
      user {
        id
        email
      }
    }
  }
`;

export const AuthLink = ({ children }: { children: ReactNode}  ) => {
  const [signOutUser] = useMutation(signOutMutation);
  const { isAuthenticated, setAuthInfo } = useAuthContext()
  const history = useHistory();



  const handleSignOut = async () => {
    await signOutUser();
    setAuthInfo({ userData: null });
    history.push("/auth/sign-in");
  };

  return isAuthenticated ? (
    <Link onClick={handleSignOut} to="#">
      Sign Out
    </Link>
  ) : (
    <Link to="/auth/sign-in">{children}</Link>
  );
};
