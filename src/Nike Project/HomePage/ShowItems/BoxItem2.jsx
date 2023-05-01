import React from "react";

const BoxItem2 = (props) => {
  const { listShoesProduct } = props;

  const handleSetItem = () => {
    const listShow = [];

    if (listShoesProduct) {
      for (let index = 3; index < 6; index++) {
        listShow.push(listShoesProduct[index]);
      }

      if (listShow.length > 0) {
        return listShow.map((item) => {
          return (
            <div className="item">
              <div className="box-img-item">
                <img src={item?.image} className="img-item" alt="" />
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

export default BoxItem2;
