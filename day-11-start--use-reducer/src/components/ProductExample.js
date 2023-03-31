import {useState, useReducer} from "react";

const ACTIONS = {
  ADD_PRODUCT: "add-product",
  DELETE_PRODUCT: "delete-product"
}


function reducer(products, action) {
  console.log("products ", products);
  console.log("action: ", action);

  switch (action.type) {
    case ACTIONS.ADD_PRODUCT:
      return [...products, {id: Date.now(), name: action.payload.productName}]
    case ACTIONS.DELETE_PRODUCT:
      return products.filter(product => product.id !== action.payload.id);
      // filter my products and return the products that it is not equal to the product id i passed
    default:
      return products
  }
}

const ProductExample = () => {
  const [products, dispatch] = useReducer(reducer, []);
  const [productName, setProductName] = useState("");

  function handleSubmit(event) {
    console.log("hello you submitted me");
    event.preventDefault();// avoid the refreshing of the page
    console.log("state productName: ", productName);

    dispatch({type: ACTIONS.ADD_PRODUCT, payload: {productName: productName}})
    // clear the input for me
    setProductName("");
  }

  function handleDeleteProduct(id) {
    console.log("btn clicked!!!!");
    console.log("id", id);
    dispatch({
      type: ACTIONS.DELETE_PRODUCT,
      payload: {
        id: id
      }
    })
  }

  return (
    <>
      <h1>Product List</h1>

      <form onSubmit={handleSubmit}>
        <div className="product__container">
          <label>Product name:</label>
          <input type="text"
                 placeholder="Please write the name of your product"
                 value={productName}
                 onChange={event => setProductName(event.target.value)}
          />
        </div>
      </form>

      <hr/>

      {/*<h1>{productName}</h1>*/}
      <ul>
        {products.map(item => {
          return (
            <li key={item.id}>
              <span>{item.name}</span>
              <button onClick={() => handleDeleteProduct(item.id)}>Delete</button>
            </li>
          )
        })}
      </ul>

    </>
  );
};

export default ProductExample;
