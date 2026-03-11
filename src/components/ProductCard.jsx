import { Trash } from "lucide-react";
import { useCheckout } from "../hooks/useCheckout";
import KeywordsMocks from "../mocks/keywords";
import { KeywordBadge } from "./KeywordBadge";
import { motion as Motion } from "motion/react";

export const ProductCard = ({ product, index }) => {
  const { openCheckoutAddProductModal, checkoutProducts } = useCheckout();
  const handleAddToCart = () => {
    openCheckoutAddProductModal(product);
  };
  const isInCart = checkoutProducts.some((p) => p.id === product.id);
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
            id={keywordId}
            keyword={KeywordsMocks.find((k) => k.id === keywordId)?.name}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-auto">
        {isInCart ? (
          <>
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-primary hover:bg-primary/80 cursor-pointer text-white px-4 py-1 rounded-md"
            >
              Modifier
            </button>
            <button className="bg-destructive hover:bg-destructive/80 cursor-pointer text-white px-4 py-1 rounded-md">
              <Trash />
            </button>
          </>
        ) : (
          <button
            onClick={handleAddToCart}
            className="bg-primary w-full hover:bg-primary/80 cursor-pointer text-white px-4 py-1 rounded-md"
          >
            Ajouter au panier
          </button>
        )}
      </div>
    </Motion.div>
  );
};
