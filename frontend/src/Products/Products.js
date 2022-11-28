import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart, getCart, updatCart } from "../Redux/Reducers/CartSlice";
import "./Prducts.css";
import { getproducts, deleProduct } from "../Redux/Reducers/ProductSlice";
import { useSelector } from "react-redux";

export default function Products() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.carts.cartItem);
  console.log(cartItem);
  const { products } = useSelector((state) => state.products);
  console.log(products);
  useEffect(() => {
    dispatch(getproducts());
    dispatch(getCart());
  }, [dispatch]);
  
  const handlecartitem = (data) => {
    const itemInCart = cartItem.findIndex(
      (item) => item.id_product === data.id_product
    );
    console.log(itemInCart);
    if (itemInCart < 0) {
      dispatch(addCart(data));
    } else {
      let newcart = {
        ...cartItem[itemInCart],
        quantity: cartItem[itemInCart].quantity + 1,
        amount: cartItem[itemInCart].quantity * cartItem[itemInCart].price+cartItem[itemInCart].price
      };
      dispatch(updatCart(newcart));
    }
  };

  return (
    <div className="products-grid">
      <div className="App-header"></div>
      <div className="products">
        {products.map((item) => (
          <div className="product-2">
            <div>
              <img className="img-1" src={item.image_url} alt={item.name_product} />
              <h4> Product:{item.name_product}</h4>
            </div>
            <div>
              <h4>Price:${item.price}</h4>
              <p>Discount: {item.discount_rate}%</p>
              <p>Description: {item.description}</p>
            </div>
            <div>
              <button
                onClick={() => {
                  handlecartitem(item);
                }}
                className="add-cart"
              >
                Add Cart
              </button>
              <button
                onClick={() => {
                  dispatch(deleProduct(item.id_product));
                }}
                style={{ background: "red" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
