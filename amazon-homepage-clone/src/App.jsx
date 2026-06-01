import { useState } from "react";
import Header from "./components/Header.jsx";
import SubNav from "./components/SubNav.jsx";
import CarouselSlider from "./components/CarouselSlider.jsx";
import ProductCard from "./components/ProductCard.jsx";
import ProductSlider from "./components/ProductSlider.jsx";
import Footer from "./components/Footer.jsx";
import { homepageLayoutData } from "./productData.js";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleSearch = (query) => {
    console.log("Searching Amazon for:", query);
  };

  return (
    <div
      className="app"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#eaeded",
      }}
    >
      <Header cartCount={cartCount} onSearch={handleSearch} />
      <SubNav />

      <main style={{ flex: "1", width: "100%" }}>
        <CarouselSlider />

        <div
          style={{
            padding: "0 20px",
            position: "relative",
            zIndex: "5",
            marginTop: "-240px",
            maxWidth: "1500px",
            margin: "-240px auto 0 auto",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            {homepageLayoutData
              .filter((data) => data.row === 1)
              .map((card) => (
                <ProductCard key={card.id} data={card} />
              ))}
          </div>

          {homepageLayoutData
            .filter((data) => data.type === "slider")
            .map((slider) => (
              <ProductSlider key={slider.id} data={slider} />
            ))}

          <div className="app__productGrid" style={{ marginTop: "20px" }}>
            {homepageLayoutData
              .filter((data) => data.row === 3)
              .map((card) => (
                <ProductCard key={card.id} data={card} />
              ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
