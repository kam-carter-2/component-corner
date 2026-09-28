import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import CartItem from "./components/CartItem";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 79.99,
      image:
        "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Premium wireless headphones with clear sound and comfortable ear cushions",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 129.99,
      image:
        "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Stay connected with fitness tracking, notifications, and a modern design",
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      price: 89.99,
      image:
        "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "A responsive mechanical keyboard built for productivity, gaming, and everyday use",
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(
      cart.filter((_, index) => index !== indexToRemove)
    );
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="app">
      <Header
        storeName="ComponentCorner"
        cartCount={cart.length}
      />

      <Hero
        title="Upgrade Your Everyday Tech"
        subtitle="Discover quality gadgets designed to make your everyday life easier."
        buttonText="Shop Now"
      />

      <main className="products-section" id="products">
        <h2>Featured Products</h2>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </main>

      <section className="cart-section" id="cart">
        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
          <p className="empty-cart">
            Your cart is empty. Start adding items to see them here!
          </p>
        ) : (
          <div className="cart-content">
            {cart.map((item, index) => (
              <CartItem
                key={`${item.id}-${index}`}
                product={item}
                onRemove={() => removeFromCart(index)}
              />
            ))}

            <div className="cart-total">
              <h3>
                Cart Total: ${cartTotal.toFixed(2)}
              </h3>
            </div>
          </div>
        )}
      </section>

      <Footer
        storeName="ComponentCorner"
        email="support@componentcorner.com"
        phone="(662) 555-0147"
      />
    </div>
  );
}

// React Shopping Cart Application

// This is a simple and interactive shopping cart application built with React. The application allows users to browse products, add items to their cart, view the total cost, and remove items from the cart. It is designed to demonstrate the use of React components, state management, and dynamic rendering.

// ## Features

// - **Add to Cart**: Users can add products to their shopping cart.
// - **Remove from Cart**: Items can be removed individually from the cart.
// - **Cart Total**: Displays the total cost of all items in the cart.
// - **Empty Cart Message**: A clear message is displayed when the cart is empty.
// - **Responsive Design**: The application is styled to work on various screen sizes.

// ## Technologies Used

// - **React**: For building the user interface and managing state.
// - **JavaScript (ES6)**: For application logic.
// - **CSS**: For styling the application.
// - **HTML**: For structuring the application.

// ## Installation Instructions

// 1. **Clone the Repository**:
//    ```bash
//    git clone https://github.com/your-username/react-shopping-cart.git
//    ```

export default App;$