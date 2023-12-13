
import './App.css';
import Explore from './component/explore/Explore';
import Header from './component/header/Header';
import WhytoChoose from './component/whytochooseus/WhytoChoose';
import WhyChooseOneWay from './component/whytochooseus/WhyChooseOneWay';
import Details from './component/details/Details';
import Discovering from './component/discover/Discovering';
import YatriRental from './component/yatrirental/YatriRental';
import Footer from './component/footer/Footer';




function App() {
  return (
   <>
   <Header/>
   <Explore/>
   <Details/>
   <WhytoChoose/>
   <WhyChooseOneWay/>
   <Discovering/>
   <YatriRental/>
   <Footer/>
    </>
  );
}

export default App;
