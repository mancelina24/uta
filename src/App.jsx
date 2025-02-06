import "./App.css";
import Header from "./compenents/Header";
import Footer from "./compenents/Footer";
import Home from "./page/Home";
import Projects from "./page/Projects";
import About from "./page/About";
import ContactUs from "./page/ContactUs";
import { PageContainer } from "./container/PageContainer";
import { Switch, Route } from "react-router-dom";
import OurServices from "./page/OurServices";

function App() {
  return (
    <>
      <PageContainer>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ourservices" component={OurServices} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={ContactUs} />
        </Switch>
        <Footer />
      </PageContainer>
    </>
  );
}

export default App;
