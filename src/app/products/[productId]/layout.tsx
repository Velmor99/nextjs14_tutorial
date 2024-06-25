import React from "react";

const getRandomInt = (number: number) => {
  return Math.floor(Math.random() * number);
};

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading product");
  }

  return (
    <>
      {children}
      <h2>Features products</h2>
    </>
  );
}
