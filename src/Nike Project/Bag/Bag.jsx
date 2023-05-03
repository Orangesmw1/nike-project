import React from "react";
import ShowItems from "../HomePage/ShowItems/ShowItems";
import "./Bag.css";
import { useDispatch, useSelector } from "react-redux";
import { delItemCart } from "../Redux/couterSlice";

const Bag = () => {
  const listCart = useSelector((state) => state.counter.listShowCart);
  const dispatch = useDispatch();

  const handleSum = () => {
    const total = [];

    listCart.forEach((item) => {
      total.push(item.count * item.price);
    });

    if (total.length > 0) {
      const sum = total.reduce((a, b) => a + b, 0);

      return sum;
    }
  };

  return (
    <div>
      <div className="box-bag">
        <div className="container">
          <div className="box-items-bag">
            <h3 className="pb-2">Bag</h3>
            {listCart.map((item, index) => {
              return (
                <ul key={item.id}>
                  <li className="box-img-bag">
                    <img className="img-item-bag" src={item.image} alt="" />
                  </li>
                  <li className="box-content-item-bag">
                    <h4>{item.name}</h4>
                    <p>{item.shortDescription}</p>

                    <div className="size-quantity">
                      <span className="size-item-bag">
                        Size {item.sizeDetail}{" "}
                      </span>
                      <span className="quantity-item-bag">
                        Quantity {item.count}
                      </span>
                    </div>

                    <div className="box-favourite-delete">
                      <i className="fa fa-heart"></i>
                      <i
                        className="fa fa-trash-alt"
                        onClick={() => dispatch(delItemCart(index))}
                      ></i>
                    </div>
                  </li>

                  <li className="price-item-bag">{item.price * item.count}$</li>
                </ul>
              );
            })}

            <div className="favourite-login">
              <h4>Favourite</h4>
              <p>
                Want to view your favourites?
                <a href="#" className="px-2">
                  Join us
                </a>
                or
                <a className="pl-2" href="#">
                  Sign in
                </a>
              </p>
            </div>
          </div>

          <div className="box-sum">
            <h3>Summary</h3>

            <p className="sub-total">
              <span>Subtotal</span>{" "}
              <span className="price-total">{handleSum()}$</span>
            </p>
            <p className="delivery-handing">
              <span>Estimated Delivery & Handling</span>Free
            </p>

            <p className="total">
              <span>Total</span>{" "}
              <span className="price-total">{handleSum()}$</span>
            </p>

            <div className="box-bag-checkout">
              <button className="guest-checkout">Guest Checkout</button>
              <button className="member-checkout">Member Checkout</button>
            </div>
          </div>
        </div>
      </div>

      <ShowItems />
    </div>
  );
};

export default Bag;
