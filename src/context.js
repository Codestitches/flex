import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

//creating context API(which prevent you from prop drilling i.e passing one page
//from one place to another) it works like REDUX

//creating new context object
const ProductContext = React.createContext();
//context comes with two components when created which are:
//provider--provides all the information for all our application.
//consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };
  handleDetail = () => {
    console.log("hello from detail");
  };
  addToCart = (id) => {
    console.log(`hello from add to cart.id is ${id}`);
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
