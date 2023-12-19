"use client";

import * as React from "react";
import { useMeMutation } from "@/redux/features/auth/authApiSlice";
import { useAppSelector } from "@/redux/store";

// interface
interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const user = useAppSelector((state) => state.auth);
  const [me, { data }] = useMeMutation();

  React.useLayoutEffect(() => {
    (async () => {
      await me("").unwrap();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};
