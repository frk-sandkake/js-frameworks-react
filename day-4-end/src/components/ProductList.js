import ProductListItem from "./ProductListItem";

const products = [
  {id: 0, title: 'Bread'},
  {id: 1, title: 'Milk'},
  {id: 2, title: 'Cheese'},
  {id: 3, title: 'Water'},
];

function ProductList() {
  return (
    <div className="ProductList">
      <ul>
        {products.map((product) => (
            // <productListItem id={product.id}/>
            <ProductListItem
              key={product.id}
              {...product}
            />
          )
        )}
      </ul>
    </div>
  );
}

export default ProductList;
