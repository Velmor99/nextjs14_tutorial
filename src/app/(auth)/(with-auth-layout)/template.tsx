"use client";
import { useState } from "react";

export default function AuthTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");
  return (
    <div>
      <h2>New input</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      {children}
    </div>
  );
}
