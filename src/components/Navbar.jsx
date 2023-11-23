import BaseConsumer from "BaseComponent/BaseConsumer";
import React from "react";
import logoIcon from "../assets/imgs/png/logo.png";
import { withStyles } from "@mui/styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Popover from "@mui/material/Popover";
import noDataIcon from "../assets/imgs/png/noData.png";
import { PRODUCTS } from "../constant";

class Navbar extends BaseConsumer {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  _onClickCart = (e) => {
    this.setState({
      anchorEl: e.currentTarget,
    });
  };

  _onClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  _onSubtract = (id) => {
    const findProduct = this.props.products.find((item) => item.id === id);
    if (findProduct?.num > 1) {
      findProduct.num -= 1;
      this.forceUpdate();
    } else {
      this.removeElement(this.props.products, findProduct);
    }
  };

  _onAdd = (id) => {
    const findProduct = this.props.products.find((item) => item.id === id);
    findProduct.num += 1;
    this.forceUpdate();
  };

  _onRemove = (id) => {
    const findProduct = this.props.products.find((item) => item.id === id);
    this.removeElement(this.props.products, findProduct);
  };

  _getFullInfoProducts() {
    const { products } = this.props;
    const newProducts = products.map((item) => {
      const product = PRODUCTS.find((product) => product.id === item.id);
      return {
        num: item.num,
        ...product,
      };
    });
    return newProducts;
  }

  getTotalPrice() {
    const total = this._getFullInfoProducts().reduce(
      (sum, item) => sum + item.price * item?.num,
      0
    );
    return parseFloat(total).toFixed(2);
  }

  consumerContent() {
    const { classes, products } = this.props;
    return (
      <div className={classes.navbar}>
        <div className={classes.navbarLeft}>
          <div className={classes.navbarLogo}>
            <img src={logoIcon} alt="" className={classes.navbarLogoImage} />
            <div className={classes.navbarLogoText}>Test i3</div>
          </div>
          {/* <div className={classes.navbarLink}>
            {NAV_LINKS.map((item) => (
              <div
                key={item.id}
                className={classNames(
                  [classes.navbarLinkItem],
                  active === item.id ? [classes.navbarLinkItemActive] : ""
                )}
                onClick={() => onRedirect(item)}
              >
                {item.name}
              </div>
            ))}
          </div> */}
        </div>
        <div className={classes.navbarRight}>
          <div
            className={classes.navbarCartWrapper}
            onClick={this._onClickCart}
          >
            <ShoppingCartOutlinedIcon />
            {products.length > 0 && (
              <div className={classes.navbarCartCount}>{products.length}</div>
            )}
          </div>
          <Popover
            open={!!this.state.anchorEl}
            onClose={this._onClose}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            classes={{
              paper: classes.navbarDropdownWrapper,
            }}
          >
            <div className={classes.navbarDropdown}>
              {this._getFullInfoProducts().length > 0 ? (
                <>
                  {this._getFullInfoProducts().map((item) => (
                    <div key={item.id} className={classes.dropdownItem}>
                      <img
                        src={item.img}
                        alt=""
                        className={classes.dropdownItemImage}
                      />
                      <div className={classes.dropdownItemContent}>
                        <div className={classes.dropdownItemName}>
                          {item.name}
                        </div>
                        <div className={classes.dropdownItemBrand}>
                          {item.brand.name}
                        </div>
                        <div className={classes.dropdownItemBottom}>
                          <div className={classes.dropdownItemNumberWrapper}>
                            <IconButton
                              aria-label="fingerprint"
                              onClick={() => this._onSubtract(item.id)}
                            >
                              <RemoveIcon />
                            </IconButton>
                            <div
                              className={classes.dropdownItemNumber}
                            >{`x${item.num}`}</div>
                            <IconButton
                              aria-label="fingerprint"
                              onClick={() => this._onAdd(item.id)}
                            >
                              <AddIcon />
                            </IconButton>
                          </div>
                          <div
                            className={classes.dropdownItemPrice}
                          >{`$${parseFloat(item.num * item.price).toFixed(
                            2
                          )}`}</div>
                        </div>
                      </div>
                      <div
                        className={classes.dropdownItemClose}
                        onClick={() => this._onRemove(item.id)}
                      >
                        x
                      </div>
                    </div>
                  ))}
                  <div className={classes.dropdownBottom}>
                    <div className={classes.dropdownBottomTotal}>
                      <div className={classes.dropdownBottomTotalTitle}>
                        Total
                      </div>
                      <div
                        className={classes.dropdownBottomTotalPrice}
                      >{`$${this.getTotalPrice()}`}</div>
                    </div>
                    <Button
                      variant="contained"
                      color="primary"
                      classes={{
                        root: classes.checkoutButton,
                      }}
                    >
                      Checkout
                    </Button>
                  </div>
                </>
              ) : (
                <div className={classes.emptyData}>
                  <img src={noDataIcon} alt="" width={150} height={150} />
                  <div>No data to display</div>
                </div>
              )}
            </div>
          </Popover>
          <div className={classes.navbarAvatar}>DN</div>
        </div>
      </div>
    );
  }
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "60px",
    padding: "0 20px",
    backgroundColor: "#fff",
    borderBottom: "1px solid #ebebef",
  },
  navbarLeft: {
    display: "flex",
  },
  navbarLogo: {
    display: "flex",
    alignItems: "center",
  },
  navbarLogoImage: {
    width: "30px",
    height: "30px",
  },
  navbarLogoText: {
    fontSize: "18px",
    fontWeight: "500",
    marginLeft: "10px",
  },
  navbarRight: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  navbarCartWrapper: {
    position: "relative",
    cursor: "pointer",
  },
  navbarCartCount: {
    position: "absolute",
    top: "-4px",
    right: "-8px",
    height: "16px",
    width: "16px",
    fontSize: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    background: "red",
    color: "#fff",
  },
  navbarDropdownWrapper: {
    background: "#fff",
    border: "1px solid #ebebef",
    borderRadius: "12px",
    padding: "20px",
    width: "400px",
    marginTop: "8px",
  },
  dropdownItem: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    padding: "12px",
    borderRadius: "12px",
    transition: "all 0.2s",
    "&:hover": {
      background: "#ebebef",
    },
    "&:hover $dropdownItemClose": {
      display: "block",
    },
  },
  dropdownItemImage: {
    objectFit: "contain",
    objectPosition: "center",
    width: "60px",
    height: "60px",
    padding: "12px",
    borderRadius: "12px",
    border: "1px solid #ebebef",
    background: "#fbfbfb",
  },
  dropdownItemContent: {
    flex: 1,
    marginLeft: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  dropdownItemName: {
    fontWeight: 500,
    fontSize: "16px",
    maxWidth: "250px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  dropdownItemBrand: {
    color: "#70707a",
    fontSize: "14px",
  },
  dropdownItemBottom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: 500,
    marginTop: "10px",
  },
  dropdownItemNumberWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  dropdownItemClose: {
    position: "absolute",
    top: "4px",
    right: "12px",
    lineHeight: "22px",
    display: "none",
    cursor: "pointer",
    fontSize: "20px",
  },
  dropdownBottom: {
    marginTop: "30px",
  },
  dropdownBottomTotal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "24px",
    fontWeight: 500,
  },
  checkoutButton: {
    width: "100%",
    marginTop: "12px",
  },
  navbarAvatar: {
    borderRadius: "50%",
    background: "#5f2a15",
    color: "#fff",
    fontWeight: 500,
    padding: "8px",
  },
  emptyData: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 500,
    fontSize: "18px",
  },
};
export default withStyles(styles)(Navbar);
