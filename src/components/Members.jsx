import * as React from "react";
import { css } from "../style/style";
import Container from "./Container";

function ItemComponent(props) {
  const { item, organizers, others } = props;
  return (
    <div className={styles.contentContainer()}>
      <div className={styles.cardContainer()}>
        <div
          className={styles.imageStyle()}
          style={{
            borderRadius: item.isRoundedPhoto ? 9999 : 0,
          }}
        />
        <div className={styles.cardContentContainer()}>
          <div>{organizers}</div>
          <div className={styles.cardNameContainer()}>
            <div>{item.name}</div>
            <div style={{ marginLeft: 30 }}>{others}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default class Members extends React.Component {
  render() {
    const title = "Members";
    const organizers = "Organizers";
    const others = "4 others.";
    const name = "Adhy Wiranata";
    const seeAll = "See All";
    return (
      <Container title={title} rightTitle={seeAll}>
        {this.props.members.map((item) => (
          <ItemComponent item={item} organizers={organizers} others={others} />
        ))}
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
  cardContainer: css({
    backgroundColor: "#C4C4C4",
    padding: 16,
    display: "flex",
    flexDirection: "row",
  }),
  cardContentContainer: css({
    flexDirection: "column",
    justifyContent: "space-around",
    display: "flex",
  }),
  cardNameContainer: css({
    flexDirection: "row",
    justifyContent: "space-between",
    display: "flex",
  }),
  imageStyle: css({
    width: 60,
    height: 60,
    backgroundColor: "#828282",
    marginRight: 15,
  }),
};
