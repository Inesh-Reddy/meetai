"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/db/auth-client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const { data: session } = authClient.useSession();

  const onSignUp = () => {
    authClient.signUp.email({
      name,
      email,
      password,
    });
  };
  const onLogin = () => {
    authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });
  };

  const signOut = () => {
    authClient.signOut();
  };

  if (session) {
    return (
      <div>
        <h2>logged in as {session.user.name}</h2>
        <Button onClick={signOut}>Signout</Button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Input
          type="name"
          placeholder="UserName"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></Input>
        <br />
        <Input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></Input>
        <br />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></Input>
        <br />
        <Button onClick={onSignUp}>SignUp</Button>
      </div>

      <div>
        <Input
          type="email"
          placeholder="loginemail"
          value={loginEmail}
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        ></Input>
        <br />
        <Input
          type="password"
          placeholder="loginpassword"
          value={loginPassword}
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        ></Input>
        <br />
        <Button onClick={onLogin}>Login</Button>
      </div>
    </div>
  );
}
