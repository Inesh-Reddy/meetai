"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/db/auth-client";
import { redirect } from "next/navigation";

const LogoutPage = ({ token }: { token: string | undefined }) => {
  const signOut = () => {
    authClient.signOut();
    redirect("/Signup");
  };
  if (token) {
    return (
      <div>
        <Button onClick={signOut}>Signout</Button>
      </div>
    );
  }
  return (
    <div>
      <h1>No Token to LogOut</h1>
    </div>
  );
};

export default LogoutPage;
