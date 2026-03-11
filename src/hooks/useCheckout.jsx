import { createContext, useContext, useState, useMemo } from "react";
import { CheckoutAddProductModal } from "../components/checkout/CheckoutAddProductModal";
import { CheckoutViewModal } from "../components/checkout/CheckoutViewModal";

const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
  const [currentSelectedProduct, setCurrentSelectedProduct] = useState(null);
  const [checkoutProducts, setCheckoutProducts] = useState([]);
  const [isCheckoutAddProductModalOpen, setIsCheckoutAddProductModalOpen] =
    useState(false);
  const [isCheckoutViewModalOpen, setIsCheckoutViewModalOpen] = useState(false);

  const openCheckoutAddProductModal = (product) => {
    const hasProduct = checkoutProducts.find((p) => p.id === product.id);
    setCurrentSelectedProduct(
      hasProduct ? { ...product, quantity: hasProduct.quantity } : product,
    );
    setIsCheckoutAddProductModalOpen(true);
  };
  const closeCheckoutAddProductModal = () => {
    setIsCheckoutAddProductModalOpen(false);
  };
  const openCheckoutViewModal = () => {
    setIsCheckoutViewModalOpen(true);
  };
  const closeCheckoutViewModal = () => {
    setIsCheckoutViewModalOpen(false);
  };

  const addProduct = (checkoutProduct) => {
    if (checkoutProducts.some((p) => p.id === checkoutProduct.id)) {
      // If product already exists, update quantity
      setCheckoutProducts(
        checkoutProducts.map((p) =>
          p.id === checkoutProduct.id
            ? { ...p, quantity: checkoutProduct.quantity }
            : p,
        ),
      );
      return;
    }
    setCheckoutProducts([...checkoutProducts, checkoutProduct]);
  };

  const removeProduct = (productId) => {
    setCheckoutProducts(checkoutProducts.filter((p) => p.id !== productId));
  };

  const addToCart = (quantity) => {
    addProduct({ ...currentSelectedProduct, quantity });
    setCurrentSelectedProduct(null);
    closeCheckoutAddProductModal();
  };

  const updateQuantity = (productId, quantity) => {
    setCheckoutProducts(
      checkoutProducts.map((p) =>
        p.id === productId ? { ...p, quantity } : p,
      ),
    );
  };

  const clearCart = () => {
    setCheckoutProducts([]);
  };

  const pay = () => {
    alert("Désolé, le système de paiement n'est pas encore implémenté.");
  };

  const HTPrice = useMemo(
    () =>
      checkoutProducts.reduce(
        (acc, checkoutProduct) =>
          acc + checkoutProduct.price * checkoutProduct.quantity,
        0,
      ),
    [checkoutProducts],
  );

  const tax = useMemo(() => HTPrice * 0.2, [HTPrice]);
  const totalPrice = useMemo(() => HTPrice + tax, [HTPrice, tax]);
  const currentProduct =
    checkoutProducts.find((p) => p.id === currentSelectedProduct?.id) ||
    currentSelectedProduct;
  return (
    <CheckoutContext.Provider
      value={{
        openCheckoutAddProductModal,
        closeCheckoutAddProductModal,
        openCheckoutViewModal,
        closeCheckoutViewModal,
        checkoutProducts,
        currentProduct,
        setCurrentSelectedProduct,
        addProduct,
        removeProduct,
        HTPrice,
        tax,
        totalPrice,
      }}
    >
      {children}
      <CheckoutAddProductModal
        open={isCheckoutAddProductModalOpen}
        onClose={closeCheckoutAddProductModal}
        product={currentProduct}
        onAddToCart={addToCart}
        onRemoveFromCart={removeProduct}
      />
      <CheckoutViewModal
        open={isCheckoutViewModalOpen}
        onClose={closeCheckoutViewModal}
        checkoutProducts={checkoutProducts}
        updateQuantity={updateQuantity}
        clearCart={clearCart}
        pay={pay}
        products={checkoutProducts}
        HTPrice={HTPrice}
        tax={tax}
        totalPrice={totalPrice}
        onRemoveFromCart={removeProduct}
      />
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }
  return context;
};
