import * as React from "react";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";

/**
 * this hook is used to protect routes
 */

export const useProtected = (cb?: () => void) => {
  const { token, status } = useAppSelector((state) => state.auth);
  const router = useRouter();

  // protect route; if no token, redirect to login
  React.useLayoutEffect(() => {

    if (status === 'rejected') {
      router.push("/?step=login");
    }

    if (status === "fulfilled") {
      if (!token) {
        router.push("/?step=login");
      } else {
        cb && cb();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
};
