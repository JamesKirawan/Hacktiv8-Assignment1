import * as React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Content from "./components/Content";
import About from "./components/About";
import Members from "./components/Members";
import Footer from "./components/Footer";
import PastContent from "./components/PastContent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        title: "Hacktiv8 Meetup",
        location: "Jakarta, Indonesia",
        members: "1,078",
        organizers: "Adhy Wiranata",
        join: "Join Us",
      },
      members: [
        {
          name: "Adhy Wiranata",
          isRoundedPhoto: true,
        },
      ],
      pastContentCards: [
        {
          date: "27 November 2017",
          content: "#39 JakartaJS April Meetup with",
          with: "kumparan",
          number: "139",
        },
        {
          date: "27 October 2017",
          content: "#38 JakartaJS April Meetup with",
          with: "BliBli",
          number: "113",
        },
        {
          date: "27 September 2017",
          content: "#37 JakartaJS April Meetup with",
          with: "Hacktiv8",
          number: "110",
        },
      ],
    };

    this.setMembers = this.setMembers.bind(this);
  }

  setMembers(data) {
    this.setState({
      ...this.state,
      members: [data],
    });
  }

  setPastContentCards(data) {
    this.setState({
      ...this.state,
      pastContentCards: [data],
    });
  }

  render() {
    return (
      <>
        <Navbar />
        <div style={{ marginLeft: 5, marginRight: 5 }}>
          <Profile profile={this.state.profile} />
          <Content />
          <About />
          <Members members={this.state.members} />
          <PastContent pastContentCards={this.state.pastContentCards} />
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
