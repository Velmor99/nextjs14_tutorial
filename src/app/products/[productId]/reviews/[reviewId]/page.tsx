import { notFound } from "next/navigation";

const generateRandom = (number: number) => {
  return Math.random() * number;
};

export default function ReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const random = generateRandom(2);
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
