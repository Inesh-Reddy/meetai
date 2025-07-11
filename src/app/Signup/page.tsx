"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/db/auth-client";
import React, { useRef } from "react";

const SignInPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  const onLogin = () => {
    const email = emailRef.current?.value || "tests";
    const password = passRef.current?.value || "pass";
    authClient.signIn.email({
      email,
      password,
      callbackURL: "/Dashboard",
    });
  };

  return (
    <div>
      <div>
        <Input ref={emailRef} placeholder="email"></Input>
        <Input ref={passRef} placeholder="pass"></Input>
        <Button onClick={onLogin}>Login</Button>
      </div>
    </div>
  );
};

export default SignInPage;
