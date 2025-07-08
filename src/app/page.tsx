"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/db/auth-client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = () => {
    authClient.signUp.email({
      name,
      email,
      password,
    });
  };

  return (
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
  );
}
