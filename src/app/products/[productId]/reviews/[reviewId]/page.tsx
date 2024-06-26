"use client";
import { notFound } from "next/navigation";

const getRandomInt = (number: number) => {
  return Math.floor(Math.random() * number);
};

export default function ReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const random = getRandomInt(2);
  console.log(random);
  if (random <= 1) {
    throw new Error("this is error");
  }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
