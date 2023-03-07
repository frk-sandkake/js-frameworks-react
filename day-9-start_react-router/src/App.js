import './App.css';
import Header from "./components/shared/Header";
import Routes from "./routes/Router";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes/>
        <Footer/>
    </div>
  );
}

export default App;
