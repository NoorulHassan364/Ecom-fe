import { AuthProvider } from "./auth";
import { CartProvider } from "./cart";

const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
