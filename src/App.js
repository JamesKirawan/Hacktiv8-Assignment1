import * as React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Profile from "./components/Profile";
import Content from "./components/Content";
import About from "./components/About";
import Members from "./components/Members";
import Footer from "./components/Footer";
import PastContent from "./components/PastContent";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div style={{ marginLeft: 5, marginRight: 5 }}>
          <Profile />
          <Content type="next-meetup" />
          <About />
          <Members />
          <PastContent />
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
