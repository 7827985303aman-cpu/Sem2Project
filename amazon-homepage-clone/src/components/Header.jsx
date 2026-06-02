import React, { useState } from "react";
import "./Header.css";

function Header({ cartCount, onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="header">
      <div className="header_logoContainer">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
        <span className="header_logoIn">.in</span>
      </div>

      <div className="header_delivery">
        <div className="header_deliveryIcon">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Deliver to</span>
          <span className="header_optionLineTwo">India</span>
        </div>
      </div>

      <form className="header_search" onSubmit={handleSearchSubmit}>
        <select className="header_searchDropdown">
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="essentials">Home Essentials</option>
          <option value="furniture">Furniture</option>
          <option value="toys">Toys</option>
          <option value="Books">Books</option>
          <option value="appliances">Appliances</option>
          <option value="apps&games">Apps & Games</option>
          <option value="laptops">Laptops</option>
          <option value="pc">PCs & accessories</option>
          <option value="deals">Deals</option>
          <option value="beauty">Beauty</option>
          <option value="jewelleries">Jewelleries</option>
        </select>

        <input
          className="header_searchInput"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Amazon.in"
        />
        <button type="submit" className="header_searchIconContainer">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </button>
      </form>

      <div className="header_nav">
        <div className="header_option header_optionDesktop">
          <span className="header_optionLineOne">Hello, sign in</span>
          <span className="header_optionLineTwo">Account & Lists</span>
        </div>

        <div className="header_option header_optionDesktop">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_optionBasket">
          <div className="header_basketIconText">
            <span className="header_basketCount">{cartCount}</span>
            <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </div>
          <span className="header_optionLineTwo header_basketText">Cart</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
