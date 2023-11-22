import BaseConsumer from "BaseComponent/BaseConsumer";
import React from "react";
import { withStyles } from "@mui/styles";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import CheckboxGroup from "../components/checkboxGroup/CheckboxGroup";
import Slider from "@mui/material/Slider";
import Product from "../components/Product";

const PRODUCT_TYPES = [
  {
    label: "Keyboards",
    value: "111",
  },
  {
    label: "Keycaps",
    value: "112",
  },
  {
    label: "Switches",
    value: "113",
  },
];

const PRODUCTS_BRANDS = [
  {
    label: "Chosfox",
    value: "121",
  },
  {
    label: "Binepad",
    value: "122",
  },
  {
    label: "Keychron",
    value: "123",
  },
];

class ShopPage extends BaseConsumer {
  constructor(props) {
    super(props);
  }

  _onChangeSearchValue = (e) => {
    this.updateObject(this.props.data, { searchValue: e.target.value });
  };

  _onChangeProductTypes = (e) => {
    const { productTypes } = this.props.data;
    if (e.target.checked) {
      this.addElement(productTypes, e.target.name);
    } else {
      this.removeElement(
        productTypes,
        productTypes.find((item) => item === e.target.name)
      );
    }
  };

  _onChangeBrands = (e) => {
    const { brands } = this.props.data;
    if (e.target.checked) {
      this.addElement(brands, e.target.name);
    } else {
      this.removeElement(
        brands,
        brands.find((item) => item === e.target.name)
      );
    }
  };

  _onChangePrice = (e) => {
    this.updateObject(this.props.data, { price: e.target.value });
  };

  consumerContent() {
    const { classes } = this.props;
    const { searchValue, productTypes, brands, price } = this.props.data || {};
    return (
      <div className={classes.shopPage}>
        <div className={classes.shopPageSearch}>
          <TextField
            classes={{
              root: classes.searchInput,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            value={searchValue}
            onChange={this._onChangeSearchValue}
          />
        </div>
        <div className={classes.shopPageContent}>
          <div className={classes.shopPageFilter}>
            <div className={classes.shopPageFilterItem}>
              <div className={classes.shopPageFilterItemLabel}>
                Product types
              </div>
              <CheckboxGroup
                value={productTypes}
                options={PRODUCT_TYPES}
                onChange={this._onChangeProductTypes}
              />
            </div>
            <div className={classes.shopPageFilterItem}>
              <div className={classes.shopPageFilterItemLabel}>Brand</div>
              <CheckboxGroup
                value={brands}
                options={PRODUCTS_BRANDS}
                onChange={this._onChangeBrands}
              />
            </div>
            <div className={classes.shopPageFilterItem}>
              <div className={classes.shopPageFilterItemLabel}>Price</div>
              <Slider
                classes={{
                  root: classes.shopPageSlider,
                }}
                min={0}
                max={200}
                aria-label="Default"
                valueLabelDisplay="auto"
                value={price}
                onChange={this._onChangePrice}
              />
            </div>
          </div>
          <div className={classes.shopPageProducts}>
            {productsFilter?.length > 0 ? (
              productsFilter.map((product) => (
                <Product
                  key={product.id}
                  className="shop-page-product-item"
                  product={product}
                  onAdd={onAdd}
                />
              ))
            ) : (
              <div className="no-data">
                <img src={emptyIcon} alt="" />
                <div>No data to display</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  shopPage: {},
  searchInput: {
    "& .MuiInputBase-root": {
      padding: "8px 14px",
      borderRadius: "12px",
      border: "1px solid #E0E0E0",
    },
  },
};
export default withStyles(styles)(ShopPage);
