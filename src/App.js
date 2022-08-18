import Carousel from './components/carousel';
import FoodItems from './components/foodItems';
import Footer from './components/footer';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
        <Navbar /> 
        <Carousel />
        <FoodItems />
        <Footer />
    </div>
  );
}

export default App;
