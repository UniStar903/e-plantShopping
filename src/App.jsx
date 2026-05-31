import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import CartItem from "./CartItem";

const ProductList = ({ onHomeClick }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart(prevState => ({
      ...prevState,
      [product.name]: true,
    }));
  };

  const calculateTotalQuantity = () => {
    return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  };

  return (
    <div>
      <div className="navbar">
        <div className="luxury">
          <h3>Paradise Nursery</h3>
          <i>Where Green Meets Serenity</i>
        </div>
        <div>
          <a href="#" onClick={() => setShowCart(true)}>
            🛒 Cart ({calculateTotalQuantity()})
          </a>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h1>{category.category}</h1>
              <div className="product-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img src={plant.image} alt={plant.name} />
                    <div>{plant.name}</div>
                    <div>{plant.description}</div>
                    <div>${plant.cost}</div>
                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
};

export default ProductList;
