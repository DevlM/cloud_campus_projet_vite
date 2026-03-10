import { Header } from "./components/Header";
import { AppLayout } from "./components/AppLayout";
import { HomePage } from "./pages/home";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <main>
      <Header />
      <Navbar />
      <AppLayout>
        <HomePage />
      </AppLayout>
      <Footer />
    </main>
  );
}

export default App;
