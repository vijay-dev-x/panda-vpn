import "./App.scss";
import Hero from "./components/hero/Hero";
import Protect from "./components/protect/Protect";
import Service from "./components/service/Service";
import Location from "./components/location/Location";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Plan from "./components/plan/Plan";
function App() {
  return (
    <>
      <div>
        <Hero></Hero>
        <Service></Service>
        <Protect></Protect>
        <Location></Location>
        <Banner></Banner>
        <Plan></Plan>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
