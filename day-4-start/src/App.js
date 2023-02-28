import './App.css';

const products = [
  {id: 83742398, name: "Milk", price: "300"}, // 0
  {id: 4732347, name: "Candy", price: "200"}, // 1
  {id: 3424, name: "Chocolate", price: "100"}, // 2
  {id: 6565, name: "Spray", price: "900"}, // 3
]

function App() {

  const productList = products.map(({name, price, id}, index) => {
      if (index >= 2) {
        return null
      }
      return (
        <li key={id}>
          <span>Name: {name}</span>
          <span>Price: {price}</span>
        </li>
      )
    }
  )

  return (
    <div className="App">
      <ul>
        {productList}
      </ul>
    </div>
  );
}

export default App;
