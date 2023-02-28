import './App.css';
import ProductList from "./components/ProductList";

const products = [
  { id: 0, title: 'Bread' },
  { id: 1, title: 'Milk' },
  { id: 2, title: 'Cheese' },
  { id: 3, title: 'Water' },
];

function App() {
  // some other way is to do this
  // we put the iteration in a variable and then use it in the return
  const productList = products.map((product) => (
    // <li>{product.title}</li>
    <li key={product.id}>{product.title}
    </li>
  ))
  return (
    <div className="App">
      {/*Like this you will get an error that you need to put use a*/}
      {/*key*/}
      {/*Warning: Each child in a list should have a unique "key" prop.*/}
      <ul>
        {productList}
        {products.map((product) => (
          // <li>{product.title}</li>
          <li key={product.id}>{product.title}
          </li>
        ))}
      </ul>

      {/*To solve the key issue you need to use your item id as your*/}
      {/*key.*/}
      {/*<li key={product.id}>*/}

      <ProductList/>
    </div>
  );
}

export default App;
