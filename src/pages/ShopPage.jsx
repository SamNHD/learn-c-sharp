import BaseConsumer from "BaseComponent/BaseConsumer";
import React from "react";
import { withStyles } from "@mui/styles";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import CheckboxGroup from "../components/checkboxGroup/CheckboxGroup";
import Slider from "@mui/material/Slider";
import Product from "../components/Product";
import { PRODUCTS } from "../constant";
import SearchIcon from "@mui/icons-material/Search";
import noDataIcon from "../assets/imgs/png/noData.png";

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
    const { types } = this.props.data;
    if (e.target.checked) {
      this.addElement(types, e.target.name);
    } else {
      this.removeElement(
        types,
        types.find((item) => item === e.target.name)
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

  _getProducts(isFirst = false) {
    // Call API
    const { searchValue, types, brands, price } = this.props.data || {};
    let productsFilter = JSON.parse(JSON.stringify(PRODUCTS));
    if (isFirst) {
      this.updateObject(this.props.data, {
        productsFilter,
      });
      return;
    }

    if (searchValue) {
      productsFilter = productsFilter.filter((item) =>
        item.searchValue?.includes(searchValue?.toLowerCase())
      );
    }
    if (types.length > 0) {
      productsFilter = productsFilter.filter((item) =>
        types.includes(item.type.id)
      );
    }
    if (brands.length > 0) {
      productsFilter = productsFilter.filter((item) =>
        brands.includes(item.brand.id)
      );
    }
    productsFilter = productsFilter.filter((item) => item.price <= price);
    this.updateObject(this.props.data, {
      productsFilter,
    });
  }

  _onAddProduct = (id) => {
    const { products } = this.props.data || {};
    const findProduct = products.find((item) => item.id === id);

    if (findProduct?.num) {
      findProduct.num += 1;
      this.forceUpdate();
    } else {
      this.addElement(products, { id, num: 1 });
    }
  };

  componentDidMount() {
    // Call API products list
    this._getProducts(true);
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchValue, types, brands, price } = this.props.data || {};
    if (
      searchValue !== prevProps.data.searchValue ||
      types !== prevProps.data.types ||
      brands !== prevProps.data.brands ||
      price !== prevProps.data.price
    ) {
      this._getProducts();
    }
  }

  consumerContent() {
    const { classes } = this.props;
    const { searchValue, types, brands, price, productsFilter } =
      this.props.data || {};
    return (
      <div className={classes.shopPage}>
        <div className={classes.shopPageContainer}>
          <div className={classes.shopPageSearch}>
            <TextField
              classes={{
                root: classes.searchInput,
              }}
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
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
                  value={types}
                  options={PRODUCT_TYPES}
                  onChange={this._onChangeProductTypes}
                  vertical
                />
              </div>
              <div className={classes.shopPageFilterItem}>
                <div className={classes.shopPageFilterItemLabel}>Brand</div>
                <CheckboxGroup
                  value={brands}
                  options={PRODUCTS_BRANDS}
                  onChange={this._onChangeBrands}
                  vertical
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
                    className={classes.shopPageProductItem}
                    product={product}
                    onAdd={this._onAddProduct}
                  />
                ))
              ) : (
                <div className={classes.shopPageEmpty}>
                  <img
                    src={noDataIcon}
                    alt=""
                    className={classes.shopPageEmptyIcon}
                    width={300}
                    height={300}
                  />
                  <div>No data to display</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  shopPage: {
    marginTop: "30px",
  },
  shopPageContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  shopPageSearch: {
    display: "flex",
    justifyContent: "center",
  },
  searchInput: {
    "& .MuiInputBase-root": {
      borderRadius: "28px",
      border: "1px solid #E0E0E0",
      width: "400px",
    },
  },
  shopPageContent: {
    display: "flex",
    gap: "60px",
    marginTop: "30px",
    height: "calc(100vh - 189px)",
  },
  shopPageFilter: {
    width: "250px",
    height: "fit-content",
    display: "grid",
    gap: "20px",
    fontWeight: 500,
  },
  shopPageFilterItem: {
    border: "1px solid #ebebef",
    borderRadius: "24px",
    padding: "16px",
    background: "#fbfbfb",
  },
  shopPageFilterItemLabel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "20px",
    fontWeight: 500,
    color: "#000",
  },
  shopPageSlider: {
    width: "90%",
  },
  shopPageProducts: {
    flex: 1,
    display: "flex",
    flexWrap: "wrap",
    height: "100%",
    overflowY: "auto",
    gap: "30px",
  },
  shopPageProductItem: {},
  shopPageEmpty: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 500,
    fontSize: "20px",
  },
};
export default withStyles(styles)(ShopPage);
