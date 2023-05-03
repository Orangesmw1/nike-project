import React, { useEffect, useState } from "react";
import "./Detail.css";
import { NavLink, useParams } from "react-router-dom";
import ShowItems from "../HomePage/ShowItems/ShowItems";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { upArrShowCart } from "../Redux/couterSlice";

const Detail = () => {
  const param = useParams();
  const id = param.id;
  const dispatch = useDispatch();

  const [itemDetail, setItemDetail] = useState(null);

  const handleAddSize = (item, sizeItem) => {
    const itemDetailUpdate = { ...item, sizeDetail: sizeItem };
    setItemDetail(itemDetailUpdate);
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    }).then((response) => {
      setItemDetail(response.data.content);
    });
  }, [id]);

  return (
    <div className="details">
      {itemDetail ? (
        <div className="box-detail" key={itemDetail.id}>
          <div className="container">
            <div className="box-img">
              <img className="img-main" src={itemDetail.image} alt="" />

              <ul className="box-related">
                {itemDetail?.relatedProducts.map((item) => {
                  return (
                    <NavLink to={`/detail/${item.id}`} key={item.id}>
                      <li>
                        <img src={item.image} alt="" />
                      </li>
                    </NavLink>
                  );
                })}
              </ul>
            </div>

            <div className="box-options">
              <p className="title-sub">Sustainable Materials</p>
              <h4>{itemDetail.name} </h4>
              <p className="short-description">{itemDetail.shortDescription}</p>

              <p className="price">{itemDetail.price} $</p>

              <div className="box-size">
                <div className="size-title">
                  <p>Select Size</p>
                  <p>Size Guide</p>
                </div>

                <div className="options-size">
                  {itemDetail.size.map((sizeItem, index) => {
                    return (
                      <button
                        key={index}
                        className="size-grid-item"
                        onClick={() => handleAddSize(itemDetail, sizeItem)}
                      >
                        EU {sizeItem}
                      </button>
                    );
                  })}
                </div>

                <button
                  className="add-cart"
                  onClick={() => dispatch(upArrShowCart(itemDetail))}
                >
                  Add to Bag
                </button>
                <button className="add-favourite">
                  Favourite <i className="fa fa-heart"></i>
                </button>
                <p className="description">{itemDetail.description}</p>

                <h5 className="view-product-detail">View Product Details</h5>
              </div>

              <div className="box-delivery">
                <h3>Free Delivery and Returns</h3>
              </div>
              <div className="box-how-this">
                <h3>How This Was Made</h3>
              </div>
              <div className="box-review">
                <h3>Review(0)</h3>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <ShowItems />
    </div>
  );
};

export default Detail;
