import { Trash } from "lucide-react";

export const CheckoutCardInline = ({
  product,
  quantity,
  setQuantity,
  onRemoveFromCart,
}) => {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div>
        <h2>{product.title}</h2>
        <p>{product.price * quantity}€</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity <= 1}
        >
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
        {onRemoveFromCart && (
          <button onClick={() => onRemoveFromCart?.(product.id)}>
            <Trash />
          </button>
        )}
      </div>
    </div>
  );
};
