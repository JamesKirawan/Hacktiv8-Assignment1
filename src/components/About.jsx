import * as React from "react";
import { css } from "../style/style";
import Container from "./Container";

export default class About extends React.Component {
  render() {
    const title = "About Meetup";
    const renderContent = [
      "Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area",
      "Twitter: @JakartaJS and we use the hashtag #jakartajs",
    ];
    return (
      <Container title={title}>
        <div className={styles.contentContainer()}>
          {renderContent.map((item, idx) => (
            <div
              style={{
                marginBottom: idx === renderContent.length - 1 ? 0 : 16,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </Container>
    );
  }
}

const styles = {
  contentContainer: css({
    marginTop: 8,
    marginLeft: 18,
    marginRight: 18,
  }),
};
