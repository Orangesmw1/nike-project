import React from "react";
import { useDispatch } from "react-redux";
import { upArrShowCart } from "../../Redux/couterSlice";
import { NavLink } from "react-router-dom";

const BoxItem = (props) => {
  const { listProduct } = props;

  const handleSetItem = () => {
    const listShow = [];

    if (listProduct) {
      for (let index = 0; index < 3; index++) {
        listShow.push(listProduct[index]);
      }

      if (listShow.length > 0) {
        return listShow.map((item, index) => {
          return (
            <div className="item" key={index}>
              <div className="box-img-item">
                <NavLink to={`/detail/${item?.id}`}>
                  <img
                    src={item?.image}
                    className="img-item"
                    alt=""
                    onClick={() => {
                      document.body.scrollTop = 0;
                      document.documentElement.scrollTop = 0;
                    }}
                  />
                </NavLink>
              </div>

              <div className="box-content-price">
                <div className="content">
                  <h4>{item?.name}</h4>
                  <p>{item?.shortDescription}</p>
                </div>

                <div className="price">
                  <p>{item?.price}$</p>
                </div>
              </div>
            </div>
          );
        });
      }
    }
  };

  return <div className="box-items">{handleSetItem()}</div>;
};

export default BoxItem;
