import BaseConsumer from "BaseComponent/BaseConsumer";
import React from "react";
import { withStyles } from "@mui/styles";
import Button from "@mui/material/Button";

class Product extends BaseConsumer {
  constructor(props) {
    super(props);
  }

  _onAdd = () => {
    const { product, onAdd } = this.props;
    onAdd(product.id);
  };

  consumerContent() {
    const { classes, product, onAdd } = this.props;
    return (
      <div className={classes.product}>
        <div className={classes.productImgWrapper}>
          <img src={product.img} alt="" className={classes.productImg} />
        </div>
        <div className={classes.productContent}>
          <div className={classes.productInfo}>
            <div className={classes.productInfoTitle}>
              <div className={classes.productName}>{product.name}</div>
              <div className={classes.productRate}>
                <img
                  src="https://res.cloudinary.com/kineticlabs/image/upload/q_auto/c_fit,w_12/f_svg/v1/api-images/misc/v2-star-black_wipz4v"
                  alt=""
                  className={classes.productRateIcon}
                />
                <div className={classes.productRateValue}>{product.rate}</div>
              </div>
            </div>
            <div className={classes.productBrand}>{product.brand.name}</div>
          </div>
          <div className={classes.productFooter}>
            <div className={classes.productPrice}>{`$${parseFloat(
              product.price
            ).toFixed(2)}`}</div>
            <Button
              onClick={this._onAdd}
              classes={{
                root: classes.productAddBtnRoot,
              }}
              variant="contained"
              color="primary"
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  product: {
    padding: "24px",
    border: "1px solid #ebebef",
    borderRadius: "12px",
    width: "270px",
    height: "250px",
    display: "flex",
    flexDirection: "column",
    background: "#fbfbfb",
  },
  productImgWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  productAddBtnRoot: {
    fontSize: "12px",
  },
  productImg: {
    objectFit: "contain",
    objectPosition: "center",
    height: "70px",
  },
  productContent: {
    marginTop: "20px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  productInfo: {
    flex: 1,
  },
  productInfoTitle: {
    display: "flex",
    alignItems: "start",
    justifyContent: "space-between",
  },
  productName: {
    fontWeight: 500,
    fontSize: "18px",
  },
  productRate: {
    display: "flex",
  },
  productRateIcon: {
    objectFit: "contain",
    objectPosition: "center",
    width: "16px",
  },
  productRateValue: {
    marginLeft: "4px",
  },
  productBrand: {
    fontSize: "14px",
    color: "#70707a",
  },
  productFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productPrice: {
    fontWeight: 500,
    fontSize: "18px",
  },
  productAddBtn: {
    fontWeight: 500,
    borderRadius: "8px",
    color: "#fff",
    background: "#434343",
    height: "32px",
    padding: "4px 12px",
  },
};
export default withStyles(styles)(Product);
