import { AuthProvider } from "./auth";
import { CartProvider } from "./cart";

const ContextProvider = ({ children }) => {
  return (
    // we wraping all the pages inside this auth provider so all the pages can access the state
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
