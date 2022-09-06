import * as React from "react";
import { css } from "../style/style";
import Container from "./Container";

class Content extends React.Component {
  render() {
    const title = "Next Meetup";
    const contentTitle = "Awesome meetup and event";
    const contentDate = "25 January 2019";
    const content = [
      "Hello, JavaScript & Node.js Ninjas",
      "Get ready for our montly meetup JakartaJS! This will be our fifth meetup of 2018!",
      "The meetup format will contain some short stories and technical talks.",
      "If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements",
    ];
    const remember =
      "Remember to bring a photo ID to get through building security.";
    const seeYou = "See you there!";
    const best =
      "Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers";
    return (
      <Container title={title}>
        <div className={styles.contentContainer()}>
          <div className={styles.cardContainer()}>
            <div className={styles.boldText()}>{contentTitle}</div>
            <div className={styles.dateStyle()}>{contentDate}</div>
            <div style={{ marginTop: 8 }}>
              {content.map((item) => (
                <div>{item} </div>
              ))}
            </div>
            <div style={{ marginTop: 12 }}>{remember}</div>
            <div style={{ marginTop: 24 }}>{`- - - - -`}</div>
            <div style={{ marginTop: 24 }}>{seeYou}</div>
            <div style={{ marginTop: 24 }}>{best}</div>
          </div>
        </div>
      </Container>
    );
  }
}

const styles = {
  boldText: css({
    fonWeight: "bold",
  }),
  cardContainer: css({
    backgroundColor: "#C4C4C4",
    padding: 16,
    display: "flex",
    flexDirection: "column",
  }),
  contentContainer: css({
    marginTop: 8,
    marginLeft: 18,
    marginRight: 18,
  }),
  dateStyle: css({
    marginTop: 8,
    fontWeight: "bold",
    color: "#9E9E9E",
  }),
};

export default Content;
