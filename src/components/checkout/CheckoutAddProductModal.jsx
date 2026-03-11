import { useEffect } from "react";
import { cn } from "../../lib/utils";
import { CheckoutCardInline } from "./CheckoutCardInline";
import { useState } from "react";

export const CheckoutAddProductModal = ({
  open,
  onClose,
  product,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    setQuantity(product?.quantity || 1);
  }, [product?.quantity]);
  const handleAddToCart = () => {
    onAddToCart(quantity);
    setQuantity(1);
  };
  if (!product) return null;
  return (
    <div
      className={cn(
        "absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center",
        open ? "block" : "hidden",
      )}
    >
      <div className="bg-background border min-w-md min-h-[200px] p-4 rounded-lg">
        <div className="p-2 border-b flex justify-between items-center">
          <h1 className="text-2xl font-bold">Choisissez les options</h1>
          <button onClick={onClose}>Fermer</button>
        </div>
        <div className="flex flex-col mt-5">
          <CheckoutCardInline
            product={product}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>
        <div className="flex justify-end mt-5">
          <button
            className="bg-primary hover:bg-primary/80 cursor-pointer mt-auto text-white px-4 py-1 rounded-md"
            onClick={handleAddToCart}
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};
