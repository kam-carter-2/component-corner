import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header storeName="ComponentCorner" />

      <Hero
        title="Upgrade Your Everyday Tech"
        subtitle="Discover quality gadgets designed to make your everyday life easier."
        buttonText="Shop Now"
      />

      <main className="products-section" id="products">
        <h2>Featured Products</h2>

        <div className="products-grid">
          <ProductCard
            name="Wireless Headphones"
            price="79.99"
            image="https://placehold.co/600x400/2563eb/ffffff?text=Wireless+Headphones"
            description="Premium wireless headphones with clear sound and comfortable ear cushions."
          />

          <ProductCard
            name="Smart Watch"
            price="129.99"
            image="https://placehold.co/600x400/7c3aed/ffffff?text=Smart+Watch"
            description="Stay connected with fitness tracking, notifications, and a modern design."
          />

          <ProductCard
            name="Mechanical Keyboard"
            price="89.99"
            image="https://placehold.co/600x400/111827/ffffff?text=Mechanical+Keyboard"
            description="A responsive mechanical keyboard built for productivity, gaming, and everyday use."
          />
        </div>
      </main>

      <Footer
        storeName="ComponentCorner"
        email="support@componentcorner.com"
        phone="(662) 555-0147"
      />
    </div>
  );
}

export default App;