import { ShoppingCart } from "lucide-react";
import { useCheckout } from "../hooks/useCheckout";

export const Header = () => {
  const { openCheckoutViewModal, checkoutProducts } = useCheckout();
  return (
    <header
      className="relative h-70 text-white flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative container max-w-4xl mx-auto h-full flex items-center justify-center">
        <h1 className="relative z-10 text-4xl font-bold text-center">
          Mon Restaurant
        </h1>
        <button
          className="absolute right-0 top-5 bg-primary p-2 rounded-md flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
          onClick={openCheckoutViewModal}
        >
          Votre panier <ShoppingCart />
          <span className="bg-white text-primary size-6 rounded-full flex items-center justify-center">
            {checkoutProducts.length}
          </span>
        </button>
      </div>
    </header>
  );
};
