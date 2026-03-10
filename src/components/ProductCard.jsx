import KeywordsMocks from "../mocks/keywords";
import { KeywordBadge } from "./KeywordBadge";
import { motion as Motion } from "motion/react";

export const ProductCard = ({ product, index }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, translateY: 0, translateX: 30 }}
      animate={{ opacity: 1, translateY: 0, translateX: 0 }}
      exit={{ opacity: 0, translateY: 0, translateX: 30 }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col gap-2 bg-primary/20 p-1 rounded-md hover:scale-105 transition-transform delay-0 cursor-pointer"
    >
      <img
        className="w-64 object-cover aspect-3/2 rounded-md"
        src={product.image}
        alt={product.title}
      />
      <div className="flex justify-between font-semibold">
        <h2>{product.title}</h2>
        <p>{product.price}€</p>
      </div>
      <hr />
      <div className="flex flex-wrap gap-2">
        {product.keywordIds?.map((keywordId) => (
          <KeywordBadge
            key={keywordId}
            keyword={KeywordsMocks.find((k) => k.id === keywordId)?.name}
          />
        ))}
      </div>
      <button className="bg-primary hover:bg-primary/80 cursor-pointer mt-auto text-white px-4 py-1 rounded-md">
        Ajouter au panier
      </button>
    </Motion.div>
  );
};
