import { cn } from "../../lib/utils";
import { CheckoutCardInline } from "./CheckoutCardInline";

export const CheckoutViewModal = ({
  open,
  onClose,
  clearCart,
  products,
  updateQuantity,
  pay,
  HTPrice,
  totalPrice,
  onRemoveFromCart,
}) => {
  return (
    <div
      className={cn(
        "absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center",
        open ? "block" : "hidden",
      )}
    >
      <div className="bg-background border min-w-md min-h-[200px] p-4 rounded-lg">
        <div className="p-2 border-b flex justify-between items-center">
          <h1 className="text-2xl font-bold">Votre panier</h1>
          <button onClick={onClose}>Fermer</button>
        </div>
        <div className="flex flex-col mt-5 gap-2">
          {products.map((product) => (
            <CheckoutCardInline
              key={product.id}
              product={product}
              quantity={product.quantity}
              setQuantity={(q) => {
                updateQuantity(product.id, q);
              }}
              onRemoveFromCart={onRemoveFromCart}
            />
          ))}
        </div>
        <div className="flex flex-col items-end mt-5">
          <p className="text-lg">
            Prix HT: <b>{HTPrice} €</b>
          </p>
          <p className="text-lg">
            Tax: <b>20 %</b>
          </p>
          <p className="text-lg">
            Total: <b>{totalPrice} €</b>
          </p>
        </div>
        <div className="flex justify-end gap-2 mt-5">
          <button
            className="bg-primary hover:bg-primary/80 cursor-pointer mt-auto text-white px-4 py-1 rounded-md"
            onClick={() =>
              confirm("Voulez-vous vraiment vider le panier?") && clearCart()
            }
          >
            Vider le panier
          </button>
          <button
            className="bg-primary hover:bg-primary/80 cursor-pointer mt-auto text-white px-4 py-1 rounded-md"
            onClick={() => pay()}
          >
            Payer
          </button>
        </div>
      </div>
    </div>
  );
};
