import "../../App.css";
import HeroSection from "../HeroSection";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cards from "../Cards";
import LearnRecipe from "./LearnRecipe.jsx";
import Footer from "../Footer";
function Home() {
  return (
    <>
      <HeroSection />
      {/* <Cards /> */}
      {/* <Footer /> */}
      {/* <Router>
        <Switch>
        <Route path='/learn-recipe' component={LearnRecipe} />
        </Switch>
        </Router> */}
    </>
  );
}
export default Home;
