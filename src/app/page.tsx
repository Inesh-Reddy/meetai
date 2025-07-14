"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/db/auth-client";
// import { redirect } from "next/navigation";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Home() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  // Use useRouter to get the router object
  const router = useRouter();

  const onSignup = () => {
    const name = nameRef.current?.value || "name";
    const email = emailRef.current?.value || "tests";
    const password = passRef.current?.value || "pass";

    authClient.signUp.email(
      {
        name,
        email,
        password,
      },
      {
        onSuccess: () => {
          router.push("/Dashboard");
          // redirect("/Dashboard");
        },
      }
    );
  };

  return (
    <div>
      <Input ref={nameRef} placeholder="name" />
      <Input ref={emailRef} placeholder="email" />
      <Input ref={passRef} placeholder="pass" />
      <Button onClick={onSignup}>Signup</Button>
    </div>
  );
}
