"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const address = fetch("/api/address?email=karthik@scale3labs.com", {
      method: "GET",
    })
      .then((res) => {
        console.log(res);
      })
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={() => signIn("google")}>Continue with Google</Button>
    </main>
  );
}
