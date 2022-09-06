import * as React from "react";
import { css } from "../style/style";
import Container from "./Container";
import PastContentCard from "./PastContentCard";

export default class PastContent extends React.Component {
  render() {
    const title = "Past Meetups";
    const renderContent = this.props.pastContentCards;
    return (
      <Container title={title}>
        <div className={styles.contentContainer()}>
          {renderContent.map((item, idx) => (
            <PastContentCard
              item={item}
              separatorRight={idx !== renderContent.length - 1}
            />
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
    display: "flex",
    justifyContent: "space-between",
  }),
};
