import BaseConsumer from "BaseComponent/BaseConsumer";
import React from "react";
import logoIcon from "../assets/imgs/png/logo.png";
// import cartIcon from "../assets/imgs/svg/cart.svg";
// import closeIcon from "../assets/imgs/svg/close.svg";
// import emptyIcon from "../assets/imgs/svg/empty.svg";
import { withStyles } from "@mui/styles";

class Navbar extends BaseConsumer {
  constructor(props) {
    super(props);
  }

  consumerContent() {
    const { classes } = this.props;
    return (
      <div className={classes.navbar}>
        <div className={classes.navbarLeft}>
          <div className={classes.navbarLogo}>
            <img src={logoIcon} alt="" className={classes.navbarLogoImage} />
            <div className={classes.navbarLogoText}>Test i3</div>
          </div>
          <div className={classes.navbarLink}>
            {/* {NAV_LINKS.map((item) => (
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
            ))} */}
          </div>
        </div>
        <div className={classes.navbarRight}>
          {/* <Dropdown
            placement="bottomRight"
            dropdownRender={() => (
              <div className="navbar-dropdown">
                {state?.product?.length > 0 ? (
                  <>
                    {state?.product?.map((item) => (
                      <div key={item.id} className="dropdown-item">
                        <img
                          src={item.img}
                          alt=""
                          className="dropdown-item-img"
                        />
                        <div className="dropdown-item-info">
                          <div className="dropdown-item-name">{item.name}</div>
                          <div className="dropdown-item-brand">
                            {item.brand}
                          </div>
                          <div className="dropdown-item-price-wrapper">
                            <div className="dropdown-item-number-wrapper">
                              <Button
                                shape="circle"
                                size="small"
                                icon={<MinusOutlined />}
                                onClick={() => onSubtract(item.id)}
                              />
                              <div className="dropdown-item-number">{`x${item.num}`}</div>
                              <Button
                                shape="circle"
                                size="small"
                                icon={<PlusOutlined />}
                                onClick={() => onAdd(item)}
                              />
                            </div>
                            <div className="dropdown-item-price">{`$${
                              item.num * item.price
                            }`}</div>
                          </div>
                        </div>
                        <img
                          src={closeIcon}
                          alt=""
                          onClick={() => onRemove(item.id)}
                          className="dropdown-item-close"
                        />
                      </div>
                    ))}
                    <div className="dropdown-bottom">
                      <div className="dropdown-bottom-total">
                        <div className="dropdown-bottom-total-label">Total</div>
                        <div className="dropdown-bottom-total-value">{`$${total}`}</div>
                      </div>
                      <Button
                        size="large"
                        className="dropdown-bottom-btn"
                        type="primary"
                      >
                        Checkout
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="no-data">
                    <img src={emptyIcon} alt="" />
                    <div>No data to display</div>
                  </div>
                )}
              </div>
            )}
          >
            <div className="navbar-cart-wrapper">
              <img src={cartIcon} alt="" className="navbar-cart" />
              {state.product.length > 0 && (
                <div className="navbar-cart-num">{state.product.length}</div>
              )}
            </div>
          </Dropdown> */}
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
};
export default withStyles(styles)(Navbar);
