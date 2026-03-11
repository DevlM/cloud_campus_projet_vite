import { Header } from "./components/Header";
import { AppLayout } from "./components/AppLayout";
import { HomePage } from "./pages/home";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { CheckoutProvider } from "./hooks/useCheckout";

function App() {
  return (
    <main>
      <CheckoutProvider>
        <Header />
        <Navbar />
        <AppLayout>
          <HomePage />
        </AppLayout>
        <Footer />
      </CheckoutProvider>
    </main>
  );
}

export default App;
