import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export const formattedPrice = (price) => {
  const formattedPrice = price.toLocaleString("es-ES", {
    style: "currency",
    currency: "COP",
  });
  return formattedPrice;
}
export const truncateDescription = (description) => {
  const fullText = description || "Description not available";
  const truncatedText =
    fullText.slice(0, 100) + (fullText.length > 100 ? "..." : "");
  return truncatedText;
};
