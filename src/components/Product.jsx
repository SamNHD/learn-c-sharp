import BaseConsumer from "BaseComponent/BaseConsumer";
import React from "react";
import { withStyles } from "@mui/styles";

class Product extends BaseConsumer {
  constructor(props) {
    super(props);
  }

  consumerContent() {
    const { classes, product } = this.props;
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
                <StarFilled className={classes.productRateIcon} />
                <div className={classes.productRateValue}>{product.rate}</div>
              </div>
            </div>
            <div className={classes.productBrand}>{product.brand}</div>
          </div>
          <div className={classes.productFooter}>
            <div className={classes.productPrice}>{`$${parseFloat(
              product.price
            ).toFixed(2)}`}</div>
            <Button
              className={classes.productAddBtn}
              onClick={() => props.onAdd(product)}
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
  product: {},
};
export default withStyles(styles)(Product);
