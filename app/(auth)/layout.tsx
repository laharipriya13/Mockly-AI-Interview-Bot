import { ReactNode } from "react";
import { redirect } from "next/navigation";
// A custom function that checks if the user is logged in (probably by checking a token, session, or API).
import { isAuthenticated } from "@/lib/actions/auth.action";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (isUserAuthenticated) redirect("/");

  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;