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
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <Projects path="/projects" />
          </Route>
          <Route>
            <OurServices path="/ourservices" />
          </Route>
          <Route>
            <About exact path="/about" />
          </Route>
          <Route>
            <ContactUs exact path="/contactus" />
          </Route>
        </Switch>
        <Footer />
      </PageContainer>
    </>
  );
}

export default App;
